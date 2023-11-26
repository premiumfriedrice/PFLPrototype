document.addEventListener('DOMContentLoaded', function() {  // clones expense fields
    const form = document.getElementById('expense-form');
    const addButton = form.querySelector('.add-button');

    addButton.addEventListener('click', function() {
        const formInput = form.querySelector('.form-input').cloneNode(true);
        formInput.querySelector('input[name="expense-name"]').value = '';
        formInput.querySelector('input[name="expense-amount"]').value = '';
        formInput.querySelector('select[name="expense-frequency"]').selectedIndex = 0;

        const deleteButton = formInput.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            form.removeChild(formInput);
        });

        form.insertBefore(formInput, addButton);
    });
});


// clones income fields
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('income-form');
    const addButton = form.querySelector('.add-button');
    addButton.addEventListener('click', function() {
        const formInput = form.querySelector('.form-input').cloneNode(true);
        formInput.querySelector('input[name="income-name"]').value = '';
        formInput.querySelector('input[name="income-amount"]').value = '';
        formInput.querySelector('select[name="income-frequency"]').selectedIndex = 0;

        const deleteButton = formInput.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            form.removeChild(formInput);
        });

        form.insertBefore(formInput, addButton);
    });
});


//submit both forms using calculate button at the bottom
submitForms = function() {
    document.getElementById("expense-form").submit();
    document.getElementById("income-form").submit();
}


// get form data 
function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
  }
  
  document.getElementById("income-form").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });