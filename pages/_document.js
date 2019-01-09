import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export const title = "Next.js PWA Boilerplate";
const description =
  "Next.js PWA Boilerplate starts your progressive web app off with a perfect Google Lighthouse score.";
const url = `https://next-pwa-boilerplate.now.sh`;
const thumbnail = `${url}/static/graphics/thumbnail.png`;

export default class MyDocument extends Document {
  // This snippet will collect all of page’s critical CSS
  // while the is being server-side rendered
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* Performance: Inject the page’s critical CSS in the <head> tag */}
          {this.props.styleTags}

          {/* Progressive Web App: Match the width of app’s content with width of viewport for mobile devices */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Progressive Web App: Have address bar match brand colors */}
          <meta name="theme-color" content="#fff" />

          {/* Progressive Web App: Provide manifest file for metadata */}
          <link rel="manifest" href="./static/manifest.json" />

          {/* SEO: App description for search-engine optimization */}
          <meta name="Description" content={description} />

          {/* Bonus: Have beautiful preview tiles when users share your website on social media */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={thumbnail} />

          {/* Bonus: Have app icon and splash screen for PWAs saved to homescreen on iOS devices */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="./static/graphics/icon-57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="./static/graphics/icon-72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="./static/graphics/icon-114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="./static/graphics/icon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="./static/graphics/icon-512.png"
          />
          <link
            href="./static/graphics/splash-2048.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1668.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1536.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1125.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-1242.png"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-750.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="./static/graphics/splash-640.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
