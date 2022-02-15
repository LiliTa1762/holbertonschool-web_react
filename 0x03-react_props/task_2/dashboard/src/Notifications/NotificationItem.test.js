import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe('<Notifications />', () => {
	it('renders without exploding', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists());
	});
})
