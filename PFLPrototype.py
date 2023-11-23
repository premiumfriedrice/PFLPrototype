from flask import Flask, render_template, request, redirect, url_for
from views import views
from calculate import calculatedData

app = Flask(__name__)

app.register_blueprint(views, url_prefix='/')


@app.route('/balance_sheet', methods=['POST', 'GET'])
def getIncomeNumbers():
    if request.method == "POST":
        income_list = []
        income_name = request.form['income-name']
        income_amount = request.form['income-amount']
        income_frequency = request.form['income-frequency']
        income_list = [income_name, income_amount, income_frequency]
        return calculatedData(income_list)#render_template('balance_sheet.html', sentence=calculatedData(income_list))
    else:
        return render_template('balance_sheet.html')


if __name__ == '__main__':
    app.run(debug=True)