

import './App.css';
import  Login  from './Components/Login/Login';
import  Register  from './Components/Registeration/Registeration';
import  Home  from './Components/Home/Home';
import  Layout  from './Components/Layout/Layout';
import  Error  from './Components/Error/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'



let routers= createBrowserRouter([
  {path:'/', element:<Layout/>,children:[
    {index:true, element:<Login/>},
    {path:"register", element:<Register/>},
    {path:"home", element: <ProtectedRoute><Home/></ProtectedRoute> },
    {path:"*", element:<Error/>},
  ]}
])


function App() {
  return <>
      
     
      <RouterProvider router={routers}/>
      
     
      
  </>
      
       
    

}

export default App;
