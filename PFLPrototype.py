from flask import Flask, render_template, request, redirect, url_for, json, jsonify
from flask_restful import reqparse
from views import views
from bscalc.calculate import handleData

app = Flask(__name__)

app.register_blueprint(views, url_prefix='/')

app.config.from_pyfile('config.py')


@app.route('/balance_sheet', methods=['POST', 'GET'])
def balanceSheet():
    if request.method == "POST":
        return render_template('balance_sheet.html')
    else:
        return render_template('balance_sheet.html')
    

@app.route('/handle_form', methods=['POST'])
def calculate():
    if request.method == "POST":
        data = request.get_json()
        inc, exp = handleData(data)
        return render_template('report.html', income_sentence=inc, expense_sentence=exp)


if __name__ == '__main__':
    app.run(debug=True)