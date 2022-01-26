import { Routes, Route } from "react-router-dom";
import Home from "/Users/walescaambroise/Documents/Pursuit/8.0/module-4/budget-app-react-front-end/src/Pages/Home.js";
import Index from "../Pages/Index";
// import Show from "../pages/Show";
// import Edit from "../pages/Edit";
import New from "../Components/New";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Index />} />
      {/* <Route path="/transactions/:index" element={<Show />} /> */}
      {/* <Route path="/transactions/:index/edit" element={<Edit />} /> */}
      <Route path="/transactions/new" element={<New />} />
    </Routes>
  );
};

export default Routing;
