# Calm SOS website

Static Astro website for `calmsos.com`, with English routes ready for Dutch and French. The project uses Astro, MDX and Tailwind CSS, and is suitable for Cloudflare Pages, Netlify or Vercel.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Before launch

Update `src/config.ts` with the verified App Store URL, confirmed product features and pricing. Replace the phone illustration with supplied screenshots and add an Open Graph image. Confirm all crisis numbers and have a qualified professional review the health content. Configure a consented privacy-friendly analytics provider only if wanted.

## Analytics

To enable consented Google Analytics, add the GA4 Measurement ID to Vercel as the `PUBLIC_GA_MEASUREMENT_ID` environment variable, then redeploy. The tracking script loads only after a visitor accepts analytics in the cookie banner.

## Browser soundscapes

The rain and ocean soundscapes are generated on demand with the browser Web Audio API. They do not autoplay, download third-party media or require a licence attribution. If recorded audio is introduced later, store its source and licence in this README and retain the same explicit play, volume and sleep-timer controls.

## Add an article

1. Add an MDX file in `src/content/articles/`. The file name becomes its URL slug.
2. Copy the frontmatter used in an existing pillar, including a real review date and reputable sources.
3. Write short paragraphs in a warm, non-diagnostic tone. Include a professional-help section and sources.
4. Add its outline to the matching cluster in `src/data/learn.ts` for internal linking.

## Add a language

The `languages` list in `src/config.ts` controls the generated `/en`, `/nl` and `/fr` routes. The new browser-tool UI strings are translated in `src/data/tool-copy.ts`. The original article and general-site copy still shares English as a pre-translation scaffold, so complete those translations before publishing language-specific content. Hreflang tags are already emitted for all configured languages.

## Content safety checklist

- Do not state that Calm SOS cures, diagnoses or replaces care.
- Cite authoritative sources rather than inventing statistics.
- Keep the article disclaimer, review slot, source list and crisis link.
- Do not use em dashes in visitor-facing copy.
