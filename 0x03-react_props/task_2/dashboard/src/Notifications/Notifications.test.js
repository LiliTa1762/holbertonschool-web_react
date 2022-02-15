import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("Notifications renders without errors", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Notifications renders three items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it("Notifications renders Notification Item and first item has correct html", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const listItems = wrapper.find("NotificationItem");
    expect(listItems).toBeDefined();
    expect(listItems.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    )
  });
});
