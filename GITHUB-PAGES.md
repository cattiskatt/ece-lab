# Put ECE Lab on your GitHub

The ZIP contains source code and an automatic build/deployment workflow. GitHub builds the app for you; you do not need Node or a terminal for the upload route.

1. Extract the ZIP on your computer.
2. Create a new GitHub repository called `ece-lab`. A public repository works with GitHub Free. Select **Add a README** when creating the repository, so it has a `main` branch.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **GitHub Actions** as Source.
4. Return to **Code → Add file → Upload files**. Upload the CONTENTS of the extracted `ece-lab` folder. `package.json`, `index.html`, `src`, `public`, and `.github` must be directly at the repository root. Do not upload the ZIP itself or put everything inside another `ece-lab` folder. Include `.github/workflows/deploy-pages.yml`.
5. Commit the files to `main`. Open **Actions → Deploy ECE Lab to GitHub Pages** and wait for a successful run. If needed, use **Run workflow** to retry after enabling Pages.
6. Your published URL appears in the workflow deployment and **Settings → Pages**. A typical project URL is `https://YOUR-USERNAME.github.io/ece-lab/`.

Subsequent commits to `main` rebuild and redeploy automatically. Vite's relative `base: './'` lets this app work beneath a repository path without renaming the config for each repo.

## If the .github folder was missed

In GitHub choose **Add file → Create new file**, enter `.github/workflows/deploy-pages.yml` as its name, and paste the contents of that file from the extracted ZIP. Commit it to `main`.

## Local development (optional)

Use Node 24 and pnpm 11.25.0:

```sh
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev:iwsdk
```

Production build: `pnpm build`. Its output is `dist/`.

## Important status

This is an exploratory prototype with illustrative readings, not a circuit solver. Type checking, scene schema validation, geometry validation, and production build are checked during creation. Rendering and physical-headset use remain unverified because the authoring browser cannot create WebGL. The requested 9/10 independent runtime acceptance has not been reached.

Official references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://vite.dev/guide/static-deploy
