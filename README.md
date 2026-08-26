# WhatsApp Chat Viewer

A privacy-first, browser-only viewer for WhatsApp exported chats. The ZIP is parsed locally and never uploaded to a backend.

## Features
- WhatsApp-style responsive conversation UI
- ZIP upload and local parsing
- 12/24-hour timestamps and common date formats
- Multiline/system messages
- Participant selection for message direction
- Images, video, audio and document cards when exported media is available
- Search with result count
- Conversation statistics
- Light/dark/system theme
- Mobile-friendly layout
- GitHub Pages deployment

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages
1. Create a GitHub repository and push this project to `main`.
2. In repository Settings → Pages, select **GitHub Actions** as the source if required.
3. The included workflow builds and deploys `dist`.
4. The URL is typically `https://<github-username>.github.io/<repository-name>/`.

Vite automatically uses the repository path in GitHub Actions via `GITHUB_REPOSITORY`.

## Privacy
Everything happens in the browser. There is no API server, database, analytics, or chat upload. Media is represented with temporary browser object URLs and released by the browser when the page/session ends.

## Notes
WhatsApp export formats vary by device, locale, OS version, and export settings. The parser intentionally accepts several common formats but cannot recover information that was not included in the export. This is a read-only viewer; it does not import chats back into WhatsApp.

WhatsApp is a trademark of Meta Platforms, Inc. This project is an independent third-party viewer and is not affiliated with or endorsed by WhatsApp or Meta.
