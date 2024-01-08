import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Write() {
  let [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" name="" id="" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>status :</b> Draft
          </span>
          <br />
          <span>
            <b>visibility :</b> Public
          </span>
          <br />
          <input type="file" name="" id="imag" style={{ display: "none" }} />
          <label htmlFor="imag">
            <b>Upload Image</b>
          </label>

          <div className="buttons">
            <buttons>save as draft</buttons>
            <buttons> update</buttons>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <input type="radio" name="cat" id={"front"} value={"front"} />
          <label htmlFor="front">FrontEnd</label>

          <input type="radio" name="cat" id={"back"} value={"back"} />
          <label htmlFor="back"> Back End</label>

          <input type="radio" name="cat" id={"AI"} value={"AI"} />
          <label htmlFor="AI">AI</label>
        </div>
      </div>
    </div>
  );
}

// ! We will use react-quill for reach text editor

export default Write;
