import React from 'react';
import Index from '../icons';
import { shallow, mount } from 'enzyme';

const clickFn = jest.fn()

describe('icon component', () => {
	// basic renderer
	it('test props name', () => {
		const comp = shallow(<Index name='alibaba'/>);
		expect(comp).toMatchSnapshot();
	});
	// event
	it('trigger click event', () => {
		const comp = shallow(<Index onClick={clickFn} name='wechat'/>);
		comp.simulate('click')
		expect(clickFn).toBeCalled()
	});
});
