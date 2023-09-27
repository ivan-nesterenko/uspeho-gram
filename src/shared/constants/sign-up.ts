import i18n from "public/locales/i18n";



export const SIGN_UP_FORM_MESSAGES = {
  USERNAME_REQIRED: i18n.t('forms.signUp.usernameRequired'),
  USERNAME_PLACEHOLDER: i18n.t('forms.signUp.usernamePlaceholder'),
  LARGE_USERNAME: i18n.t('forms.signUp.largeUsername'),
  SMALL_USERNAME: i18n.t('forms.signUp.smallUsername'),

  FIRSTNAME_REQIRED: i18n.t('forms.signUp.firstNameRequired'),
  FIRSTNAME_PLACEHOLDER: i18n.t('forms.signUp.firstNamePlaceholder'),
  LARGE_FIRSTNAME: i18n.t('forms.signUp.largeFirstName'),
  SMALL_FIRSTNAME: i18n.t('forms.signUp.smallFirstName'),

  LASTNAME_REQIRED: i18n.t('forms.signUp.lastNameRequired'),
  LASTNAME_PLACEHOLDER: i18n.t('forms.signUp.lastNamePlaceholder'),
  LARGE_LASTNAME: i18n.t('forms.signUp.largeLastName'),
  SMALL_LASTNAME: i18n.t('forms.signUp.smallLastName'),

  PASSWORD_REQIRED: i18n.t('forms.signUp.passwordRequired'),
  PASSWORD_PLACEHOLDER: i18n.t('forms.signUp.passwordPlaceholder'),
  LARGE_PASSWORD: i18n.t('forms.signUp.largePassword'),
  SMALL_PASSWORD: i18n.t('forms.signUp.smallPassword'),

  IS_LOADING: i18n.t('forms.signUp.isLoading'),
  IS_ERROR: i18n.t('forms.signUp.isError'),
} as const;
