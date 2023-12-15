from flask import Flask, render_template, request, redirect, url_for
from flask_restful import reqparse
from views import views
from calculate import calculatedData

app = Flask(__name__)

app.register_blueprint(views, url_prefix='/')

@app.route('/balance_sheet', methods=['POST', 'GET'])
def getIncomeNumbers():
    if request.method == "POST":
        income_list = []
        income_name = request.form['income-name1']
        income_amount = request.form['income-amount1']
        income_frequency = request.form['income-frequency1']
        income_list = [income_name, income_amount, income_frequency]
        return render_template('balance_sheet.html', sentence=calculatedData(income_list))
    else:
        return render_template('balance_sheet.html')

if __name__ == '__main__':
    app.run(debug=True)