import { Component } from "react";
import styles from './Blog.module.css';
class Title extends Component {
    render() {
    return (
        <div>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.paragraph}>Learn more about relevant financial topics for US Hispanics</p>
        </div>
        
    )
    }
}

export default Title;