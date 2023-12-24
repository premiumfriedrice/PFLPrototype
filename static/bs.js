document.addEventListener('DOMContentLoaded', function() {      // Only executes contents of function when all of the DOM is loaded
    const form = document.querySelector('#income-form');
    const addButton = form.querySelector('.add-button');

    let fieldID = 1;    // Used to make each field row unique
    
    addButton.addEventListener('click', function() {
        const originalRow = form.querySelector(`.form-input`);
        const nextFormRow = originalRow.cloneNode(true);    // all clones are based on the original first row
        fieldID++; 
        nextFormRow.id = `income-form-row${fieldID}`;   // Changes the id of the cloned row

        function changeAttributes(inpN, inpA, inpF, id) {   // Change IDs and names for each input element
            
            inpN.value = '';    // Sets the initial value of clone to default
            inpN.setAttribute('id', `income-name${id}`);
            inpN.setAttribute('name', `income-name${id}`);
    
            inpA.value = '';
            inpA.setAttribute('id', `income-amount${id}`);
            inpA.setAttribute('name', `income-amount${id}`);
            
            inpF.selectedIndex = 0;
            inpF.setAttribute('id', `income-frequency${id}`);
            inpF.setAttribute('name', `income-frequency${id}`);
        }
        const inputName = nextFormRow.querySelector(`#income-name1`);   // The cloned rows originally possess the same attributes as the original row ending with a 1
        const inputAmount = nextFormRow.querySelector(`#income-amount1`);   
        const inputFrequency = nextFormRow.querySelector(`#income-frequency1`);

        changeAttributes(inputName, inputAmount, inputFrequency, fieldID);  // Current field ID is passed in

        const deleteButton = nextFormRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {     // Deletes the last row
            form.removeChild(nextFormRow);
        });

        form.insertBefore(nextFormRow, addButton);
    });
});


document.addEventListener('DOMContentLoaded', function() {      // Only executes contents of function when all of the DOM is loaded
    const form = document.querySelector('#expense-form');
    const addButton = form.querySelector('.add-button');

    let fieldID = 1;    // Used to make each field row unique
    
    addButton.addEventListener('click', function() {
        const originalRow = form.querySelector(`.form-input`);
        const nextFormRow = originalRow.cloneNode(true);    // all clones are based on the original first row
        fieldID++; 
        nextFormRow.id = `expense-form-row${fieldID}`;   // Changes the id of the cloned row

        function changeAttributes(inpN, inpA, inpF, id) {   // Change IDs and names for each input element
            
            inpN.setAttribute('id', `expense-name${id}`);
            inpN.setAttribute('name', `expense-name${id}`);
    
            inpA.setAttribute('id', `expense-amount${id}`);
            inpA.setAttribute('name', `expense-amount${id}`);
    
            inpF.setAttribute('id', `expense-frequency${id}`);
            inpF.setAttribute('name', `expense-frequency${id}`);
        }
        const inputName = nextFormRow.querySelector(`#expense-name1`);   // The cloned rows originally possess the same attributes as the original row ending with a 1
        const inputAmount = nextFormRow.querySelector(`#expense-amount1`);   
        const inputFrequency = nextFormRow.querySelector(`#expense-frequency1`);

        changeAttributes(inputName, inputAmount, inputFrequency, fieldID);  // Current field ID is passed in

        const deleteButton = nextFormRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {     // Deletes the last row
            form.removeChild(nextFormRow);
        });

        form.insertBefore(nextFormRow, addButton);
    });
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

    console.log(isRowFilled);
    return isRowFilled;
}


function allFilled(rows) {      // checks if all the rows are filled out
    let allRowsFilled = true;
    rows.forEach(row => {
        console.log(row.id)
        if (rowIsFilled(row) === false) {
            allRowsFilled = false;
        }
    })
    return allRowsFilled;
}


function objectToFormData(obj) {    // adds all values from hashmap into form data object
    const formData = new FormData();
   
    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
    });
   
    return formData;
   }


function getData(values) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/balance_sheet');
    xhr.onload = function() {
    console.log(this.response);
    };
    xhr.send(objectToFormData(values));     // sends form data through POST
}


function calculate() {      // triggers a calculation when all the rows are filled out 
    const incomeForm = document.querySelector('#income-form');
    let incomeFormRows = document.querySelectorAll('#income-form .form-input');
    incomeForm.addEventListener('change', function(event) {
        incomeFormRows = document.querySelectorAll('#income-form .form-input'); // Rechecks the page when a change happens in the form
        event.preventDefault()
        if (allFilled(incomeFormRows) === false) {
            console.log('No calculation');
        }
        else {
            let rowMap = {};
            let i = 1;
            incomeFormRows.forEach(row => {
                rowMap[`income-name${i}`] = row.querySelector(`#income-name${i}`).value;
                rowMap[`income-amount${i}`] = row.querySelector(`#income-amount${i}`).value;
                rowMap[`income-frequency${i}`] = row.querySelector(`#income-frequency${i}`).value;
                i++;
            })
            getData(rowMap);
            console.log(rowMap);
            console.log('Calculation triggered for a filled row:');
        }
    })
}


document.addEventListener('change', calculate());   // blur or change works 