import React from 'react';
import Input from '../input/index';
import { shallow, mount } from 'enzyme';

describe('input component', () => {
	it('large size', () => {
		const comp = shallow(<Input size="large"/>);
		expect(comp.hasClass('ru-input-lg')).toBeTruthy();
	});
	it('disabled', () => {
		const comp = shallow(<Input size="large" disabled/>);
		expect(comp.find('.ru-input').prop('disabled')).toBe(true);
	})
});

