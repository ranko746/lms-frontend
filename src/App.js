import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import TeacherPanal from './pages/TeacherPanel/TeacherPanal';
import StudentPanel from './pages/StudentPanel/StudentPanel';
// import LearnerType from './pages/StudentPanel/LearnerType';
// import Courses from './pages/StudentPanel/Courses';
// import Quizes from './pages/StudentPanel/Quizes';
// import Train from './pages/StudentPanel/Train'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/teacherPanel",
    element: <TeacherPanal />,
  },
  {

    path: "/studentPanel",
    element: <StudentPanel />

  },
  // {
  //   path: "/learnerType",
  //   element: <LearnerType />
  // },
  // {
  //   path: "/courses",
  //   element: <Courses />
  // },
  // {
  //   path: "/quizes",
  //   element: <Quizes />
  // },
  // {
  //   path: "/train",
  //   element: <Train />
  // }


]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App