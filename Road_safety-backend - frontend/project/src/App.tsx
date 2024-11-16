import React from 'react';
import Body from './components/Body'

import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import LoginPage from "./components/LoginPage"
import TrafficLawsPage from './components/Courses/TrafficLawsPage';
import RoadEthicsPage from './components/Courses/RoadEthicsPage';
import VehicleMaintenancePage from './components/Courses/VehicleMaintenancePage';
import Quizzes from "./components/Quizzes/Quizzes"
import RegistrationPage from './components/Registration/RegistrationPage';


import Feed from './components/Feedback/feed';
import Navbar from './components/Navbar';
import Footer from './components/Feedback/footer';
import AllCourses from './components/Courses/AllCourses';
import Traffic_Sign_Course from './components/Courses/Traffic_Sign_Course';
import EmergencyResponsePage from './components/Courses/EmergencyResponsePage';
import Vehiclemaintenance from './components/Quizzes/Vehiclemaintenance';
import TrafficSignsQuiz from './components/Quizzes/TrafficSignsQuiz';

function App() {
   const router = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/SignIn",
      element:<><LoginPage/></>
    },
    {
      path:"/SignUp",
      element:<><RegistrationPage/></>
    },
    {
      path:"/courses/RoadEthics",
      element:<><RoadEthicsPage/></>
    },
    {
      path:"/courses/trafficlaws",
      element:<><TrafficLawsPage/></>
    },
    {
      path:"/courses/vehiclemaintenance",
      element:<><VehicleMaintenancePage/></>
    },
    {
      path:"courses/TrafficSigns",
      element:<><Traffic_Sign_Course/></>
    },
    {
      path:"courses/emergencyresponse",
      element:<><EmergencyResponsePage/></>
    },
    {
      path:"/courses/vehiclemaintenancequiz",
      element:<><Navbar/><Vehiclemaintenance/></>
    },
    {
      path:"/quizzes",
      element:<><Navbar/><Quizzes/></>
    },
    {
      path:"courses/TrafficSignsQuiz",
      element:<><Navbar/><TrafficSignsQuiz/></>
    },
    
    

    {
      path:"/feed",
      element:<><Navbar/><Feed/><Footer/></>
    },
    {
      path:"/AllCourses",
      element:<><Navbar/><AllCourses/><Footer/></>
    },
    
    {
      path:"./registration",
      element:<><RegistrationPage/></>
    }
   ])

  
  return (
   <>
   
    
      
      
      
      <RouterProvider router={router}/>

      
      
    
    </>
  );
}

export default App;