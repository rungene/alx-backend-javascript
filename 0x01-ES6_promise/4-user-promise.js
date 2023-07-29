export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const data = { firstName: `${firstName}`, lastName: `${lastName}` };
    resolve(data);
  });
}
