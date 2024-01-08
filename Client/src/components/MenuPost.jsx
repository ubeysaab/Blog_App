import React from 'react'

function MenuPost(props) {
  return (
    <div className="menu__post">
      <img src={props.img} alt="" />
      <div className="title">
        <h1>
           {props.title}
        </h1>
        <p>
          {props.des}
        </p>
        <button className="post__button">
          Read More
        </button>
      </div>
    </div>
  )
}

export default MenuPost