// Returns total expenses and sum of value

export default (expenses) => {
    const expensesTotalSum = 
        expenses
            .map(expense => expense.amount)
            .reduce((a,b) => a + b, 0
        )
    return (
        {
            sum: expensesTotalSum,
            length: expenses.length
        }
    );
};