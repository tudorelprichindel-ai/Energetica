# Energetica / The Power Boutique

Static website and supporting prototypes for `thepowerboutique.com`.

## Project structure

- Root `*.html` files: public pages. They remain at the repository root so existing URLs keep working.
- `assets/images/`: website images and favicon.
- `assets/videos/`: product presentation videos.
- `app.py`, `server.py`, `lookUpTable_base.csv`: legacy game-prototype files kept in place to avoid unrelated line-ending changes.
- `CNAME`, `snipcart.json`, `index.json`: hosting and integration configuration.

## Image strategy

Pages prefer WebP assets when visual quality is equivalent and retain JPG or PNG files as compatibility fallbacks. Responsive `<picture>` elements are used for content images, while CSS backgrounds use `image-set()` with a conventional fallback. The transparent bracelet image keeps its PNG source because the current WebP version introduces visible edge artifacts.

## Video strategy

Product previews load metadata up front but play only one visible clip at a time. Opening a video pauses background previews, and closing it releases the modal source before resuming the most visible preview.

## Local preview

Serve the repository root with any static HTTP server. Opening pages through a server is preferable to opening the files directly because browser security rules can affect local requests.

## Known legacy gaps

The game prototype in `mines.html` references files under `assets/` that are not present in the repository. `academia.html` and `mentoring.html` reference `cristale.jpg`, which is also not present. `success-download.html` links to a missing `ghid-frecventa.pdf`. These pre-existing gaps are intentionally documented rather than filled with guessed assets.

## Deployment note

Public HTML pages stay in the root directory to preserve URLs such as `/proiect.html`, `/products.html`, and `/programari.html`.
