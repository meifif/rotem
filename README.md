# To Go to the site please go to the following link:

[Totem site](https://meifif.github.io/rotem).

---

## Updating gallery images (portfolio & main slider)

Everything runs in the **browser**—no backend, no API keys in the app. You only set your Cloudinary cloud name and a “dir” name for each gallery.

### Option 1: Cloudinary (recommended)

1. Create a free account at [cloudinary.com](https://cloudinary.com).
2. In **Dashboard → Settings → Security**, under “Restricted image types”, **enable “Resource list”** (so the site can fetch the list of images by tag).
3. In this app, copy `.env.example` to `.env` and set:
   - `REACT_APP_CLOUDINARY_CLOUD_NAME` = your cloud name (from Cloudinary dashboard).
   - `REACT_APP_PORTFOLIO_DIR` = name for the portfolio gallery (default: `portfolio`).
   - `REACT_APP_MAINSLIDE_DIR` = name for the homepage slider (default: `main-slide`).
4. In Cloudinary Media Library, **tag** your images with those exact names:
   - Images tagged **`portfolio`** → show on the portfolio page.
   - Images tagged **`main-slide`** → show in the homepage slider.

Only the cloud name and tag names are used; no API secret is ever in the frontend. New uploads with the right tag appear on the site (list is cached ~60 seconds).

### Option 2: JSON URL

Set `REACT_APP_PORTFOLIO_IMAGES_URL` and/or `REACT_APP_MAINSLIDE_IMAGES_URL` to a URL that returns a JSON array of image URLs.

### Fallback

If Cloudinary and JSON URLs are not set, the site uses the images in `src/assets/portfolio` and `src/assets/main-slide`.