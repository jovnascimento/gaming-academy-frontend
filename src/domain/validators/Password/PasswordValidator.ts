/**
 * Password needs to have between 5 ans 20 characters, do not contain 3 or more numbers order,
 * the lowercase password may not contain the name of the user in lowercase and have a special character
 *
 * @param password User password input
 * @param name Name of the user
 */
type PasswordResult =
  | "valid"
  | "invalidLength"
  | "invalidSequence"
  | "invalidSpecialCharacter"
  | "invalidName";

const validatePassword = (name: string, password: string): PasswordResult => {
  if (password.length < 5 || password.length > 20) {
    return "invalidLength";
  }

  if (password.match(/[0-9]{3,}/)) {
    return "invalidSequence";
  }

  if (password.match(/^[^a-zA-Z0-9]$/)) {
    return "invalidSpecialCharacter";
  }

  if (password.toLowerCase().includes(name.toLowerCase())) {
    return "invalidName";
  }

  return "valid";
};

export { validatePassword };
