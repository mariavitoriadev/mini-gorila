import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Wallet from "./Wallet";
import Connect from "./Connect";

const App = () => {
   return(
    <Router>
      <Routes>
        <Route element={ <Wallet/> }  path="/" />
        <Route element={ <Connect/> }  path="/contas" />
      </Routes>
    </Router>
   )
}

export default App;