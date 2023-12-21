document.addEventListener('DOMContentLoaded', function() {      // Only executes contents of function when all of the DOM is loaded
    const form = document.getElementById('income-form');
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
    const form = document.getElementById('expense-form');
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


// get form data 
function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    console.log(Object.fromEntries(formData));
  }

//submit both forms using calculate button at the bottom
function submitForms(form) {
    form.submit(function(e) {
        e.preventDefault(); // supposed to prevent reload
        getData(form);
    });

    //document.getElementById("expense-form").submit();
}

function exec() {
    var form = document.querySelector("#income-form");
    form.addEventListener('submit', submitForms(form));
}


//function exec() {
//    var form = document.querySelector("#income-form");
//
//    form.addEventListener('submit', function(e) {
//        e.preventDefault(); // Prevent default form submission behavior if needed
//
//        // Optionally, perform client-side validation or other operations here
//
//        // Directly submit the form
//        fetch('/balance_sheet', {
//            method: 'POST',
//            body: new FormData(form)
//        }).then(response => {
//            if (response.ok) {
//                return response.json(); // Assuming server responds with JSON data
//            } else {
//                throw new Error('Network response was not ok.');
//            }
//        }).then(data => {
//            // Handle successful response data
//            console.log('Server response:', data);
//            // Update UI or perform actions with the received data
//        }).catch(error => {
//            // Handle fetch errors or server-side errors
//            console.error('There was a problem with the fetch operation:', error);
//            // Display an error message or handle the error condition
//        });
//    });
//
//    // Trigger form submission programmatically
//    form.dispatchEvent(new Event('submit'));
//}