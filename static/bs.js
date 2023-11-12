document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('expense-form');
    const addButton = form.querySelector('.add-button');

    addButton.addEventListener('click', function() {
        const formInput = form.querySelector('.form-input').cloneNode(true);
        formInput.querySelector('input[name="name"]').value = '';
        formInput.querySelector('input[name="amount"]').value = '';
        formInput.querySelector('select[name="frequency"]').selectedIndex = 0;

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
        formInput.querySelector('input[name="name"]').value = '';
        formInput.querySelector('input[name="amount"]').value = '';
        formInput.querySelector('select[name="frequency"]').selectedIndex = 0;

        const deleteButton = formInput.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            form.removeChild(formInput);
        });

        form.insertBefore(formInput, addButton);
    });
});