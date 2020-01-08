import React from 'react'
import Message from './Message';
export default function MessageList(props: any) {
    return (
        <ul className="list-group">
            {
                props.messages.map((message: any, index: number) => (
                    <Message message={message} key={message.id} />
                ))
            }
        </ul>
    )
}
