import { Component } from 'react';

class Blog extends Component {
    render() {
        const { blog } = this.props
        return (
            <div>
                <img alt={blog.articulo} src={blog.img}/>
                <h3>{blog.articulo}</h3>
                <p>{blog.fecha}</p>
            </div>
        )
    }
}

export default Blog;