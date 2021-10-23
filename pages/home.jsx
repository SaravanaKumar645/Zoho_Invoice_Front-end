import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.replace("/");
    }
  }, []);
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
};

export default Home;
