# Energetica / The Power Boutique

Static website and supporting prototypes for `thepowerboutique.com`.

## Project structure

- Root `*.html` files: public pages. They remain at the repository root so existing URLs keep working.
- `assets/images/`: website images and favicon.
- `assets/videos/`: product presentation videos.
- `assets/tarot/cards/`: optimized artwork shared by The Power Tarot application.
- `apps/tarot/`: maintainable Svelte source for The Power Tarot.
- `tarot/`: production build published by GitHub Pages at `/tarot/`.
- `CNAME` and `snipcart.json`: hosting and shop integration configuration.

## Image strategy

Pages prefer WebP assets when visual quality is equivalent and retain JPG or PNG files as compatibility fallbacks. Responsive `<picture>` elements are used for content images, while CSS backgrounds use `image-set()` with a conventional fallback. The transparent bracelet image keeps its PNG source because the current WebP version introduces visible edge artifacts.

The Tarot application targets modern browsers and uses optimized WebP card artwork. The original 228 MB deck is reduced to approximately 21 MB without duplicating the images inside the production build.

## Video strategy

Product previews display lightweight WebP posters and load only the active video. Opening a video pauses background previews, and closing it releases the modal source before resuming the most visible preview.

## Local preview

Serve the repository root with any static HTTP server. Opening pages through a server is preferable to opening the files directly because browser security rules can affect local requests.

## Known legacy gaps

`academia.html` and `mentoring.html` reference `cristale.jpg`, which is not present. These inactive legacy pages are intentionally documented rather than filled with guessed assets.

Paid digital resources remain visibly marked as being in preparation. `success-download.html` is a non-transactional placeholder until real files and a protected delivery flow are configured.

## Deployment note

Public HTML pages stay in the root directory to preserve URLs such as `/proiect.html`, `/products.html`, and `/programari.html`.
