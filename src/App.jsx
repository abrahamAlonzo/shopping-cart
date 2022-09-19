import Blog from './layout/Blog.jsx';
import { Suspense } from 'react';


 function App() {
  return (
      <Suspense fallback={null}>
        <Blog />
      </Suspense>
  );
}

export default App;