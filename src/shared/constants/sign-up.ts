export const SIGN_UP_FORM_MESSAGES = {
  USERNAME_PLACEHOLDER: `username_example`,
  LARGE_USERNAME: `Your username is to large`,
  SMALL_USERNAME: `Your username is to short`,

  FIRSTNAME_REQIRED: `You should write your first name`,
  FIRSTNAME_PLACEHOLDER: `Boba`,
  LARGE_FIRSTNAME: `Sorry, your name is too long`,
  SMALL_FIRSTNAME: `Are you from jungle?`,

  LASTNAME_REQIRED: `You should write your last name`,
  LASTNAME_PLACEHOLDER: `Dudeovich`,
  LARGE_LASTNAME: `Sorry, your last name is too long`,
  SMALL_LASTNAME: `Sorry, but you need to fill in the last name field`,

  PASSWORD_REQIRED: `You have to come up with a password`,
  PASSWORD_PLACEHOLDER: `qwerty`,
  LARGE_PASSWORD: `Your password is too long shorten it`,
  SMALL_PASSWORD: `Please write a longer password`,

  IS_LOADING: `Checking your data`,
  IS_ERROR: `Your username already in use, we can randomly create uniuqe`,
} as const;
