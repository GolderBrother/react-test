import React from 'react';
import { mount } from 'enzyme';
import MessageList from '../components/MessageList';
describe('测试 MessageList 组件', () => {
    it('向组件传递两条消息，应该显示两个li', ()=> {
        const messages = [{
            id: 1,
            content: 'hello'
        }, {
            id: 2,
            content: 'golderBrother'
        }];
        const wrapper = mount(<MessageList messages={messages} />);
        const listItems = wrapper.find('.list-group-item');
        expect(listItems).toHaveLength(2);
        expect(listItems.at(0).text()).toBe('hello');
        expect(listItems.at(1).text()).toBe('golderBrother');
    })
});