import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AdminLogin from './AdminView/AdminLogin';
import Register from './Forms/Register';
import DepartmentMgmt from './AdminView/DeptMgmt';
import ProgramMgmt from './AdminView/ProgramMgmt';
import MainPage from './Components/MainPage';
import Feedback from './Forms/Feedback';
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';

import Home from './Components/Home';
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
import NavRoute from './Components/NavRoute';
import RegistrationForm from './demoReg';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:(
//       <div>
//         <Header/>
//         <HomeSection/>
//       </div>
//     )
//   }
// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router}/>
  // <NavRoute/>
  <RegistrationForm />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
