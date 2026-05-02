# iOS App Store screenshots — The English Hub

## Status: PLACEHOLDER STUBS

The five `screenshot-*.png` files in this directory are **placeholder
stubs**, not real device screenshots. They exist so the App Store Connect
listing can be saved while we wait for a TestFlight build.

**Replace them** with real device screenshots taken from a production
TestFlight build before the listing leaves private review.

## Specs

- iPhone 6.7" display family (covers iPhone 16 Pro Max and similar)
- 1290 x 2796 px portrait
- PNG, RGB, opaque
- Under 2 MB each

Apple's authoritative guidelines:
<https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications/>

## Order matters in App Store Connect

Apple displays the first 1-3 screenshots prominently in search results,
so the order below is the order they should be uploaded:

1. `screenshot-1.png` — Hero (Built by a UK English teacher)
2. `screenshot-2.png` — AI marking (AI feedback in seconds)
3. `screenshot-3.png` — Mock papers (Every mock paper. Every board.)
4. `screenshot-4.png` — Set texts (Every poem, novel, play)
5. `screenshot-5.png` — Progress (Track your AO grade band)

## Regenerating the stubs

If you need to tweak copy, palette, or layout before real screenshots
land, edit and re-run:

```
py scripts/generate_ios_screenshots.py
```

The script lives at `scripts/generate_ios_screenshots.py` and follows the
same pattern as `scripts/generate_brand_assets.py` (Pillow + Georgia,
brand palette in `INK / CREAM / CLAY / SLATE`).
