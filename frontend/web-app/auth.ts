import NextAuth, { Profile } from "next-auth"
import { OIDCConfig } from "next-auth/providers"
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        DuendeIDS6Provider({
            id: 'id-server',
            clientId: "nextApp",
            clientSecret: "secrets",
            issuer: "http://localhost:5001",
            authorization: {
                params: {
                    scope: "openid profile auctionApp"
                }
            },
            idToken: true,
        } as OIDCConfig<Omit<Profile, 'username'>>),
    ],
    callbacks: {
        async jwt({ token, profile })
        {
            //console.log({ token, profile, user, account })
            if (profile)
            {
                token.username = (profile?.username as string) || ''
            }
            return token;
        },
        async session({ session, token })
        {
            session.user.username = token.username;
            return session;
        }
    }
})