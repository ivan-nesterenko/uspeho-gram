import NextAuth from "next-auth";

import { authOptions } from "gram/server/auth";

export default NextAuth(authOptions);
