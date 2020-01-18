import React from 'react';
import Input from '../input/index';
import { shallow, mount } from 'enzyme';

const fn = jest.fn();

describe('input', () => {
	it('large size', () => {
		const comp = shallow(<Input size="lg"/>);
		expect(comp.hasClass('ru-input-lg')).toBeTruthy();
	});
	it('disabled', () => {
		const comp = shallow(<Input size="large" disabled/>);
		expect(comp.find('.ru-input').prop('disabled')).toBe(true);
	});
	it('trigger blue', () => {
		const c = shallow(<Input onBlur={ fn }/>);
		c.simulate('blur');
		expect(fn).toBeCalled();
	});
});

