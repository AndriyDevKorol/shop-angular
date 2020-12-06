export enum AuthSignInErrorCode {
  'auth/invalid-email' = 'Please input correct E-mail',
  'auth/user-disabled' = 'User disabled',
  'auth/user-not-found' = 'User not found',
  'auth/wrong-password' = 'Wrong user password'
}

export enum AuthSignUpErrorCode {
  'auth/email-already-in-use' = 'Please choose another email',
  'auth/invalid-email' = 'Enter valid email',
  'auth/operation-not-allowed' = 'Operation not allowed',
  'auth/weak-password' = 'Weak password'
}
