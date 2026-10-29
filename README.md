# LoversiPhones

Static storefront at https://loversiphones.co.za/, published from the root of `main` with GitHub Pages.

The storefront, 25 model pages, model directory and information pages were restored on 29 October 2026 from the last published storefront before the maintenance replacement (`246a9e4`). The original product prices, storage, colour mappings and image files are retained.

`storefront.css` supplies responsive layouts from small phones to 3840px screens. The original image tiles are 384px for catalogue views and 200px for most angle views; a larger screen layout does not create extra photographic detail. Replace images only with approved, correctly matched originals.

`script.js` handles catalogue browsing and orders. `product-page.js` handles individual phone galleries. `enhancements.js` provides the order review step. `storefront.js` manages keyboard navigation, dialog focus and form validation. Orders open a prepared message in WhatsApp; a customer must send that message to contact the store. There is no website payment or order database.

Run the source, catalogue and page regression checks with Node.js:

```sh
node --test tests/storefront.test.cjs
```

Before a release, also verify mobile/desktop layouts, catalogue search/sort/colour/angle controls, both order forms with dummy data, the WhatsApp message handoff, the 25 model pages, and all sitemap URLs. Keep the original brand artwork and catalogue details intact. Confirm GitHub Pages has built the intended commit, then verify the live custom domain.
