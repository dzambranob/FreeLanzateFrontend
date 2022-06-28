
import {TOKEN} from "../utils/tokens";
import jwtDecode from "jwt-decode";

export function getAccessToken() {
    
    const token = localStorage.getItem(TOKEN);

    if (!token || token === "null") {
        return null;
    }

    return willExpireToken(token) ? null : token;
}

export function logout() {
  localStorage.removeItem(TOKEN);
  localStorage.clear();
}

export function deleteAcc() {
    localStorage.removeItem(TOKEN);
}

function willExpireToken(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;
  return now > exp;
  
}