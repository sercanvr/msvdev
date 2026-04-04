# Developer Portfolio

A modern, responsive, and highly optimized developer portfolio built with Vue 3 and Vite.

## Features

- **Vue 3 & Vite**: Built with Vue 3 `<script setup>` SFCs and powered by Vite for blazing-fast performance.
- **Multi-language Support (i18n)**: Seamless language switching between English, Turkish (TR), and German (DE).
- **Dark & Light Themes**: Integrated theme support using CSS variables and a sleek toggle dropdown.
- **Custom UI Elements**: Finely tuned custom webkit scrollbars and optimized hover states (preloaded assets) for a zero-lag user experience.
- **Responsive Design**: Full mobile and desktop responsiveness.
- **Production Ready**: Optimized project structure, ready to be deployed on platforms like Vercel (includes `vercel.json`), or run in containers using the provided `Dockerfile` and `docker-compose.yml`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (Recommended package manager)

## Project Setup

```bash
# Install dependencies
pnpm install
```

### Compile and Hot-Reload for Development

```bash
pnpm dev
```

### Compile and Minify for Production

```bash
pnpm build
```

### Run Unit Tests

```bash
pnpm test
```

## Deployment

Simply connect your repository to Vercel, or use Docker to containerize the app:

```bash
docker-compose up -d
```

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
