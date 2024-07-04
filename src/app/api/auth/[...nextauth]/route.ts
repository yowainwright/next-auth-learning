import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { checkMembership } from "../../../utils/checkMembership";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'read:org'
        }
      }
    }),
  ],
  callbacks: {
    async signIn(options) {
      const { account } = options;
      if (account?.access_token) {
        const accessToken = account.access_token;
        return await checkMembership(accessToken);
      }
      return false;
    },
    async jwt(options) {
      const { account, token } = options;
      const accessToken = account?.access_token;
      if (accessToken) {
        token.accessToken = accessToken;
        token.isOrgMember = await checkMembership(accessToken);
      }
      return token;
    },
    session(options) {
      const { session, token } = options;
      return {
        ...session,
        user: {
          ...session.user,
          isOrgMember: token.isOrgMember,
          accessToken: token.accessToken
        }
      };
    },
  }
})

export { handler as GET, handler as POST }
