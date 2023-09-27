import i18n from "public/locales/i18n";

export const SIGN_IN_FORM_MESSAGES = {
  USERNAME_REQIRED: i18n.t('forms.signIn.usernameRequired'),
  USERNAME_PLACEHOLDER: i18n.t('forms.signIn.usernamePlaceholder'),
  LARGE_USERNAME: i18n.t('forms.signIn.largeUsername'),
  SMALL_USERNAME: i18n.t('forms.signIn.smallUsername'),

  PASSWORD_REQIRED: i18n.t('forms.signIn.passwordRequired'),
  PASSWORD_PLACEHOLDER:i18n.t('forms.signIn.passwordPlaceholder'),
  LARGE_PASSWORD: i18n.t('forms.signIn.largePassword'),
  SMALL_PASSWORD: i18n.t('forms.signIn.smallPassword'),

  IS_LOADING: i18n.t('forms.signIn.isLoading'),
  IS_ERROR: i18n.t('forms.signIn.isError'),
} as const;
