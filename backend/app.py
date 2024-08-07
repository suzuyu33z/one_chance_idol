from flask import Flask, request
from flask import jsonify, session
import json
from flask_cors import CORS

from db_control import crud, mymodels

import requests

from werkzeug.security import check_password_hash
from sqlalchemy.orm import Session
from db_control.connect import engine
# Azure Database for MySQL
# REST APIでありCRUDを持っている
app = Flask(__name__)
app.secret_key = 'your_secret_key'
CORS(app)

@app.route("/")
def index():
    return "<p>Flask top page!</p>"

#新規登録時のコード（visitor）
@app.route("/api/register", methods=["POST"])
def register_user():
    data = request.get_json()
    print("Received form data:", data)

    values = {
        "name": data.get("name"),
        "email": data.get("email"),
        "password": data.get("password"),
        "image": data.get("image"),
        "bio": data.get("bio"),
        "dog_number": data.get("dog_number", 0),
        "points": data.get("points", 0)
    }

    result = crud.register_user(mymodels.User, values)  # CRUD関数を呼び出す

    if "User registered successfully" in result:
        return jsonify({"message": result}), 200
    else:
        return jsonify({"error": result}), 500

#ログイン時のコード
@app.route("/api/login", methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    with Session(engine) as db_session:
        user = db_session.query(mymodels.User).filter_by(email=email).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.user_id
            return jsonify({'message': 'Logged in successfully'})
        else:
            return jsonify({'error': 'Invalid credentials'}), 401

#散歩情報取得のコード
@app.route("/api/walks", methods=["GET"])
def get_walks():
    walk_data = crud.get_all_walks()  # crud.pyの関数を呼び出し
    return jsonify(walk_data)

#散歩詳細の取得
@app.route("/api/walks/<int:walk_id>", methods=["GET"])
def get_walk_detail(walk_id):
    walk = crud.get_walk_by_id(walk_id)
    if walk:
        return jsonify(walk)
    else:
        return jsonify({"error": "Walk not found"}), 404

#home画面で自分の予定を取得するためのもの
@app.route("/api/all_user_walks", methods=["GET"])
def get_all_user_walks():
    walk_data = crud.get_all_walks_by_requests()
    return jsonify(walk_data)



@app.route("/customers", methods=['POST'])
def create_customer():
    values = request.get_json()
    # values = {
    #     "customer_id": "C005",
    #     "customer_name": "佐藤Aこ",
    #     "age": 64,
    #     "gender": "女"
    # }
    tmp = crud.myinsert(mymodels.Customers, values)
    result = crud.myselect(mymodels.Customers, values.get("customer_id"))
    return result, 200

@app.route("/customers", methods=['GET'])
def read_one_customer():
    model = mymodels.Customers
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.myselect(mymodels.Customers, target_id)
    return result, 200

@app.route("/allcustomers", methods=['GET'])
def read_all_customer():
    model = mymodels.Customers
    result = crud.myselectAll(mymodels.Customers)
    return result, 200

@app.route("/customers", methods=['PUT'])
def update_customer():
    print("I'm in")
    values = request.get_json()
    values_original = values.copy()
    model = mymodels.Customers
    # values = {  "customer_id": "C004",
    #             "customer_name": "鈴木C子",
    #             "age": 44,
    #             "gender": "男"}
    tmp = crud.myupdate(model, values)
    result = crud.myselect(mymodels.Customers, values_original.get("customer_id"))
    return result, 200

@app.route("/customers", methods=['DELETE'])
def delete_customer():
    model = mymodels.Customers
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.mydelete(model, target_id)
    return result, 200

@app.route("/fetchtest")
def fetchtest():
    response = requests.get('https://jsonplaceholder.typicode.com/users')
    return response.json(), 200


@app.route("/messages", methods=['POST'])
def create_message():
    values = request.get_json()
    tmp = crud.myinsert(mymodels.Messages, values)
    return jsonify({'status': 'Message created'}), 201

@app.route("/messages", methods=['GET'])
def read_messages_by_customer_id():
    customer_id = request.args.get('customer_id')
    results = crud.myselectMessagesByCustomerId(mymodels.Messages, customer_id)
    return results, 200