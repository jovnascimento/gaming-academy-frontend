import { validatePassword } from "./PasswordValidator";

/**
 * Test suite for the password validator.
 *
 * Test cases:
 * CT1  (“joao”, “senh@”)
 * CT2  (“joao”, “senh@s3nh@seNh@5enh@”)
 * CT3  (“joao”, “snh@”)
 * CT4  (“joao”, “”)
 * CT5  (“joao”, “senh@s3nh@seNh@5enh@abc”)
 * CT6  (“joao”, “Senh@12”)
 * CT7  (“joao”, “S3nha12”)
 * CT8  (“joao”, “S3nh@123”)
 * CT9  (“joao”, “s3nh@47#”)
 * CT10 (“joao”, “s3nh@joao@5enh@00”)
 */

describe("PasswordValidator", () => {
  test("CT1", () => {
    expect(validatePassword("joao", "senh@")).toBe("valid");
  });

  test("CT2", () => {
    expect(validatePassword("joao", "senh@s3nh@seNh@5enh@")).toBe("valid");
  });

  test("CT3", () => {
    expect(validatePassword("joao", "snh@")).toBe("invalidLength");
  });

  test("CT4", () => {
    expect(validatePassword("joao", "")).toBe("invalidLength");
  });

  test("CT5", () => {
    expect(validatePassword("joao", "senh@s3nh@seNh@5enh@abc")).toBe(
      "invalidLength"
    );
  });

  test("CT6", () => {
    expect(validatePassword("joao", "Senh@12")).toBe("valid");
  });

  test("CT7", () => {
    expect(validatePassword("joao", "S3nha12")).toBe("valid");
  });

  test("CT8", () => {
    expect(validatePassword("joao", "S3nh@123")).toBe("invalidSequence");
  });

  test("CT9", () => {
    expect(validatePassword("joao", "s3nh@47#")).toBe("valid");
  });

  test("CT10", () => {
    expect(validatePassword("joao", "s3nh@joAo@5enh@00")).toBe("invalidName");
  });
});
