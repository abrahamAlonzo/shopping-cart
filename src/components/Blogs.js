import { Component } from 'react';
import Blog from './Blog';
import styles from './Blog.module.css';

class Blogs extends Component {
    render() {
        const { blogs } = this.props

        return (          
            <div className={styles.blogs} >
                 {blogs.map(blog =>
                 <Blog
                 key={blog.article}
                 blog={blog}
                 />)}
            </div>
        )
    }
}

export default Blogs;