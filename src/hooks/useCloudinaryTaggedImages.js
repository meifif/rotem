import { useEffect, useState } from 'react';
import { fetchImagesByTag } from '../config/imageSource';

/**
 * When REACT_APP_CLOUDINARY_CLOUD_NAME is set, loads images from Cloudinary by tag
 * (tag name = folder name under src/img, e.g. evening-makeup, profile).
 * Falls back to bundled `fallbackImages` if Cloudinary is unset, fails, or returns empty.
 */
export function useCloudinaryTaggedImages(tag, fallbackImages) {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    setImages(fallbackImages);
    let cancelled = false;

    const load = async () => {
      try {
        const urls = await fetchImagesByTag(tag);
        if (cancelled) return;
        if (urls.length > 0) {
          setImages(urls);
          return;
        }
      } catch {
        /* use fallback */
      }
      if (!cancelled) {
        setImages(fallbackImages);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
    // fallbackImages: stable module-level imports per callsite
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only retag-fetch when `tag` changes
  }, [tag]);

  return images;
}
