import {
  ref,
  query,
  get,
  set
} from "firebase/database";
import { database } from "../../src/config/firebase"

export async function getData(q) {
  const query = await ref(database, q);
  const qResult = await get(query);
  const data = qResult.val();
  return data;
}

export async function getUserData(uid) {

}