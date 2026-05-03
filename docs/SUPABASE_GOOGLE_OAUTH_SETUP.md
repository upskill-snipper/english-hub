# Supabase Google OAuth Setup

How to enable "Sign up with Google" for English Hub. ~10 minutes.

## 1. Create OAuth credentials in Google Cloud

1. Open https://console.cloud.google.com/apis/credentials and select (or create) a project.
2. If prompted, configure the OAuth consent screen: User type **External**, app name "English Hub", support + developer contact email = your email. Add scopes `openid`, `email`, `profile`. Save.
3. Click **Create credentials -> OAuth client ID -> Web application**. Name it "English Hub - Supabase".
4. Under **Authorized redirect URIs** add (exact, no trailing slash):
   ```
   https://arjjzkudncwqprpyamkw.supabase.co/auth/v1/callback
   ```
5. Click **Create**. Copy the **Client ID** and **Client secret** — you'll paste them next.

## 2. Enable Google in Supabase

1. Open the project dashboard at https://supabase.com/dashboard/project/arjjzkudncwqprpyamkw/auth/providers.
2. Find **Google** in the provider list, click it, and toggle **Enable Sign in with Google** on.
3. Paste the **Client ID** and **Client secret** from step 1.5 into the form. Leave the callback URL field as-is — that's the value you already added to Google Cloud.
4. Click **Save**.

## 3. Flip the env flag in Vercel

**Option A — one-shot via Vercel CLI** (faster if you have the CLI installed):

```powershell
# If you don't have it: npm i -g vercel; vercel link --project english-hub
vercel env add NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED production <<< "true"
vercel env add NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED preview <<< "true"
vercel env add NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED development <<< "true"
vercel --prod  # redeploy
```

**Option B — Dashboard:**

1. Open https://vercel.com -> the English Hub project -> **Settings -> Environment Variables**.
2. Add a new variable: `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED` = `true`. Apply to **Production**, **Preview**, and **Development**.
3. Trigger a redeploy (Deployments tab -> latest -> **Redeploy**) so the new env value ships.

> **Don't flip this flag until steps 1 and 2 are actually done.** If `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=true` ships before Supabase has a working Google provider, the "Continue with Google" button comes back but every click reproduces the original `{provider is not enabled}` error.

## 4. Smoke test

Visit `/auth/login` in production. The "Continue with Google" button should appear, clicking it should redirect to Google's consent screen, and after approval should land you on `/dashboard`.

If you see `provider is not enabled`, step 2 didn't save — re-check the toggle is on.

If the button doesn't appear at all, step 3 didn't ship — confirm `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=true` is set on **Production** in Vercel and that the latest deployment was triggered after you saved it.
