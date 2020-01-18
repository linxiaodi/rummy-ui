import React from 'react';
import Button from '../button';
import { shallow, mount } from 'enzyme';

const clickFn = jest.fn();

describe('Button', () => {
	it('create', () => {
		const c = shallow(<Button>Hello</Button>);
		expect(c.hasClass('ru-button')).toBeTruthy();
		expect(c.childAt(0).text()).toBe('Hello');
	});

	it('trigger click', () => {
		const c = shallow(<Button onClick={ clickFn }>hello</Button>);
		c.simulate('click');
		expect(clickFn).toBeCalled();
	});
});

