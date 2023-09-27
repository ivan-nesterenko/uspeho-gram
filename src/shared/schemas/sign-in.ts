import z from "zod";
import { SIGN_IN_FORM_MESSAGES } from "../constants";

export const signInSchema = z.object({
  username: z
    .string({
      description: SIGN_IN_FORM_MESSAGES.USERNAME_PLACEHOLDER,
      required_error: SIGN_IN_FORM_MESSAGES.USERNAME_REQIRED,
    })
    .max(32, { message: SIGN_IN_FORM_MESSAGES.LARGE_USERNAME })
    .min(1, { message: SIGN_IN_FORM_MESSAGES.SMALL_USERNAME }),
  password: z
    .string({
      required_error: SIGN_IN_FORM_MESSAGES.PASSWORD_REQIRED,
    })
    .max(240, { message: SIGN_IN_FORM_MESSAGES.LARGE_PASSWORD })
    .min(4, { message: SIGN_IN_FORM_MESSAGES.SMALL_PASSWORD }),
});
export type SignInSchema = z.infer<typeof signInSchema>;
