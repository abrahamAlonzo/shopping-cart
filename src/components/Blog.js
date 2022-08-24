import { Component } from 'react';

const styles = {
    blog: {
        padding: '10px 11px',
        width: '60%',     
    },
    img: {
        width: '300px',
	    height: '248px',
        objectFit: 'cover',
        objectPosition: '85% 100%',
    },
    article: {
        color: 'darkBlue',
        marginTop: '5px',
        marginBottom: '0px',
        fontSize: '25px', 

    },
    date:{
        color:'gray',
        fontWeight: '600',
        marginBottom: '0px',
        marginTop: '5px',
        fontSize: '22px',

    }
}


class Blog extends Component {
    render() {
        const { blog } = this.props
        return (
            <div style={styles.blog}>
                <img style={styles.img} alt={blog.article} src={blog.img} />
                <h3 style={styles.article}>{blog.article}</h3>
                <p style={styles.date}>{blog.date}</p>
            </div>
        )
    }
}

export default Blog;