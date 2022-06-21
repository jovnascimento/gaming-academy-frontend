import { disposableDomains } from "./DisposableMails";

/**
 * Email needs to be a valid email using a regex /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
 * and not be a disposable email address (eg. "mailfreeonline.com", "mailguard.me")
 *
 * @param email User email input
 */
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

  if (!emailRegex.test(email)) {
    return false;
  }

  const domain = email.split("@")[1];
  return !disposableDomains.includes(domain);
};

export { validateEmail };
