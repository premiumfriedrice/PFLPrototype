def calculatedData(inc: list):
    frequencies = {'daily': 30, 'weekly': 4, 'bi-weekly': 2, 'monthly': 1}
    name = inc[0]
    amount = int(inc[1])
    frequency = inc[2]
    montly_income = frequencies[frequency] * amount

    return f'Monthly income for expense "{name}" is {montly_income}'

# make a request to post the data to the balance sheet

# calcalate balance sheet