(() => {
  const applyLogo = (src) => {
    document.querySelectorAll('img[data-paia-full-logo]').forEach((img) => {
      img.src = src;
    });
  };

  fetch('assets/logo-full-500.b64', { cache: 'force-cache' })
    .then((response) => {
      if (!response.ok) throw new Error('Logo asset unavailable');
      return response.text();
    })
    .then((data) => {
      const b64 = data.trim();
      if (b64) applyLogo(`data:image/webp;base64,${b64}`);
    })
    .catch(() => {
      // Keep the valid wordmark fallback if the full-logo asset cannot be loaded.
    });
})();
