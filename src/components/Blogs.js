import { Component } from 'react';
import Blog from './Blog';

//const styles = {
  //  productos
//}

class Blogs extends Component {
    render() {
        const { blogs } = this.props

        return (          
            <div>
                 <p>Blogs</p>
                 {blogs.map(blog =>
                 <Blog
                 key={blog.articulo}
                 blog={blog}
                 />)}
            </div>
        )
    }
}

export default Blogs;