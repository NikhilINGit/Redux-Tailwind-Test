import React from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
// import UserTable from './components/UserTable'
function App() {
  return (
 
    <>
    <BrowserRouter>
     
      <Routes>  
        <Route path="/" element={<UserTable />}></Route>
        <Route path="/adduser" element={<UserForm />}></Route>
        <Route
          path="/user-details"
          element={<UserDetails />}
        ></Route>
      
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
