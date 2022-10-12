import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: "quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statics></Statics>
        },
        {
          path: "*",
          element: <p>Not Found</p>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

      {/* <header className="App-header">
        <p>hello</p>
      </header>
      <div>hello2</div> */}
    </div>
  );
}

export default App;
