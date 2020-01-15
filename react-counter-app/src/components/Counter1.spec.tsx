import React from "react";
import "jsdom-global/register";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter1 from "./Counter1";
import store from "../store";
import { Provider } from "react-redux";
Enzyme.configure({
  adapter: new Adapter()
});

describe("测试Counter1组件", () => {
  test(`1.首先要要看到一个字符串 Counter：0,然后点+变成1，再点击-变成0`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <Counter1 />>
      </Provider>
    );
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toBe('Counter1：0');
    const changeButtons = wrapper.find('.change-btn');
    expect(changeButtons).toHaveLength(3);
    expect(changeButtons.at(0).text()).toBe('+');
    expect(changeButtons.at(1).text()).toBe('-');
    //3.然后可以点击+号，这时文本会变成Counter1:1(模拟点击事件)
    changeButtons.at(0).simulate('click');
    expect(p.text()).toBe('Counter1：1');
    //4.然后可以点击-号，这时文本会变成Counter1:0(模拟点击事件)
    changeButtons.at(1).simulate('click');
    expect(p.text()).toBe('Counter1：0');
  });
});
