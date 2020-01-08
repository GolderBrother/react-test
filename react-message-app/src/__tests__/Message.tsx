import React from "react";
import Message from "../components/Message";
import { mount } from 'enzyme';
describe("测试 Message 组件", () => {
    it('Message应该渲染出一个li标签, 类名叫做 list-group-item, 内容是golderBrother', () => {
        const message = {
            id: 1,
            content: 'golderBrother'
        };
        const wrapper = mount(<Message message={message} />);
        const liItems = wrapper.find('li');
        expect(liItems).toHaveLength(1);
        expect(liItems.prop('className')).toBe('list-group-item');
        expect(liItems.text()).toBe('golderBrother');
        expect(liItems.prop('children')).toBe('golderBrother');
    });
});
