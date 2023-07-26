import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const { author_name, image, author_image, title, post_date} = props.blog;
  const handlerDataReceiver = props.handlerDataReceiver;

  return (
    <div className="post-container">
      <div className="post-image">
        <img src={image} alt="" />
      </div>

      <div className="author-section">
        <div className="author">
          <img src={author_image} alt="" />
          <div className="author-details">
            <h4>{author_name}</h4>
            <p>
              <small>{post_date}</small>
            </p>
          </div>
        </div>
        <p className="bookmark-icon">
          5 min read
          <a
            onClick={() => {
              handlerDataReceiver(title)
            }}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </p>
      </div>

      <div className="posts">
        <h1>{title}</h1>
        <p>
          <small>#Technology #Innovation</small>
        </p>
        <a href="">Mark as Read</a>
      </div>
      <hr></hr>
    </div>
  );
};

export default Blog;
