import React, { useEffect } from "react";
import Router from "next/router";
const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const company = JSON.parse(localStorage.getItem("company"));
    console.log(company);
    if (!token) {
      Router.replace("/sign-in");
    }
  }, []);
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
};

export default Home;
