import React, { useEffect , useState } from "react";
import Navigation from "./Navigation";


function Profile() {
  const [storedUser, setStoredUser] = useState("");
  const [storedEmail, setStoredEmail] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("Username");
    const storedEmail = localStorage.getItem("email");
    setStoredUser(storedUser || "");
    setStoredEmail(storedEmail || "");
  }, []);
  return (
    <div className="profile__page">
    <Navigation />
    <div className="profile__container">
    <h1>Profile Page</h1>
      <ul>
        <li><strong>User Name: {storedUser}</strong></li>
        <li><strong>Email: {storedEmail}</strong></li>
      </ul>
    </div>
    </div>
  )
}

export default Profile;