import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    // we use destructuring to assign the resolved values to the variables
    .then(([resultsPhoto, resultsUser]) => {
      console.log(`${resultsPhoto.body} ${resultsUser.firstName} ${resultsUser.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
