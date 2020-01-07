import React from "react";
export default function Message(props: any) {
  return <li className="list-group-item">{props.message.content}</li>;
}
