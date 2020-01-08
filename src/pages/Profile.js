import React from "react";
import { Redirect } from "react-router-dom";
import SignIn from "../components/signin";
import Header from "../components/header"

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("username");
  const full_name = localStorage.getItem("email");
  console.warn("is_login", is_login);
  if (is_login === null) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <React.Fragment>
        <Header/>
        <section className="content">
          <h1
            style={{
              textalign: "center",
              marginTop: '50px'
            }}
          >
            Profile
          </h1>
          <p style={{
              textalign: "center",
              marginTop: '50px'
            }}>
            <label>Email:</label> {email}
          </p>
          <p style={{
              textalign: "center",
              marginTop: '50px'
            }}>
            <label>Nama Lengkap:</label> {full_name}
          </p>
        </section>
      </React.Fragment>
    );
  }
};

export default Profile;
