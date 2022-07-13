import { validateEmail } from "./EmailValidator";

/**
 * Test suite for the email validator.
 *
 * Test cases:
 * CT1 (“fu.lano1@gmail.com”), true
 * CT2 (“beltranohotmail.com”), false
 * CT3 (“@yahoo.com”), false
 * CT4 (“ciclano@”), false
 * CT5 (“ana@livecom”), false
 * CT6 (“ivo@gmail.”), false
 * CT7 (“ugo@mailfreeonline.com”), false
 */

describe("EmailValidator", () => {
  test("CT1", () => {
    expect(validateEmail("fu.lano1@gmail.com")).toBe(true);
  });

  test("CT2", () => {
    expect(validateEmail("beltranohotmail.com")).toBe(false);
  });

  test("CT3", () => {
    expect(validateEmail("@yahoo.com")).toBe(false);
  });

  test("CT4", () => {
    expect(validateEmail("ciclano@")).toBe(false);
  });

  test("CT5", () => {
    expect(validateEmail("ana@livecom")).toBe(false);
  });

  test("CT6", () => {
    expect(validateEmail("ivo@gmail.")).toBe(false);
  });

  test("CT7", () => {
    expect(validateEmail("ugo@mailfreeonline.com")).toBe(false);
  });
});
