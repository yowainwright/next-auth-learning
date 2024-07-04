# Next Auth Learning Using the Github Provider

This is a Next Auth Learning Project.
To try it out run \*`n i auto` and `pnpm i && pnpm dev`. Open [http://localhost:3000](http://localhost:3000) to see the result.
> *These commands assume you have `n` or `nvm` for node and `pnpm` for package management installed. Run `brew install n` and `npm install pnpm -g` if not.

## What do I see?

You see a basic screen with a login button. By clicking on the login button, you will take you to the Github auth page. Once you login, if you're a member of the GoodRx org, you will be redirected back to the home page with your Github username displayed if you're a member of the specified organization (GoodRx in this case). If you're not a member of the GoodRx org, you'll be directed to an unauthorized page with the option to sign in appropriately.

- You can test failures, etc by changing the org in `src/app/utils/checkMembership.ts`, or signing in with a non-member account.
- You can sign out by clicking the "Sign out" button and "Sign in" again.
