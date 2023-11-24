document.addEventListener('DOMContentLoaded', function() {
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

submitForms = function() {
    document.getElementById("expense-form").submit();
    document.getElementById("income-form").submit();
}