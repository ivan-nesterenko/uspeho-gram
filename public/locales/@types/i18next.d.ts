import enTranslate from "../en/en.json";
const resources = { translation: enTranslate } as const;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
