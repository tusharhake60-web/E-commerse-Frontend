
import './App.css';
import Login from './Login';
import BussinessDashboard from './BussinessDashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import ViewProductBuser from './ViewProductBuser';
import Servicee from './Servicee';
import GetAllProduct from './GetAllProduct';
import BuserOrder from './BuserOrder';
import UserDashboard from './UserDashboard';
import CommanNavBar from './CommanNavBar';


import UserOrder from './UserOrder';
import CHome from './CHome';



function App() {
  return (
    <div>


      <BrowserRouter>



        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/viewproductbuser' element={<ViewProductBuser></ViewProductBuser>}></Route>
          <Route path='/service' element={<Servicee></Servicee>}></Route>
          <Route path='/bussinessdashboard' element={<BussinessDashboard></BussinessDashboard>}></Route>
          <Route path='/border' element={<BuserOrder></BuserOrder>}></Route>
          <Route path='/getallproduct' element={<GetAllProduct></GetAllProduct>}></Route>
          <Route path='/userdashboard' element={<UserDashboard></UserDashboard>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/' element={<CHome></CHome>}></Route>
          <Route path="/userorder" element={<UserOrder></UserOrder>}></Route>
          <Route path="/chome" element={<CHome></CHome>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
