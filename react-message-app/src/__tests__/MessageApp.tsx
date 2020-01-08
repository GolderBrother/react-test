import React from 'react';
import { mount } from 'enzyme';
import MessageApp from '../components/MessageApp';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
describe('测试 MessageApp 组件', () => {
  it('应该渲染出一个面板', () => {
    const wrapper = mount(<MessageApp />);
    const panel = wrapper.find('.panel.panel-defaul');
    const heading = wrapper.find('.panel-heading');
    const body = wrapper.find('.panel-body');
    const footer = wrapper.find('.panel-footer');
    expect(panel).toBeTruthy(); // 是否存在，不能是undefined
    expect(heading).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('messages的默认状态是一个空数组', () => {
    const wrapper = mount(<MessageApp />);
    expect(wrapper.state()).toMatchObject({ messages: [] });
  });

  it('如果MessageList组件存在，就需要把MessageApp state的messages传给 MessageList 组件', () => {
    const wrapper = mount(<MessageApp />);
    console.log('wrapper', wrapper);
    const messageList = wrapper.find(MessageList);
    expect(messageList.prop('messages')).toBe(
      (wrapper.instance() as any).state.messages
    );
  });

  it('如果MessageForm组件存在，就需要给MessageForm传递一个addMessage方法', () => {
    const wrapper = mount(<MessageApp />);
    const messageForm = wrapper.find(MessageForm);
    messageForm && expect(messageForm.prop('addMessage')).toBe(
      (wrapper.instance() as any).addMessage
    );
  });

  it('如果点击提交按钮，文本框如果有内容的话，就应该往App组件添加一条新状态', () => {
    const wrapper = mount(<MessageApp />);
    const messageForm = wrapper.find(MessageForm);
    let messageList = wrapper.find(MessageList);
    const input = messageForm.find('input');
    const button = messageForm.find('button');
    const content = '新消息';
    input.simulate('change', {
      target: {
        value: content
      }
    });
    button.simulate('click');
    const newMessage = [
      {
        id: expect.any(String),
        content
      }
    ];
    expect(wrapper.state('messages')).toEqual(newMessage);
    messageList = wrapper.find(MessageList);
    expect(messageList.prop('messages')).toEqual(newMessage);
  });
});
