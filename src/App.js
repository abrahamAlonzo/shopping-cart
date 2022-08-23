import { Component } from 'react';
import Blogs from './components/Blogs'


class App extends Component {
  state = {
    blogs:[
     { articulo:'Is it good to consolidate debt?', fecha:'January 5, 2022', img:'/fotos/articulo1.jpg' },
     { articulo:'Is it good to consolidate debt?', fecha:'January 3, 2022', img:'/fotos/articulo2.jpg' },
     { articulo:'Is it good to consolidate debt?', fecha:'January 1, 2022', img:'/fotos/articulo3.jpg' },
     { articulo:'Is it good to consolidate debt?', fecha:'December 27, 2021', img:'/fotos/articulo4.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <Blogs 
          blogs={this.state.blogs}
        />
      </div>
    )
  }
}

export default App;
