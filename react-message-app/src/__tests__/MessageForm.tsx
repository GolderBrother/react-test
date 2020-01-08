import React from "react";
import MessageForm from "../components/MessageForm";
import { mount } from 'enzyme';
describe("测试 MessageForm 组件", () => {
    it('MessageForm应该渲染出一个input和一个button标签', () => {
        const wrapper = mount(<MessageForm />);
        const form = wrapper.find('form');
        const input = wrapper.find('input');
        const button = wrapper.find('button');
        expect(form).toHaveLength(1);
        expect(input).toHaveLength(1);
        expect(button).toHaveLength(1);
    });
    
    it('如果点击按钮的时候, 内容为空, 则不能提交表单', () => {
        // 用jest模拟个函数
        const addMessage = jest.fn();
        const wrapper = mount(<MessageForm addMessage={addMessage} />);
        const input = wrapper.find('.form-input');
        const button = wrapper.find('.form-btn');
        // jest模拟原生事件
        let newValue = '';
        input.simulate('change', {
            target: {
                value: newValue
            }
        });
        button.simulate('click');
        expect(addMessage).not.toHaveBeenCalled();
    });

    it('如果点击按钮的时候, 内容不为空, 则可以提交表单', () => {
        const addMessage = jest.fn();
        const wrapper = mount(<MessageForm addMessage={addMessage} />);
        const input = wrapper.find('.form-input');
        const button = wrapper.find('.form-btn');
        let newValue = '新内容';
        input.simulate('change', {
            target: {
                value: newValue
            }
        });
        button.simulate('click');
        expect(addMessage).toBeCalledWith(newValue);
    });
});
