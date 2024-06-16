import { Account } from "../interfaces/account";

export const Users: Account[] = [
  {
    email: "test@gmail.com",
    senha: "Test123#"
  },
  {
    email: "juninho@hotmail.com",
    senha: "Juninho123#"
  }
]
export const emailDomains: string[] = [
  "@gmail.com",
  "@outlook.com",
  "@hotmail.com",
  "@yahoo.com",
  "@icloud.com",
  "@aol.com",
  "@protonmail.com",
  "@yandex.com",
  "@mail.com",
  "@gmx.com",
  "@zoho.com",
  "@live.com",
  "@rediffmail.com",
  "@inbox.com",
  "@mail.ru",
  "@ymail.com",
];
export const specialCharacters: string[] = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "\"", "'", "<", ">", ".",
  "?", "/", "~", "`",
];
export const upperLetters: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
export const numerals: string[] = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];