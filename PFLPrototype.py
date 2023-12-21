from flask import Flask, render_template, request, redirect, url_for, json
from flask_restful import reqparse
from views import views
from bscalc.calculate import calculatedData

app = Flask(__name__)

app.register_blueprint(views, url_prefix='/')

@app.route('/balance_sheet', methods=['POST', 'GET'])
def getIncomeNumbers():
    if request.method == "POST":
        return render_template('balance_sheet.html', sentence=calculatedData(request.form))
    else:
        return render_template('balance_sheet.html')

if __name__ == '__main__':
    app.run(debug=True)