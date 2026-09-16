(() => {
  const fetchText = (path) => fetch(path, { cache: 'no-cache' }).then((response) => {
    if (!response.ok) throw new Error(`Unable to load ${path}`);
    return response.text();
  });

  Promise.all([
    fetchText('assets/logo-full-1.b64'),
    fetchText('assets/logo-full-2.b64'),
    fetchText('assets/logo-full-3.b64')
  ])
    .then((parts) => {
      const b64 = parts.map((part) => part.trim()).join('');
      if (!b64) return;
      const src = `data:image/webp;base64,${b64}`;
      document.querySelectorAll('img[data-paia-full-logo]').forEach((img) => {
        img.src = src;
      });
    })
    .catch(() => {
      // Keep the existing fallback image if the optimized full logo cannot be loaded.
    });

  Promise.all([
    fetchText('assets/campus-hero-1.b64'),
    fetchText('assets/campus-hero-2.b64'),
    fetchText('assets/campus-hero-3.b64')
  ])
    .then((parts) => {
      const b64 = parts.map((part) => part.trim()).join('');
      const hero = document.querySelector('.home-hero');
      if (hero && b64) {
        hero.style.backgroundImage = `url("data:image/jpeg;base64,${b64}")`;
      }
    })
    .catch(() => {
      // Keep the CSS fallback image if the local campus image cannot be loaded.
    });
})();