import React from 'react';
import { shallow, mount } from 'enzyme';
import Dialog from '../dialog';

const evtFn = jest.fn();

describe('dialog', () => {
	it('render correct', () => {
		const c = mount(<Dialog
			visible={ true }
		>Dialog12</Dialog>);
		expect(c).toMatchSnapshot();
	});

});