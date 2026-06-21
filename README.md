# Stratum Website

The website for [Stratum](https://github.com/trevorftp/Stratum), dedicated server software for Vintage Story.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Requirements

Node 20 or later.

## Development

```
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build

```
npm run build
```

Output goes to `dist/`.

## Deploy

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys over FTP. Credentials are stored as repository secrets. See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Contributing

Fork the repo, make your changes, confirm `npm run build` passes, and open a PR against `main`.

## License

MIT. See [LICENSE](LICENSE).

The Stratum logo is not covered by the MIT license and may not be reused without permission.
