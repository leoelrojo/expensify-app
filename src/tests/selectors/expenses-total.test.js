import selectTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 when no expenses', () => {
    const expensesEmpty = [];
    const result = selectTotalExpenses(expensesEmpty);
    expect(result.length).toBe(0);
    expect(result.sum).toBe(0);
});

test('should return 1 and value of 1 when 1 expense', () => {
    const expensesOne = [{
        id: '1',
        description: 'Toto',
        amount: 1234,
        note: ''
    }]
    const result = selectTotalExpenses(expensesOne);
    expect(result.length).toBe(1);
    expect(result.sum).toBe(1234);
});

test('should return total amount of expenses and their sum n expenses', () => {
    const result = selectTotalExpenses(expenses);
    expect(result.length).toBe(3);
    expect(result.sum).toBe(114195);
});