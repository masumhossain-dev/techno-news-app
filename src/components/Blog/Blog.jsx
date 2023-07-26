import './Blog.css'

const Blog = (props) => {
        const {id, author_name, image, author_image, title, post_date} = props.blog;
        return (
                <div className='post-container'>
                        <div className="post-image">
                        <img src={image} alt="" />
                        </div>
                        <div className="author">
                                <img src={author_image} alt="" />
                                <div className='author-details'>
                                        <h4>{author_name}</h4>
                                        <p><small>{post_date}</small></p>
                                </div>
                        </div>

                        <div className="posts">
                                <h1>{title}</h1>
                                <p><small>#Technology #Innovation</small></p>
                                <a href="">Mark as Read</a>
                        </div>
                </div>
        );
};

export default Blog;