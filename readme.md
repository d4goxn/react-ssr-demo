# Server Side Rendering Demo

Renders the whole document as a single React component. Uses react-router-component for navigation. Static HTML is served for the initial HTTP request, then history.pushState is used for navigation if the client supports it.

The demo functions with Javascript turned off; you can `wget` pages, and bots can index them. `<title>` is set correctly and updated during navigation, when Page components mount.

## Usage

1. Install dependencies: `npm install`
2. Build client: `gulp build`
3. Start server: `npm run start`

Sourcemaps are enabled, but they do not work in Firefox. Use Chromium (or Chrome) for debugging.
