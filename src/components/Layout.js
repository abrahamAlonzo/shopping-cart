import { Component } from "react";

const styles = {
    layout: {
        
    },
    container: {
        width: '1200px',

    }
}
class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                    lala
                </div>
            </div>
        )
    }
}

export default Layout;