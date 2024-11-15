import React from 'react';
import Body from './components/Body'

import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import LoginPage from "./components/LoginPage"
import TrafficLawsPage from './components/Courses/TrafficLawsPage';
import RoadEthicsPage from './components/Courses/RoadEthicsPage';
import VehicleMaintenancePage from './components/Courses/VehicleMaintenancePage';
import Quizzes from "./components/Courses/quizzes"
import RegistrationPage from './components/Courses/recommendation/registration';
import FeedbackPage from './components/Courses/recommendation/feedback';
import Prediction from "./components/Courses/recommendation/feedback";
import Recommendation from "./components/Courses/recommendation/recommend";

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
      path:"/courses/RoadEthics",
      element:<><RoadEthicsPage/></>
    },
    {
      path:"/courses/trafficlaws",
      element:<><TrafficLawsPage/></>
    },
    {
      path:"/courses/tvehiclemaintenance",
      element:<><VehicleMaintenancePage/></>
    },
    {
      path:"/quizzes",
      element:<><Quizzes/></>
    }
    
    {
      path:"./components/Courses/recommendation/recommend.tsx",
      element:<><Recommendation/></>
    }

    {
      path:"./components/Courses/recommendation/feedback.tsx",
      element:<><FeedbackPage/></>
    }
    {
      path:"./components/Courses/recommendation/prediction.tsx",
      element:<><Prediction/></>
    }
    {
      path:"./components/Courses/recommendation/registration.tsx",
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