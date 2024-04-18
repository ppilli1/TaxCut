import Dashboard from "../pages/Dashboard"
import Expenses from "../pages/Expenses"
import Purchases from "../pages/Purchases"

import {Routes, Route} from "react-router-dom"

const Routers = () => {
  return <Routes>
    <Route path = "/" element = {<Dashboard/>}/>
    <Route path = "/dashboard" element = {<Dashboard/>}/>
    <Route path = "/purchases" element = {<Purchases/>}/>
    <Route path = "/expenses" element = {<Expenses/>}/>
  </Routes>
}

export default Routers