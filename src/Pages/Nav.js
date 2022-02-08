import "../Pages/home.css";
import React from "react";

const Nav = () => {
  return (
    <div>
      <h1 className="header">
        <a href="/">Budget App</a>
        <button variant="outline-dark">
          <a href="/transactions/new">New Transaction</a>
        </button>
      </h1>
    </div>
  );
};

export default Nav;
