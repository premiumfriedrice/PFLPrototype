from bscalc.clean_data import incomeDF, expenseDF

def MonthlyIncome(data):
    frq_to_month = {'daily': 30, 'weekly': 4, 'bi-weekly': 2, 'monthly': 1}
    inc = incomeDF(data)

    monthly = 0

    for row in range(len(inc)):
        r = inc.iloc[row] # Defines each row of dataframe
        if r['Frequencies'] in frq_to_month:
            monthly += r['Amounts'] * frq_to_month[r['Frequencies']]
    
    return f'Your monthly income is ${monthly:.2f}'


def monthlyExpense(data):
    frq_to_month = {'daily': 30, 'weekly': 4, 'bi-weekly': 2, 'monthly': 1}
    inc = expenseDF(data)

    monthly = 0

    for row in range(len(inc)):
        r = inc.iloc[row] # Defines each row of dataframe
        if r['Frequencies'] in frq_to_month:
            monthly += r['Amounts'] * frq_to_month[r['Frequencies']]
    
    return f'Your monthly expenses are ${monthly:.2f}'


def both(obj):
    return MonthlyIncome(obj) + ' ' + monthlyExpense(obj)