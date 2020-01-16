import React from 'react';
import Icon from '../icons';
import { shallow, mount } from 'enzyme';

const clickFn = jest.fn()

describe('icon component', () => {
	// basic renderer
	it('test props name', () => {
		const comp = shallow(<Icon name='alibaba'/>);
		expect(comp).toMatchSnapshot();
	});
	// event
	it('trigger click event', () => {
		const comp = shallow(<Icon onClick={clickFn} name='wechat'/>);
		comp.simulate('click')
		expect(clickFn).toBeCalled()
	});
});
