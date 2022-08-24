import { Component } from "react";

const styles = {
    title: {
        padding: '130px 0px 0px',
        textAlign: 'center',
        fontSize: '34px',
        background: '#ccc',
        background:'radial-gradient(#41B6E6, #556AEC)',
        fontFamily:'system-ui',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
    },
    paragraph: {
        textAlign: 'center',
        marging: '0px 0px',
        padding: '0px 0px 10px',
    }
}

class Title extends Component {
    render() {
    return (
        <div>
            <h1 style={styles.title}>Blog</h1>
            <p style={styles.paragraph}>Learn more about relevant financial topics for US Hispanics</p>
        </div>
        
    )
    }
}

export default Title;