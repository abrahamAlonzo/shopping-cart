import { Component } from 'react';

const styles = {
    blog: {
        padding: '10px 20px',
        width: '60%',     
    },
    img: {
        width: '100%',
        marginBottom: '10px',
    },
    articulo: {
        color: 'darkBlue',
        marginTop: '5px',
        marginBottom: '0px',

    },
    fecha:{
        color:'gray',
        fontWeight: '600',
        marginBottom: '0px',
        marginTop: '5px',

    }
}


class Blog extends Component {
    render() {
        const { blog } = this.props
        return (
            <div style={styles.blog}>
                <img style={styles.img} alt={blog.articulo} src={blog.img} />
                <h3 style={styles.articulo}>{blog.articulo}</h3>
                <p style={styles.fecha}>{blog.fecha}</p>
            </div>
        )
    }
}

export default Blog;