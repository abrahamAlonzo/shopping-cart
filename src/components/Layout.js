import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: 'white',
        width: '1600px',
        height: '700px',

        
    },
    container: {
        

    }
}
class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;