let addButtonPressed = new CustomEvent('addButtonPressed', {
    detail: {message: 'Add a row!'},
    bubbles: true,
    cancelable: true,
    composed: false,
  });

let deleteButtonPressed = new CustomEvent('deleteButtonPressed', {
    detail: {message: 'Remove a row!'},
    bubbles: true,
    cancelable: true,
    composed: false,
  });

let calculateEvent = new Event('change');

const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
  );
  
if (pageAccessedByReload) {
    window.location.replace("/clear_charts");
    console.log("charts cleared successfully");
}

document.addEventListener('DOMContentLoaded', function() {      // Only executes contents of function when all of the DOM is loaded
    const form = document.querySelector('#income-form');
    const addButton = form.querySelector('.add-button');
      
    function changeIncomeAttributes(inpN, inpA, inpF, delBtn, id) {   // Change IDs and names for each input element
            
        inpN.setAttribute('id', `income-name${id}`);
        inpN.setAttribute('name', `income-name${id}`);

        inpA.setAttribute('id', `income-amount${id}`);
        inpA.setAttribute('name', `income-amount${id}`);
        
        inpF.setAttribute('id', `income-frequency${id}`);
        inpF.setAttribute('name', `income-frequency${id}`);

        delBtn.setAttribute('id', `#income-row-del-btn${id}`);
    }
    
    addButton.addEventListener('click', function() {
        const originalRow = form.querySelector(`.form-input`);
        const nextFormRow = originalRow.cloneNode(true);    // all clones are based on the original first row

        nextFormRow.querySelector('.name').value = '';
        nextFormRow.querySelector('.amount').value = '';
        nextFormRow.querySelector('.frequency').selectedIndex = 0;

        const deleteButton = nextFormRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {     // Deletes the last row
            form.removeChild(nextFormRow);   
            form.dispatchEvent(deleteButtonPressed);  // Triggers change event on income-form when delete button is clicked
            form.dispatchEvent(calculateEvent);
        });

        form.insertBefore(nextFormRow, addButton); 
        form.dispatchEvent(addButtonPressed);
    });

    form.addEventListener('addButtonPressed', function() {
        let rows = form.querySelectorAll('.form-input');

        for (let i=1; i<rows.length; i++) {
            let fieldID = i + 1;
            rows[i].id = `income-form-row${fieldID}`

            let inputName = rows[i].querySelector(`.name`);   // The cloned rows originally possess the same attributes as the original row ending with a 1
            let inputAmount = rows[i].querySelector(`.amount`);   
            let inputFrequency = rows[i].querySelector(`.frequency`);
            let rowDeleteButton = rows[i].querySelector(`.delete-button`);

            changeIncomeAttributes(inputName, inputAmount, inputFrequency, rowDeleteButton, fieldID);
        }
    })

    form.addEventListener('deleteButtonPressed', function() {
        let rows = form.querySelectorAll('.form-input');

        for (let i=0; i<rows.length; i++) {
            let fieldID = i + 1;
            rows[i].id = `income-form-row${fieldID}`

            let inputName = rows[i].querySelector(`.name`);   // The cloned rows originally possess the same attributes as the original row ending with a 1
            let inputAmount = rows[i].querySelector(`.amount`);   
            let inputFrequency = rows[i].querySelector(`.frequency`);
            let rowDeleteButton = rows[i].querySelector(`.delete-button`);

            changeIncomeAttributes(inputName, inputAmount, inputFrequency, rowDeleteButton, fieldID);
        }
    })
});


