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


function getData(values) {      // POSTS form data via AJAX call without reloading page
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/handle_form', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(values));     // POSTS form data 
    console.log(JSON.stringify(values));

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // This is executed when the call to /handle_form was successful.
          // 'this.responseText' contains the response from the server.
          // Insert HTML response into balance sheet page intp the report sheet div like this:
          console.log(this.responseText);
          document.querySelector("#report").innerHTML = this.response; // this.response OR this.responseText
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
        getData(rowMap); 
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
        getData(rowMap);    // POSTs two dimensional hashmap as a JSON string
        }
    })
}


document.addEventListener('change', calculate());   // blur or change works 