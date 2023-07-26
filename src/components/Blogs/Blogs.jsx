import { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [receivedData, setReceivedData] = useState([])
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handlerDataReceiver = (data)=>{
    setReceivedData(data);
  }
  return (
    <div className="blogs">
      <div className="blog-content">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}
          handlerDataReceiver={handlerDataReceiver}
          ></Blog>
        ))}
      </div>
      <div className="blog-viewed">
        <div className="spent-time">
          <h3>Spent time on read: {}min</h3>
        </div>
        <div className="bookmarks">
        <Bookmarks data={receivedData}></Bookmarks>
      </div>
      </div>

      
    </div>
  );
};

export default Blogs;
