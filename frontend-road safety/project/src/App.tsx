import React from 'react';
import Body from './components/Body'

import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import LoginPage from "./components/LoginPage"
import TrafficLawsPage from './components/Courses/TrafficLawsPage';
import RoadEthicsPage from './components/Courses/RoadEthicsPage';
import VehicleMaintenancePage from './components/Courses/VehicleMaintenancePage';

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
    }
    
   ])

  
  return (
   <>
   
    
      
      
      
      <RouterProvider router={router}/>

      
      
    
    </>
  );
}

export default App;