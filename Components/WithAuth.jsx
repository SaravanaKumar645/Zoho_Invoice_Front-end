import React from "react";
import Router from "next/router";
const WithAuth = (Component, path) => {
  return (props) => {
    console.log(typeof window);
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        Router.replace(path);
        return null;
      }
      if (
        token &&
        (path === "/" ||
          path === "/sign-in" ||
          path === "/sign-up" ||
          path === "/organizationsetup")
      ) {
        Router.replace("/home");
        return null;
      }
      return <Component {...props} />;
    } else {
      return null;
    }
  };
};

export default WithAuth;
