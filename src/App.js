import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Wallet from "./Wallet";
import Connect from "./Connect";

const App = () => {
   return(
    <Router>
      <Routes>
        <Route element={ <Dashboard/> }  path="/" exact/>
        <Route element={ <Wallet/> }  path="/carteira" />
        <Route element={ <Connect/> }  path="/contas" />
      </Routes>
    </Router>
   )
}

export default App;