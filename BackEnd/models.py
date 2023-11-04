from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import uuid 
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_login import LoginManager
from flask_marshmallow import Marshmallow 
import secrets

# set variables for class instantiation
login_manager = LoginManager()
ma = Marshmallow()
db = SQLAlchemy()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class User(db.Model, UserMixin):
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(150), nullable=True, default='')
    last_name = db.Column(db.String(150), nullable = True, default = '')
    email = db.Column(db.String(150), nullable = False)
    password = db.Column(db.String, nullable = True, default = '')
    g_auth_verify = db.Column(db.Boolean, default = False)
    token = db.Column(db.String, default = '', unique = True )
    date_created = db.Column(db.DateTime, nullable = False, default = datetime.utcnow)
    user_expense = db.relationship('Expense',  backref='expense', lazy=True)
    user_address = db.relationship('Address', backref='address', lazy=True)

    def __init__(self, email, first_name='', last_name='', password='', g_auth_verify=False):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name
        self.password = self.set_password(password)
        self.token = self.set_token(24)
        self.g_auth_verify = g_auth_verify

    def commit(self):
        db.session.add(self)
        db.session.commit()

    def set_token(self, length):
        return secrets.token_hex(length)
    
    def set_password(self, password):
        return generate_password_hash(password)
    
    def check_password(self, password_input):
        return check_password_hash(self.password, password_input)

    def __repr__(self):
        return f'User {self.email} has been added to the database'

class Expense(db.Model):
    expense_id = db.Column(db.Integer, primary_key = True)
    expense_date = db.Column(db.DateTime, nullable = False, default = datetime.utcnow)
    expense_time = db.Column(db.Time)
    expense_type = db.Column(db.String(150), nullable = False)
    expense_dollar_amt = db.Column(db.NUMERIC(10,2))
    expense_mileage = db.Column(db.NUMERIC(10,2))
    expense_loc_start_id = db.Column(db.Integer)
    expense_loc_end_id = db.Column(db.Integer)
    expense_odom_start = db.Column(db.Integer)
    expense_odom_end = db.Column(db.Integer)
    expense_notes = db.Column(db.String(300), nullable=True, default='')
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable = False)

    def commit(self):
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f'The following bottle has been added to your home bar: {self.brand}'

class ExpenseSchema(ma.Schema):
    class Meta:
        fields = [
            'expense_id',
            'expense_date', 
            'expense_time,'
            'expense_type', 
            'expense_dollar_amt',
            'expense_mileage',
            'expense_loc_start_id',
            'expense_loc_end_id',
            'expense_odom_start',
            'expense_notes'
        ]

expense_schema = ExpenseSchema()
expenses_schema = ExpenseSchema(many=True)

class Address(db.Model):
    address_id = db.Column(db.Integer, primary_key = True)
    address_name = db.Column(db.String(150))
    address_street = db.Column(db.String(150), nullable = False)
    address_city = db.Column(db.String(150))
    address_state = db.Column(db.String(2))
    address_zip = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable = False)
        
    def commit(self):
        db.session.add(self)
        db.session.commit()

    def __repr__(self):
        return f'The address has been added!'
    
class AddressSchema(ma.Schema):
    class Meta:
        fields = [
            'address_id', 
            'address_name', 
            'address_street', 
            'address_city',
            'address_state', 
            'address_zip']

address_schema = AddressSchema()
addresses_schema = AddressSchema(many=True)