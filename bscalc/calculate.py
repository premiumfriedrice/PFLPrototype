from bscalc.clean_data import incomeDF, expenseDF

def MonthlyIncome(data):
    frq_to_month = {'daily': 30, 'weekly': 4, 'bi-weekly': 2, 'monthly': 1}
    inc = incomeDF(data)

    monthly = 0

    for row in range(len(inc)):
        r = inc.iloc[row] # Defines each row of dataframe
        if r['Frequencies'] in frq_to_month:
            monthly += r['Amounts'] * frq_to_month[r['Frequencies']]
    
    return f'{monthly:.2f}'


def monthlyExpense(data):
    frq_to_month = {'daily': 30, 'weekly': 4, 'bi-weekly': 2, 'monthly': 1}
    exp = expenseDF(data)

    monthly = 0

    for row in range(len(exp)):
        r = exp.iloc[row] # Defines each row of dataframe
        if r['Frequencies'] in frq_to_month:
            monthly += r['Amounts'] * frq_to_month[r['Frequencies']]
    
    return f'{monthly:.2f}'


def handleData(obj):
    print(obj)
    if ('Incomes' in obj) and ('Expenses' in obj):
        return MonthlyIncome(obj['Incomes']), monthlyExpense(obj['Expenses'])
    elif ('Incomes' in obj) and ('Expenses' not in obj):
        return MonthlyIncome(obj['Incomes']), '0.00'
    elif ('Incomes' not in obj) and ('Expenses' in obj):
        return '0.00', monthlyExpense(obj['Expenses'])