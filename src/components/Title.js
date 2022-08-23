import { Component } from "react";

const styles = {
    text: {
        justifyContent: 'center',
    },
    title: {
        color: '#556AEC',
        alignItems: 'center',   
    }
}

class Title extends Component {
    render() {
    return (
        <div style={styles.text}>
        <h1 style={styles.title}>Blog</h1>
        <p>Learn more about relevant financial topics for US Hispanics</p>
        </div>
        
    )
    }
}

export default Title;