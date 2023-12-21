from bscalc.clean_data import incomeDF

def calculatedData(inc):
    frq_to_month = {'daily': 30, 'weekly': 4, 'bi-weekly': 2, 'monthly': 1}
    d = incomeDF(inc)

    monthly = 0

    for row in range(len(d)):
        r = d.iloc[row] # Defines each row of dataframe
        if r['Frequencies'] in frq_to_month:
            monthly += r['Amounts'] * frq_to_month[r['Frequencies']]
    
    return f'Your monthly income is ${monthly:.2f}'