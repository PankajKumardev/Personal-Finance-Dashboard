// JavaScript for Visualization page using Chart.js library

// Example data for visualization
const expensesData = [
    { category: 'Food', amount: 200 },
    { category: 'Rent', amount: 1000 },
    { category: 'Utilities', amount: 150 },
    { category: 'Entertainment', amount: 50 },
];

const budgetsData = [
    { category: 'Food', budget: 150 },
    { category: 'Rent', budget: 1000 },
    { category: 'Utilities', budget: 120 },
    { category: 'Entertainment', budget: 75 },
];

const goalsData = [
    { name: 'Save for vacation', amount: 1500, deadline: '2023-06-01' },
    { name: 'Pay off credit card', amount: 2000, deadline: '2023-12-31' },
];

// Get canvas elements
const expenseChartCanvas = document.getElementById('expense-chart');
const budgetChartCanvas = document.getElementById('budget-chart');
const goalChartCanvas = document.getElementById('goal-chart');

// Create Chart instances
const expenseChart = new Chart(expenseChartCanvas, {
    type: 'pie',
    data: {
        labels: expensesData.map(data => data.category),
        datasets: [{
            data: expensesData.map(data => data.amount),
            backgroundColor: ['#f7931a', '#e01b6a', '#66bb6a', '#4d908e'],
        }]
    },
    options: {
        responsive: false, // Set to false to control canvas size directly
        maintainAspectRatio: false, // Disable aspect ratio
        width: 300, // Set width
        height: 200, // Set height
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expense Breakdown',
            }
        }
    }
});

const budgetChart = new Chart(budgetChartCanvas, {
    type: 'bar',
    data: {
        labels: budgetsData.map(data => data.category),
        datasets: [{
            label: 'Actual Expenses',
            data: expensesData.map(data => data.amount),
            backgroundColor: '#f7931a',
        }, {
            label: 'Budget',
            data: budgetsData.map(data => data.budget),
            backgroundColor: '#e01b6a',
        }]
    },
    options: {
        responsive: false, // Set to false to control canvas size directly
        maintainAspectRatio: false, // Disable aspect ratio
        width: 300, // Set width
        height: 200, // Set height
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Budget Comparison',
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    }
});

const goalChart = new Chart(goalChartCanvas, {
    type: 'line',
    data: {
        labels: goalsData.map(data => data.name),
        datasets: [{
            label: 'Goal Amount',
            data: goalsData.map(data => data.amount),
            borderColor: '#4d908e',
            fill: false,
        }]
    },
    options: {
        responsive: false, // Set to false to control canvas size directly
        maintainAspectRatio: false, // Disable aspect ratio
        width: 300, // Set width
        height: 200, // Set height
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Goal Progress',
            }
        }
    }
});
