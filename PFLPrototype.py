from flask import Flask, render_template, request, redirect, url_for, json, jsonify, session
from flask_restful import reqparse
from views import views
from bscalc.calculate import handleMonthlyData, monthlyIncomeChartData, monthlyExpenseChartData

app = Flask(__name__)

app.register_blueprint(views, url_prefix='/')

app.config.from_pyfile('config.py')


income_chart_obj = [[''], [1]]      # Make this refresh to default when page reloads
expense_chart_obj = [[''], [1]]     # Change to session eventually


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
        inc, exp = handleMonthlyData(data)
        handleChartData(data)
        return render_template('report.html', income_sentence=inc, expense_sentence=exp)
    

def handleChartData(data):
    global income_chart_obj 
    global expense_chart_obj
    income_chart_obj = [[''], [1]]     
    expense_chart_obj = [[''], [1]]
    if ('Incomes' in data) and ('Expenses' in data):
        income_chart_obj[0], income_chart_obj[1] = monthlyIncomeChartData(data['Incomes'])
        expense_chart_obj[0], expense_chart_obj[1] = monthlyExpenseChartData(data['Expenses'])
    elif ('Incomes' in data) and ('Expenses' not in data):
        income_chart_obj[0], income_chart_obj[1] = monthlyIncomeChartData(data['Incomes'])
    elif ('Incomes' not in data) and ('Expenses' in data):
        expense_chart_obj[0], expense_chart_obj[1] = monthlyExpenseChartData(data['Expenses'])


@app.route('/income_chart_data', methods=['GET'])
def getIncomeChartData():
    if request.method == "GET":
        names, amounts = income_chart_obj[0], income_chart_obj[1]
        return jsonify({'names': names, 'amounts': amounts})
    

@app.route('/expense_chart_data', methods=['GET'])
def getExpenseChartData():
    if request.method == "GET":
        names, amounts = expense_chart_obj[0], expense_chart_obj[1]
        return jsonify({'names': names, 'amounts': amounts})
    

@app.route('/clear_charts')  # maybe do this in JS?
def refresh():
    global income_chart_obj 
    global expense_chart_obj
    income_chart_obj = [[''], [1]]
    expense_chart_obj = [[''], [1]]
    return redirect(url_for('balanceSheet'))


if __name__ == '__main__':
    app.run(debug=True)