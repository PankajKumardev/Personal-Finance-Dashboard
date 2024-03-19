// Function to save budget data to local storage
function saveBudgetToLocalStorage(category, amount) {
    let budgets = JSON.parse(localStorage.getItem('budgets')) || [];
    budgets.push({ category, amount });
    localStorage.setItem('budgets', JSON.stringify(budgets));
}

// Function to delete a budget item from local storage
function deleteBudgetFromLocalStorage(index) {
    let budgets = JSON.parse(localStorage.getItem('budgets')) || [];
    budgets.splice(index, 1); // Remove the budget item at the specified index
    localStorage.setItem('budgets', JSON.stringify(budgets));
}

// Function to load budget data from local storage and display it
function loadBudgetsFromLocalStorage() {
    const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
    const budgetsList = document.getElementById('budgets-list');
    budgetsList.innerHTML = '';

    budgets.forEach((budget, index) => {
        const newBudget = document.createElement('li');
        newBudget.className = 'budget-item';
        newBudget.textContent = `${budget.category}: ₹${budget.amount}`;
        
        // Create delete button for each budget item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => handleDeleteButtonClick(index));
        
        newBudget.appendChild(deleteButton);
        budgetsList.appendChild(newBudget);
    });
}

// Function to handle deleting a budget item
function handleDeleteButtonClick(index) {
    deleteBudgetFromLocalStorage(index);
    loadBudgetsFromLocalStorage();
}

// Add event listener for form submission
document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const categorySelect = document.getElementById('category');
    let category;

    if (categorySelect.value === 'Custom') {
        const customCategoryInput = document.getElementById('custom-category');
        category = customCategoryInput.value;
    } else {
        category = categorySelect.value;
    }

    const amount = document.getElementById('amount').value;

    saveBudgetToLocalStorage(category, amount);
    loadBudgetsFromLocalStorage();

    document.getElementById('budget-form').reset();
    document.getElementById('custom-category').value = '';
});

// Add event listener for category select change
document.getElementById('category').addEventListener('change', function() {
    const customCategoryInput = document.getElementById('custom-category');
    customCategoryInput.style.display = this.value === 'Custom' ? 'block' : 'none';
});

// Load and display the budget data from local storage when the page loads
window.addEventListener('DOMContentLoaded', function() {
    loadBudgetsFromLocalStorage();
});
     