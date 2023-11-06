from flask import Blueprint, render_template

views = Blueprint(__name__, 'views')

@views.route('/')
def home():
    return render_template('home.html')

@views.route('/balance_sheet')
def balance_sheet():
    return render_template('balance_sheet.html')

@views.route('/gpa_calculator')
def gpa_calculator():
    return render_template('gpa_calculator.html')

@views.route('/grade_calculator')
def grade_calculator():
    return render_template('grade_calculator.html')