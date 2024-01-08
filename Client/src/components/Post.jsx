import { Link } from "react-router-dom";
export default function Post(props) {
  return (
    <div className="post">
      <div className="content">
        <Link to={"/post/:id"} className="link">
          <h1 className="title">{props.title}</h1>
        </Link>
        <p>{props.des}</p>
        <Link to={"/post/:id"} className="link">
          <button className="post__button"> Read More </button>
        </Link>
      </div>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
