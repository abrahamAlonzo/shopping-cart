import { Component } from 'react';
import styles from './Blog.module.css';
class Blog extends Component {
    render() {
        const { blog } = this.props
        return (   
            <div className={styles.blog}>
                <img className={styles.img} alt={blog.article} src={blog.img} />
                <h3 className={styles.article}>{blog.article}</h3>
                <p className={styles.date}>{blog.date}</p>
            </div>
        )
    }
}

export default Blog;