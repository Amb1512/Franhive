# FranHive Website

## Chatbot environment setup

The chatbot API runs on the server and requires a Groq API key. The key is secret and
must never be added to React source code or committed to Git.

For local development, copy `.env.example` to `.env` and set:

```dotenv
GROQ_API_KEY=your_groq_api_key
GROQ_BASE_URL=https://api.groq.com/openai/v1
GROQ_MODEL=qwen/qwen3-32b
```

For deployment on Vercel:

1. Open the project in Vercel.
2. Go to **Settings > Environment Variables**.
3. Add `GROQ_API_KEY` for Production (and Preview if needed).
4. Add the optional variables `GROQ_BASE_URL` and `GROQ_MODEL` only if overriding the defaults.
5. Redeploy the project so the serverless API receives the new environment variables.

All visitors use the same server-side key. If a visitor receives `AI provider is not
configured`, the key is missing from the deployed environment rather than unavailable
for some users.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
