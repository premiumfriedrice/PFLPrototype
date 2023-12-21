import pandas as pd

'''
    Purpose: 
        Extracts data from both forms and injects them into DataFrames for easier data manipulation.
'''

def incomeDF(incFormObj: dict):
    '''
    Purpose: 
        Processes the JavaScript object values from form submission and injects into dataframe.
    
    Parameters:
        incFormObj : dict
                JavaScript object taken from form submission converted into python dictionary.

    Returns:
        Pandas DataFrame: Pandas DataFrame
                Dataframe of values classified by Name, Amount, and Frequency.
                Each row of the dataframe represents one stream of income.
    '''
    names = [entry[1] for entry in incFormObj.items() if 'income-name' in entry[0]]    # Creates a list of all the income-name values
    amounts = [float(entry[1]) for entry in incFormObj.items() if 'income-amount' in entry[0]]      # Creates a list of all the income-amount values
    frequencies = [entry[1] for entry in incFormObj.items() if 'income-frequency' in entry[0]]   # Creates a list of all the income-frequency values

    IncomeValues = {}

    IncomeValues['Incomes'] = names   # creates a new Key: Value pair in the IncomeValues dict, the value being the list of income-names
    IncomeValues['Amounts'] = amounts
    IncomeValues['Frequencies'] = frequencies

    return pd.DataFrame(IncomeValues)