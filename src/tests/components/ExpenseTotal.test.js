import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseTotal } from '../../components/ExpenseTotal';
import expenses from '../fixtures/expenses';

test('should render statement with no expenses at all', () => {
    const wrapper = shallow(<ExpenseTotal expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render statement with only 1 expense (singular)', () => {
    const wrapper = shallow(<ExpenseTotal expenses={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render statement with the sum of expenses (plural)', () => {
    const wrapper = shallow(<ExpenseTotal expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});