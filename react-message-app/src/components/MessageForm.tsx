import React, { useState } from "react";
export default function MessageForm(props: any) {
  const [content, setContent] = useState<string>("");
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (content) props.addMessage && props.addMessage(content);
  };
  return (
    <form action="" className="message-form">
      <div className="form-group">
        <input
          type="text"
          className="form-control form-input"
          value={content}
          onChange={(event: Event) =>
            setContent((event && event.target && event.target.value) || "")
          }
          placeholder="请输入留言内容"
        />
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-primary form-btn"
          onClick={handleSubmit}
        >
          发表
        </button>
      </div>
    </form>
  );
}
