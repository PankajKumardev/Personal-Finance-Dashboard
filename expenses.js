document.addEventListener('DOMContentLoaded', function() {
    // Load existing expenses from localStorage
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expensesList = document.getElementById('expenses-list');
  
    // Render existing expenses
    savedExpenses.forEach(expense => {
      const newExpense = createExpenseElement(expense);
      expensesList.appendChild(newExpense);
    });
  
    // Add expense form submission
    document.getElementById('expense-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const amount = document.getElementById('amount').value;
      let category = document.getElementById('category').value;
      if (category === 'Custom') {
        category = document.getElementById('custom-category').value.trim();
        if (category === '') {
          alert('Please enter a custom category.');
          return;
        }
      }
      const date = document.getElementById('date').value;
  
      // Save expense to localStorage
      savedExpenses.push({ amount, category, date });
      localStorage.setItem('expenses', JSON.stringify(savedExpenses));
  
      // Render new expense
      const newExpense = createExpenseElement({ amount, category, date });
      expensesList.appendChild(newExpense);
  
      // Reset form
      document.getElementById('expense-form').reset();
    });
  
    // Show custom category input field if Custom is selected
    document.getElementById('category').addEventListener('change', function() {
      const customCategoryInput = document.getElementById('custom-category');
      if (this.value === 'Custom') {
        customCategoryInput.style.display = 'block';
        customCategoryInput.required = true;
      } else {
        customCategoryInput.style.display = 'none';
        customCategoryInput.required = false;
      }
    });
  
    // Function to create expense list item element
    function createExpenseElement(expense) {
      const listItem = document.createElement('li');
      listItem.classList.add('expense-item');
      listItem.textContent = `${expense.category}: ₹${expense.amount} (${new Date(expense.date).toLocaleDateString()})`;
      return listItem;
    }
  });
  