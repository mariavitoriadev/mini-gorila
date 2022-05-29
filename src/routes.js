import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Wallet from "./Wallet";
import Connect from "./Connect";

const App = () => {
   return(
       <App>
           <Route component = { Dashboard }  path="/resumo" exact />
           <Route component = { Wallet }  path="/carteira" />
           <Route component = { Connect }  path="/contas" />
       </App>
   )
}

export default App;