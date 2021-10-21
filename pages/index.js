import { useEffect } from "react";
import axios from "axios";
import Invoicedetails from "../LandingPage/Invoicedetails";
import AppInfo from "../LandingPage/AppInfo";
import Awards from "../LandingPage/Awards";
import CentreBanner from "../LandingPage/CentreBanner";
import CustomerLoving from "../LandingPage/CustomerLoving";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";
import Otherapps from "../LandingPage/Otherapps";
import State from "../LandingPage/State";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function LandingPage() {
  useEffect(() => {
    axios
      .get("https://zoho-invoice-server.herokuapp.com/", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(cookies.get("myCat"));
    axios
      .get("https://zoho-invoice-server.herokuapp.com/api/authenticate-user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    // axios
    //   .get("http://localhost:4000/api/check-user", { withCredentials: true })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }, []);
  return (
    <>
      <Header />
      <CentreBanner />
      <State />
      <CustomerLoving />
      <Awards />
      <AppInfo />
      <Invoicedetails />
      <Otherapps />
      <Footer />
    </>
  );
}
