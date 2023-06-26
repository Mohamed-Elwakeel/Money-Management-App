import React, { useState } from "react";
import "./App.css";
import { Navigation } from "../src/Components/Navigation/Navigation";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Expenses } from "./Components/Expenses/Expenses";
import { Income } from "./Components/Income/Income";
import { useGlobalContext } from "./content/context";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  // const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  // const displayData = () => {
  //   switch (active) {
  //     case 1:
  //       return <Dashboard />;
  //     case 2:
  //       return <Income />;
  //     case 3:
  //       return <Expenses />;
  //     default:
  //       return <Dashboard />;
  //   }
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Navigation />}>
          <Route path="details" index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
        </Route>
      </Routes>
      {/* <aside>
        <Navigation active={active} setActive={setActive} />
      </aside>
      <main>{displayData()}</main> */}
    </div>
  );
}

export default App;
