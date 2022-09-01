import { Component } from "react";
import styles from './Blog.module.css';
class Layout extends Component {
    render() {
        return(
            <div className={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;