document.addEventListener('DOMContentLoaded', function() {      // Only executes contents of function when all of the DOM is loaded
    const form = document.querySelector('#expense-form');
    const addButton = form.querySelector('.add-button');
      
    function changeIncomeAttributes(inpN, inpA, inpF, delBtn, id) {   // Change IDs and names for each input element
            
        inpN.setAttribute('id', `expense-name${id}`);
        inpN.setAttribute('name', `expense-name${id}`);

        inpA.setAttribute('id', `expense-amount${id}`);
        inpA.setAttribute('name', `expense-amount${id}`);
        
        inpF.setAttribute('id', `expense-frequency${id}`);
        inpF.setAttribute('name', `expense-frequency${id}`);

        delBtn.setAttribute('id', `#expense-row-del-btn${id}`);
    }
    
    addButton.addEventListener('click', function() {
        const originalRow = form.querySelector(`.form-input`);
        const nextFormRow = originalRow.cloneNode(true);    // all clones are based on the original first row

        nextFormRow.querySelector('.name').value = '';
        nextFormRow.querySelector('.amount').value = '';
        nextFormRow.querySelector('.frequency').selectedIndex = 0;

        const deleteButton = nextFormRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {     // Deletes the last row
            form.removeChild(nextFormRow);   
            form.dispatchEvent(deleteButtonPressed);  // Triggers change event on income-form when delete button is clicked
            form.dispatchEvent(calculateEvent);
        });

        form.insertBefore(nextFormRow, addButton); 
        form.dispatchEvent(addButtonPressed);
    });

    form.addEventListener('addButtonPressed', function() {
        let rows = form.querySelectorAll('.form-input');

        for (let i=1; i<rows.length; i++) {
            let fieldID = i + 1;
            rows[i].id = `expense-form-row${fieldID}`

            let inputName = rows[i].querySelector(`.name`);   // The cloned rows originally possess the same attributes as the original row ending with a 1
            let inputAmount = rows[i].querySelector(`.amount`);   
            let inputFrequency = rows[i].querySelector(`.frequency`);
            let rowDeleteButton = rows[i].querySelector(`.delete-button`);

            changeIncomeAttributes(inputName, inputAmount, inputFrequency, rowDeleteButton, fieldID);
        }
    })

    form.addEventListener('deleteButtonPressed', function() {
        let rows = form.querySelectorAll('.form-input');

        for (let i=0; i<rows.length; i++) {
            let fieldID = i + 1;
            rows[i].id = `income-form-row${fieldID}`

            let inputName = rows[i].querySelector(`.name`);   // The cloned rows originally possess the same attributes as the original row ending with a 1
            let inputAmount = rows[i].querySelector(`.amount`);   
            let inputFrequency = rows[i].querySelector(`.frequency`);
            let rowDeleteButton = rows[i].querySelector(`.delete-button`);

            changeIncomeAttributes(inputName, inputAmount, inputFrequency, rowDeleteButton, fieldID);
        }
    })
});


function rowIsFilled(row) {     // checks if all the fields in a row are filled out
    const inputs = row.querySelectorAll('input');
    const selects = row.querySelectorAll('select');
    let isRowFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isRowFilled = false;
        }
    });
    selects.forEach(select => {
        if (select.selectedIndex === 0) {
            isRowFilled = false;
        }
    })

    return isRowFilled;
}


function allFilled(rows) {      // checks if all the rows are filled out
    let allRowsFilled = true;
    rows.forEach(row => {
        if (rowIsFilled(row) === false) {
            allRowsFilled = false;
        }
    })
    return allRowsFilled;
}


function getMonthlyData(values) {      // POSTS form data via AJAX call without reloading page
    let xhrPOSTform = new XMLHttpRequest();
    xhrPOSTform.open('POST', '/handle_form', true);
    xhrPOSTform.setRequestHeader("Content-Type", "application/json");
    xhrPOSTform.send(JSON.stringify(values));     // POSTS form data 
    console.log(JSON.stringify(values));

    xhrPOSTform.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // This is executed when the call to /handle_form was successful.
          // 'this.responseText' contains the response from the server.
          // Insert HTML response into balance sheet page intp the report sheet div like this:
          // console.log(this.responseText);
          document.querySelector('#report #sentences').innerHTML = this.response; // this.response OR this.responseText
        }
    }
}


