import Blog from './layout/blog/Blog.jsx';
import Header from './layout/header/Header.jsx';

import { Suspense } from 'react';
import Login from './layout/login/Login.jsx';
import Signup from './layout/signup/Signup.jsx';
import {BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Home from './layout/home/Home.jsx';


 function App() {
 //const user = true;
  return (
    <Suspense fallback={null}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
      </Router>
    </Suspense>
  );
}

export default App;