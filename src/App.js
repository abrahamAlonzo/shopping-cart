import { Component } from 'react';
import Blogs from './components/Blogs';
import Layout from './components/Layout';
import Title from './components/Title';

class App extends Component {
  state = {
    blogs:[
     { article:'Is it good to consolidate debt?', date:'January 5, 2022', img:'/assets/image/article1.jpg' },
     { article:'Is it good to consolidate debt?', date:'January 3, 2022', img:'/assets/image/article2.jpg' },
     { article:'Is it good to consolidate debt?', date:'January 1, 2022', img:'/assets/image/article3.jpg' },
     { article:'Is it good to consolidate debt?', date:'December 27, 2021', img:'/assets/image/article4.jpg' },
    ]
  }
  render() {
    return (
      <body>
      <div style={{backgroundColor: '#eee'}}>
        <Layout>
          <Title />
          <Blogs 
             blogs={this.state.blogs}
             />
        </Layout>             
      </div>
      </body>
    )
  }
}

export default App;
