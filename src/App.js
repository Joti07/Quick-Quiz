import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('quizTopics.json'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statics',
          element: <Statics></Statics>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      {/* <header className="App-header">
        <p>hello</p>
      </header>
      <div>hello2</div> */}
    </div>
  );
}

export default App;
