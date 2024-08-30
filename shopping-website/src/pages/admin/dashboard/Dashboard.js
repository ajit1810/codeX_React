import React, { useContext } from "react";
import Layout from "../../../components/layout/Layout";
import "./Dashboard.css";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../components/context/MyContext";
import DashboardTap from "./DashboardTap";

const Dashboard = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <section>
        <div className="dashboard">
          <div
            className="dashboard-div"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46, 49, 55)" : "",
              boxShadow: mode === "dark" ? "inset 0px 0px 10px 2px black" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
          >
            <FaUserTie style={{ fontSize: "40px", color: "rgb(168 85 247)" }} />
            <h2
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              10
            </h2>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Products
            </p>
          </div>
          <div
            className="dashboard-div"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46, 49, 55)" : "",
              boxShadow: mode === "dark" ? "inset 0px 0px 10px 2px black" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
          >
            <FaUserTie style={{ fontSize: "40px", color: "rgb(168 85 247)" }} />
            <h2
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              10
            </h2>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Orders
            </p>
          </div>
          <div
            className="dashboard-div"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46, 49, 55)" : "",
              boxShadow: mode === "dark" ? "inset 0px 0px 10px 2px black" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
          >
            <FaUserTie style={{ fontSize: "40px", color: "rgb(168 85 247)" }} />
            <h2
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              20
            </h2>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Users
            </p>
          </div>
          <div
            className="dashboard-div"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46, 49, 55)" : "",
              boxShadow: mode === "dark" ? "inset 0px 0px 10px 2px black" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
          >
            <FaUserTie style={{ fontSize: "40px", color: "rgb(168 85 247)" }} />
            <h2
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              20
            </h2>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Products
            </p>
          </div>
        </div>
        <DashboardTap/>
      </section>
    </Layout>
  );
};

export default Dashboard;
