import { Component } from "react";

const styles = {
    title: {
        color: '#556AEC',
        textAlign: 'center',
        fontSize: '34px',  
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