/**
 * Remote image sources for portfolio, main-slide, and service/about galleries.
 * Browser-only: uses Cloudinary's public list-by-tag API (no backend, no secrets).
 *
 * Setup:
 *   - REACT_APP_CLOUDINARY_CLOUD_NAME = your Cloudinary cloud name.
 *   - REACT_APP_PORTFOLIO_DIR / REACT_APP_MAINSLIDE_DIR = tag name for each gallery (default: portfolio, main-slide).
 *   - Service pages use tags matching former src/img folder names (e.g. evening-makeup, bridal-makeup, profile).
 *   - In Cloudinary: Settings → Security → enable "Resource list". Tag images with those names.
 */

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const portfolioTag = process.env.REACT_APP_PORTFOLIO_DIR || 'portfolio';
const mainSlideTag = process.env.REACT_APP_MAINSLIDE_DIR || 'main-slide';
const portfolioJsonUrl = process.env.REACT_APP_PORTFOLIO_IMAGES_URL;
const mainSlideJsonUrl = process.env.REACT_APP_MAINSLIDE_IMAGES_URL;

function buildCloudinaryUrl(publicId, version, format) {
  if (!cloudName) return null;
  const ext = format || 'jpg';
  const v = version ? `v${version}/` : '';
  return `https://res.cloudinary.com/${cloudName}/image/upload/${v}${publicId}.${ext}`;
}

async function fetchCloudinaryList(
  tag,
  { newestFirst = false, sortByPublicId = false } = {},
) {
  if (!cloudName) return null;
  const url = `https://res.cloudinary.com/${cloudName}/image/list/${encodeURIComponent(tag)}.json`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const resources = data?.resources || [];
  let ordered;
  if (sortByPublicId) {
    ordered = [...resources].sort((a, b) =>
      String(a.public_id || '').localeCompare(String(b.public_id || ''), undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    );
  } else {
    const byCreated = (a, b) =>
      new Date(a.created_at || 0) - new Date(b.created_at || 0);
    ordered = newestFirst
      ? [...resources].sort((a, b) => byCreated(b, a))
      : [...resources].sort(byCreated);
  }
  return ordered
    .map((r) => buildCloudinaryUrl(r.public_id, r.version, r.format))
    .filter(Boolean);
}

async function fetchJsonUrl(url) {
  if (!url) return null;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return Array.isArray(data) ? data : data?.images || data?.urls || [];
}

export async function fetchPortfolioImages() {
  if (cloudName) {
    const urls = await fetchCloudinaryList(portfolioTag, { newestFirst: true });
    if (Array.isArray(urls) && urls.length) return urls;
  }
  if (portfolioJsonUrl) {
    const urls = await fetchJsonUrl(portfolioJsonUrl);
    if (Array.isArray(urls) && urls.length) return urls;
  }
  return [];
}

export async function fetchMainSlideImages() {
  if (cloudName) {
    const urls = await fetchCloudinaryList(mainSlideTag);
    if (Array.isArray(urls) && urls.length) return urls;
  }
  if (mainSlideJsonUrl) {
    const urls = await fetchJsonUrl(mainSlideJsonUrl);
    if (Array.isArray(urls) && urls.length) return urls;
  }
  return [];
}

export function hasRemoteMainSlideSource() {
  return !!(cloudName || mainSlideJsonUrl);
}

/**
 * Load images tagged with `tag` in Cloudinary (same list API as portfolio / main-slide).
 * Sorted by public_id so filenames like a/b/c stay in a predictable order.
 */
export async function fetchImagesByTag(tag, options = {}) {
  if (!cloudName) return [];
  try {
    const urls = await fetchCloudinaryList(tag, { ...options, sortByPublicId: true });
    return Array.isArray(urls) ? urls : [];
  } catch {
    return [];
  }
}
