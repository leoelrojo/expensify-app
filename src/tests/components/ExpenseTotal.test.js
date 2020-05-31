import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseTotal } from '../../components/ExpenseTotal';

test('should render statement with no expenses at all', () => {
    const expenses =
    {
        sum: 0,
        length: 0
    };
    const wrapper = shallow(<ExpenseTotal expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render statement with only 1 expense (singular)', () => {
    const expenses =
    {
        sum: 54,
        length: 1
    };    
    const wrapper = shallow(<ExpenseTotal expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render statement with the sum of expenses (plural)', () => {
    const expenses =
    {
        sum: 1853,
        length: 3
    };    
    const wrapper = shallow(<ExpenseTotal expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});