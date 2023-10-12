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
    id = db.Column(db.String, primary_key=True)
    first_name = db.Column(db.String(150), nullable=True, default='')
    last_name = db.Column(db.String(150), nullable = True, default = '')
    email = db.Column(db.String(150), nullable = False)
    password = db.Column(db.String, nullable = True, default = '')
    g_auth_verify = db.Column(db.Boolean, default = False)
    token = db.Column(db.String, default = '', unique = True )
    date_created = db.Column(db.DateTime, nullable = False, default = datetime.utcnow)

    def __init__(self, email, first_name='', last_name='', password='', token='', g_auth_verify=False):
        self.id = self.set_id()
        self.first_name = first_name
        self.last_name = last_name
        self.password = self.set_password(password)
        self.email = email
        self.token = self.set_token(24)
        self.g_auth_verify = g_auth_verify

    def set_token(self, length):
        return secrets.token_hex(length)

    def set_id(self):
        return str(uuid.uuid4())
    
    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)
        return self.pw_hash

    def __repr__(self):
        return f'User {self.email} has been added to the database'

class Expense(db.Model):
    expense_id = db.Column(db.String, primary_key = True)
    expense_date = db.Column(db.DateTime, nullable = False, default = datetime.utcnow)
    expense_type = db.Column(db.String(150), nullable = False)
    expense_dollar_amt = db.Column(db.NUMERIC(10,2))
    expense_mileage = db.Column(db.NUMERIC(10,2))

    user_token = db.Column(db.String, db.ForeignKey('user.token'), nullable = False)

    def __init__(self, expense_date, expense_type, expense_dollar_amt, expense_mileage, expense_id = ''):
        self.expense_id = self.set_id()
        self.expense_date = expense_date
        self.expense_type = expense_type
        self.expense_dollar_amt = expense_dollar_amt
        self.expense_mileage = expense_mileage


    def __repr__(self):
        return f'The following bottle has been added to your home bar: {self.brand}'

    def set_id(self):
        return (secrets.token_urlsafe())

class ExpenseSchema(ma.Schema):
    class Meta:
        fields = ['expense_id','expense_date', 'expense_type', 'expense_dollar_amt' ,'expense_mileage']

expense_schema = ExpenseSchema()
expenses_schema = ExpenseSchema(many=True)

class Address(db.Model):
    address_id = db.Column(db.String, primary_key = True)
    street_1 = db.Column(db.String(150), nullable = False)
    street_2 = db.Column(db.String(150))
    city = db.Column(db.String(150))
    state = db.Column(db.String(2))
    zip = db.Column(db.NUMERIC(5))
    address_type = db.Column(db.String(150))

    user_token = db.Column(db.String, db.ForeignKey('user.token'), nullable = False)

    def __init__(self, street_1, street_2, city, state, zip, address_type, address_id = ''):
        self.address_id = self.set_id()
        self.street_1 = street_1
        self.street_2 = street_2
        self.city = city
        self.state = state
        self.zip = zip
        self.address_type = address_type

    def __repr__(self):
        return f'The address has been added!'

    def set_id(self):
        return (secrets.token_urlsafe())
    
class AddressSchema(ma.Schema):
    class Meta:
        fields = ['address_id','street_1', 'street_2', 'city' ,'state', 'zip', 'address_type']

address_schema = AddressSchema()
addresses_schema = AddressSchema(many=True)