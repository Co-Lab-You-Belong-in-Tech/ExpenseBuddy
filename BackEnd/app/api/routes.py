from flask import Blueprint, request, jsonify, render_template
from helpers import token_required
from models import db, User, Expense, Address, expense_schema, expenses_schema, address_schema, addresses_schema

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/addresses', methods=['GET'])
@token_required
def get_all_addresses_by_user(current_user_token):
    chosenUser = User.query.filter_by(token = current_user_token.token).first()
    if chosenUser:
        response = addresses_schema.dump(chosenUser.user_address)
        return jsonify(response)
    return jsonify({
        "message": "User does not exist.",
        "success": False
    })

@api.route('/address', methods = ['POST'])
@token_required
def create_address(current_user_token):
    content = request.json
    address = Address(
        address_name = content['address_name'],
        address_street = content['address_street'],
        address_city = content['address_city'],
        address_state = content['address_state'],
        address_zip = content['address_zip'],
        user_id = content['user_id'])
    address.commit()
    response = address_schema.dump(address)
    return jsonify(response)

@api.route('/getdata')
def getdata():
    return {'some': 'value'}

@api.route('/expense', methods = ['POST'])
@token_required
def create_expense(current_user_token):
    content = request.json
    expense = Expense(
        expense_date = content['expense_date'],
        expense_time = content['expense_time'],
        expense_type = content['expense_type'],
        expense_dollar_amt = content['expense_dollar_amt'],
        expense_mileage = content['expense_mileage'],
        expense_odom_start = content['expense_odom_start'],
        expense_odom_end = content['expense_odom_end'],
        expense_notes = content['expense_notes'],
        user_id = content['user_id']
    )
    expense.commit()
    response = expense_schema.dump(expense)
    return jsonify(response)

@api.route('/expense', methods = ['GET'])
@token_required
def get_expense(current_user_token):
    a_user = current_user_token.token
    expense = Expense.query.filter_by(user_token = a_user).all()
    response = expenses_schema.dump(expense)
    return jsonify(response)

#Optional 
@api.route('/expense/<expense_id>', methods = ['GET'])
@token_required
def get_single_expense(current_user_token, expense_id):
    expense = Expense.query.get(expense_id)
    response = expense_schema.dump(expense)
    return jsonify(response)

#Update endpoint
@api.route('/expense/<id>', methods = ['POST','PUT'])
@token_required
def update_expense(current_user_token, expense_id):
    expense = Expense.query.get(expense_id) 
    expense.expense_type = request.json['expense_type']
    expense.expense_dollar_amt = request.json['expense_dollar_amt']
    expense.mileage = request.json['mileage']
    expense.user_token = current_user_token.token

    db.session.commit()
    response = expense_schema.dump(expense)
    return jsonify(response)

# Delete end
@api.route('/expense/<id>', methods = ['DELETE'])
@token_required
def delete_expense(current_user_token, expense_id):
    expense = Expense.query.get(expense_id)
    db.session.delete(expense)
    db.session.commit()
    response = expense_schema.dump(expense)
    return jsonify(response)