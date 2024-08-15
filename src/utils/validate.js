export const checkValidData = (
  email,
  password,
  confirmPassword = null,
  fullName = null
) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let isConfirmPasswordValid;

  if (confirmPassword) {
    isConfirmPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        confirmPassword
      );
  }

  let isNameValid;
  if (fullName) {
    isNameValid = /([a-zA-Z0-9_\s]+)/.test(fullName);
  }

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid)
    return "Password must contain uppercase, lowercase, number & special character";
  if (fullName && confirmPassword) {
    if (!isConfirmPasswordValid) return "Confirm Password is not valid";

    if (password !== confirmPassword) {
      return "Passwords are not matching";
    }

    if (!isNameValid) return "Name is not valid";
  }

  return null;
};
