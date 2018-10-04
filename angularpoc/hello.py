from flask import Flask
app = Flask(__name__)
import pyodbc
server = 'localhost'
database = 'mydb'
username = 'SA'
password = 'W0rked@juspay'
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
@app.route('/')
def hello_world():
   cursor = cnxn.cursor()
   cursor.execute('select * from products;')
   row = cursor.fetchone()
   while row:
       print(row)
       row = cursor.fetchone()
   return 'Hello World'

if __name__ == '__main__':
   app.run(port=4400)