import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Dates from './Dates'
import NavigateToFetchData from "./NavigateToFetchData";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Dates/>}></Route>
      <Route path="/navigateToFetchData" element={<NavigateToFetchData/>}></Route>
    </Routes>
  );
};

export default AppRoutes;
