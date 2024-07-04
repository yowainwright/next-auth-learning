# Next Auth Learning Using the Github Provider

This is a Next Auth Learning Project.

---

## Try it out 

- Copy `.env.example` as `.env.local` and follow the text instructions. 
- Then, run \*`n i auto` and `pnpm i && pnpm dev`. Open [http://localhost:3000](http://localhost:3000) to see the result.

> [!NOTE]
> *These commands assume you have `n` (or `nvm`) for node and `pnpm` for package management installed.<br> 
> _Run `brew install n` and `npm install pnpm -g` if not._

---

## What will I see after setup?

You will see a basic screen with a login button in your browser. By clicking on the login button, you will be taken to a Github auth page. Once you authenticate with Github, if you're a member of the GoodRx org, you will be redirected back to the app home page with your Github username displayed. If you're not a member of the GoodRx org, you'll be directed to an unauthorized page with the option to sign in appropriately.

- You can test failures, etc by changing the org in `src/app/utils/checkMembership.ts`, or signing in with a non-member account.
- You can sign out by clicking the "Sign out" button and "Sign in" again.
