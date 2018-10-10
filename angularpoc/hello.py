from flask import Flask, Response, request
from flask_cors import CORS
app = Flask(__name__)
import pyodbc
import json

server = 'localhost'
database = 'mydb'
username = 'SA'
password = 'W0rked@juspay'
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
cursor = cnxn.cursor()
@app.route('/api/record')
def hello_world():
   cursor.execute('select * from products;')
   row = cursor.fetchone()
   data=[]
   while row:
       print(row)
       data.append({
    "productId": row[0],
    "productName":row[1],
    "productCode": row[2],
    "releaseDate":row[3],
    "description":row[4],
    "price": row[5],
    "starRating": row[6],
    "imageUrl": row[7]
       })

       row = cursor.fetchone()
   return Response(json.dumps(data),  mimetype='application/json')
@app.route('/api/login',methods=['POST'])
def login():
    if(request.method=='POST'):
        username=json.loads((request.data).decode("utf-8"))['username']
        password=json.loads((request.data).decode("utf-8"))['password']
        cursor.execute("select * from users where username = '"+username+"' and password = '"+password+"';");
        row=cursor.fetchall()
        if(len(row) > 0):
          return Response(json.dumps({"status":200}),mimetype='application/json')
        else:
           return Response(json.dumps({"status":404}),mimetype='application/json')
    return Response(json.dumps({"status": 404}), mimetype='application/json')

@app.route('/api/addProduct',methods=['POST'])
def addproduct():
    username = json.loads((request.data).decode("utf-8"))['username']
    productId= json.loads((request.data).decode("utf-8"))['productId']
    cursor.execute("")
if __name__ == '__main__':
   app.run(port=4900)