function calculate() {      // triggers a calculation when all the rows are filled out 
    const incomeForm = document.querySelector('#income-form');
    const expenseForm = document.querySelector('#expense-form');
    
    let rowMap = {};    // added all the values into a hashmap

    incomeForm.addEventListener('change', function(event) {
        let incomeFormRows = document.querySelectorAll('#income-form .form-input'); // Checks rows when a change happens in the form
        event.preventDefault();
        let incomeRowMap = {};  // sub hashmap that contains all the income values
        let i = 1;
        if (allFilled(incomeFormRows)) {
            incomeFormRows.forEach(row => {
                incomeRowMap[`income-name${i}`] = row.querySelector(`#income-name${i}`).value;
                incomeRowMap[`income-amount${i}`] = row.querySelector(`#income-amount${i}`).value;
                incomeRowMap[`income-frequency${i}`] = row.querySelector(`#income-frequency${i}`).value;
                i++;
            })
            console.log('Calculation triggered for income form');

            rowMap['Incomes'] = incomeRowMap;
            getMonthlyData(rowMap); 

            let incomeChartRequest = window.requestIncomeChartData();  // Sets globally accessed chartResponse variable with GET response values from endpoint /chart_data
            console.log(window.incomeChartResponse);
            incomeChartRequest.done(function() {
                console.log(window.incomeChartResponse);
                let labels = incomeChartResponse.names;   
                let amounts = incomeChartResponse.amounts;
                window.updateChart(incomeBreakdownChart, labels, amounts);  // Updates charts with GET response values
            });
        }
    })

    expenseForm.addEventListener('change', function(event) {
        let expenseFormRows = document.querySelectorAll('#expense-form .form-input'); // Checks rows when a change happens in the form
        event.preventDefault();
        let expenseRowMap = {};     // sub hashmap that contains all the expense values
        let j = 1;
        if (allFilled(expenseFormRows)) {
            expenseFormRows.forEach(row => {
                expenseRowMap[`expense-name${j}`] = row.querySelector(`#expense-name${j}`).value;
                expenseRowMap[`expense-amount${j}`] = row.querySelector(`#expense-amount${j}`).value;
                expenseRowMap[`expense-frequency${j}`] = row.querySelector(`#expense-frequency${j}`).value;
                j++;
            })
            console.log('Calculation triggered for expense form'); 

            rowMap['Expenses'] = expenseRowMap;
            getMonthlyData(rowMap);    // POSTs two dimensional hashmap as a JSON string

            let expenseChartRequest = window.requestExpenseChartData();  // Sets globally accessed chartResponse variable with GET response values from endpoint /chart_data
            console.log(window.expenseChartResponse);
            expenseChartRequest.done(function() {
                console.log(window.expenseChartResponse);
                let labels = expenseChartResponse.names;   
                let amounts = expenseChartResponse.amounts;
                window.updateChart(expenseBreakdownChart, labels, amounts);  // Updates charts with GET response values
            });
        }
    })
}


document.addEventListener('DOMContentLoaded', function() {
    let incomeChartRequest = window.requestIncomeChartData();
    let expenseChartRequest = window.requestExpenseChartData();
    let clearButton = document.querySelector('.clear-button');
    
    incomeChartRequest.done(function() {
        let incomeBreakdown = window.initializeChart(document.querySelector("#incomeBreakdownDonut").getContext("2d"), incomeChartResponse, 'Monthly Income', [
            'rgb(9, 121, 105)',
            'rgb(95, 158, 160)',
            'rgb(0, 255, 127)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ]);
        window.incomeBreakdownChart = incomeBreakdown; 
    });

    expenseChartRequest.done(function() {
        let expenseBreakdown = window.initializeChart(document.querySelector("#expenseBreakdownDonut").getContext("2d"), expenseChartResponse, 'Monthly Expense', [
            'rgb(220, 20, 60)',
            'rgb(248, 131, 121)',
            'rgb(227, 11, 92)',
            'rgb(250, 128, 114)',
            'rgb(250, 95, 85)'
        ]);
        window.expenseBreakdownChart = expenseBreakdown; 
    });

    clearButton.addEventListener('click', function(){
       window.clearChart(window.incomeBreakdownChart);
    });

    
})





document.addEventListener('change', calculate());   // blur or change works 