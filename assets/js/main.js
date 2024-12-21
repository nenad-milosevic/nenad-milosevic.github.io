function setupLightbox() {
    new SimpleLightbox('.artwork a', {
        overlayOpacity: 1,
        captionClass: 'artwork-caption'
    });
}

setupLightbox();