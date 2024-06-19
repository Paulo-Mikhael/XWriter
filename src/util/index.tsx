import { Auth } from "firebase/auth";

export function itHas(text: string, stringArray: string[]) {
  for (let i = 0; i < stringArray.length; i++) {
    if (text.includes(stringArray[i]) || text[0].includes(stringArray[i]) && text.replace(stringArray[i], "") !== "") {
      return true;
    }
  }

  return false;
}

export function ActualUser(auth: Auth): string {
  const user = auth.currentUser;

  if (user?.email) {
    return user.email
  }
  return "not found";
}