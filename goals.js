document.addEventListener('DOMContentLoaded', function() {
    // Load existing goals from localStorage
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    const goalsList = document.getElementById('goals-list');
  
    // Render existing goals
    savedGoals.forEach(goal => {
      const newGoal = createGoalElement(goal);
      goalsList.appendChild(newGoal);
    });
  
    // Add goal form submission
    document.getElementById('goal-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const amount = document.getElementById('amount').value;
      const deadline = document.getElementById('deadline').value;
  
      // Save goal to localStorage
      savedGoals.push({ name, amount, deadline });
      localStorage.setItem('goals', JSON.stringify(savedGoals));
  
      // Render new goal
      const newGoal = createGoalElement({ name, amount, deadline });
      goalsList.appendChild(newGoal);
  
      // Reset form
      document.getElementById('goal-form').reset();
    });
  
    // Function to create goal list item element
    function createGoalElement(goal) {
      const listItem = document.createElement('li');
      listItem.textContent = `${goal.name}: ₹${goal.amount} by ${goal.deadline}`; // Added rupees symbol here
      listItem.classList.add('budget-item');
      return listItem;
    }
});
