import Dashboard from "../pages/Dashboard"
import Customer from "../pages/Customer"
import Expenses from "../pages/Expenses"
import Recovery from "../pages/Recovery"
import {Routes, Route} from "react-router-dom"

const Routers = () => {
  return <Routes>
    <Route path = "/" element = {<Dashboard/>}/>
    <Route path = "/dashboard" element = {<Dashboard/>}/>
    <Route path = "/expenses" element = {<Expenses/>}/>
    <Route path = "/customer" element = {<Customer/>}/>
    <Route path = "/recovery" element = {<Recovery/>}/>
  </Routes>
}

export default Routers