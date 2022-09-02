import { Component } from "react";
import styles from './Blog.module.css';
class Title extends Component {
    render() {
    return (
        <div className={styles.slogan}>
            <div className={styles.textbox}>
            <p className={styles.title}>Blog</p>
            </div>
            <p className={styles.paragraph}>
                Learn more about relevant financial topics for US Hispanics
            </p>
        </div>
    )
    }
}

export default Title;