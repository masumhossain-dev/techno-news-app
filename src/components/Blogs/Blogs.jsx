import { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {
        const [blogs, setBlogs] = useState([])
        useEffect(()=>{
                fetch('db.json')
                .then(res=>res.json())
                .then(data=>setBlogs(data))
        },[])
        return (
                <div className='blogs'>
                    <div className="blog-content">
                        {
                                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                        }
                    </div>
                    <div className="blog-viewed">
                        <h1>blog viewed</h1>
                    </div>
                </div>
        );
};

export default Blogs;