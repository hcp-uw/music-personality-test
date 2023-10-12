import { GetUser } from "./../../backend/api/database";
import  { useAuth } from "./../../context/AuthContext";
import {useState, useEffect } from "react";

export default function Results() {
  const { currentUser } = useAuth();

  const [userInfo, setUserInfo] = useState(null);

  const handleGetUser = async () => {
    try {
      const user = await GetUser(currentUser.uid);

      setUserInfo(user);
    } catch (err) {
      console.error(err);
    }

  }

  useEffect(() => {
    handleGetUser();
  }, []);


  console.log(userInfo);
  return (
      <div className="results--div">
          <h1>Info Page</h1>
          <p>{userInfo}</p>
      </div>
  )
}