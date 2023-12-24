from flask import Flask, render_template, request, redirect, url_for, json, jsonify
from flask_restful import reqparse
from views import views
from bscalc.calculate import calculatedData

app = Flask(__name__)

app.register_blueprint(views, url_prefix='/')

app.config.from_pyfile('config.py')


@app.route('/balance_sheet', methods=['POST', 'GET'])
def balanceSheet():
    if request.method == "POST":
        return render_template('balance_sheet.html', sentence=calculate())
    else:
        return render_template('balance_sheet.html')
    

@app.route('/handle_form', methods=['POST'])
def calculate():
    if request.method == "POST":
        return calculatedData(request.form)




if __name__ == '__main__':
    app.run(debug=True)