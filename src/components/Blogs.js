import { Component } from 'react';
import Blog from './Blog';

const styles = {
    blogs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Blogs extends Component {
    render() {
        const { blogs } = this.props

        return (          
            <div style={styles.blogs} >
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