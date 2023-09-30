import { GetUser } from "./../../backend/api/database"
import  { useAuth } from "./../../context/AuthContext"


export default async function Results() {

  const { currentUser } = useAuth();

  const type = await GetUser(currentUser.uid);
  return (
      <div className="results--div">
          <h1>Info Page</h1>
      </div>
  )
}