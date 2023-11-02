from forms import UserLoginForm
from models import User, db, check_password_hash
from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify

# imports for flask login 
from flask_login import login_user, logout_user, LoginManager, current_user, login_required

auth = Blueprint('auth', __name__, template_folder='auth_templates')

@auth.route('/signup', methods = ['GET', 'POST'])
def signup():
    form = UserLoginForm()

    try:
        if request.method == 'POST' and form.validate_on_submit():
            email = form.email.data
            password = form.password.data
            print(email, password)

            user = User(email, password = password)

            db.session.add(user)
            db.session.commit()

            flash(f'You have successfully created a user account {email}', 'User-created')
            return redirect(url_for('site.home'))
            
    except:
        raise Exception('Invalid form data: Please check your form')
    return render_template('signup.html', form=form)

@auth.route('/signin', methods = ['GET', 'POST'])
def signin():
    form = UserLoginForm()
    
    try:
        if request.method == 'POST' and form.validate_on_submit():
            email = form.email.data
            password = form.password.data
            print(email,password)

            logged_user = User.query.filter(User.email == email).first()
            if logged_user and check_password_hash(logged_user.password, password):
                login_user(logged_user)
                flash('You were successful in your initiation. Congratulations abd welcome!', 'auth-success')
                return redirect(url_for('site.profile'))
            else:
                flash('You do not have access to this content.', 'auth-failed')
                return redirect(url_for('auth.signin'))
    except:
        raise Exception('Invalid Form Data: Please Check your Form')
    return render_template('signin.html', form=form)

@auth.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('site.home'))

# Register User
@auth.route('/register', methods=["POST"])
def register_user():
    content = request.json
    email = content['email']
    password = content['password']
    first_name = content['first_name']
    last_name = content['last_name']
    email_check = User.query.filter_by(email=email).first()
    if email_check:
        return jsonify([{
            "message": "Email is already registered. Try again.",
            "success": False
        }])
    user = User(email=email, first_name=first_name, last_name=last_name, password=password)
    user.commit()
    return jsonify([{
        "message": f"{user.email} successfully registered!",
        "success": True,
        "first_name": user.first_name,
        "token": user.token
    }])

# Verify User
@auth.route('/verify', methods=["POST"])
def verify_user():
    content = request.json
    email = content['email']
    password = content['password']
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        return jsonify([{
            "message": f"{user.email} successfully verified!",
            "success": True,
            "username": user.email,
            "first_name": user.first_name,
            "token": user.token
        }])
    elif user and not user.check_password(password):
        return jsonify([{
        "message": "Password incorrect.",
        "error": "password",
        "success": False
    }])
    return jsonify([{
        "message": "User info not found.",
        "error": "user",
        "success": False
    }])