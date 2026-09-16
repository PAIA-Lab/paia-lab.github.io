(() => {
  const applyLogo = (src) => {
    document.querySelectorAll('img[data-paia-full-logo]').forEach((img) => {
      img.src = src;
    });
  };

  fetch('assets/logo-full-png.b64', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error('Logo asset unavailable');
      return response.text();
    })
    .then((data) => {
      const b64 = data.trim();
      if (b64) applyLogo(`data:image/png;base64,${b64}`);
    })
    .catch(() => {
      // Keep the wordmark fallback if the full-logo asset cannot be loaded.
    });

  fetch('assets/campus-hero.b64', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error('Campus asset unavailable');
      return response.text();
    })
    .then((data) => {
      const b64 = data.trim();
      const hero = document.querySelector('.home-hero');
      if (hero && b64) hero.style.backgroundImage = `url("data:image/jpeg;base64,${b64}")`;
    })
    .catch(() => {
      // Keep the CSS fallback image if the local campus asset cannot be loaded.
    });
})();