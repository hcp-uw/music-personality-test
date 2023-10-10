import {
  ref,
  child,
  get,
  set
} from "firebase/database";
import { database } from "../../config/firebase"

export async function findUser(uid) {
  try {
    let key = "User/" + uid;
    // const userRef = database.ref(key);

    const dataRef = ref(database);
    const snapshot = await get(child(dataRef, key));
    const status = snapshot.exists();

    return status;
  } catch (err) {
    console.error(err);
  }
}

export async function UpdateUser(uid, type="None") {
  try {
    console.log("HERE");
    set(ref(database, "User/" + uid), type);
  } catch (err) {
    console.error(err);
  }
}

export async function GetUser(uid) {
  try {
    let key = "User/" + uid;
    const dataRef = ref(database);
    const snapshot = await get(child(dataRef, key));
    const data = snapshot.val();

    return data;
  } catch (err) {
    console.error(err);
  }
}