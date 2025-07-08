// --- Галерея DeviantArt ---
(function(){
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=600',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600',
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=600',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600'
  ];
  let currentIndex = 0;
  const gallery = document.getElementById('deviant-gallery');
  if (gallery) {
    images.forEach((src, idx) => {
      const div = document.createElement('div');
      div.className = 'gallery-thumb';
      div.innerHTML = `<img src="${src}" alt="artwork ${idx+1}" loading="lazy">`;
      div.addEventListener('click', function() {
        const lightbox = document.getElementById('gallery-lightbox');
        const lightboxImg = document.getElementById('gallery-lightbox-img');
        currentIndex = idx;
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
      });
      gallery.appendChild(div);
    });
  }
  // Lightbox close и переключение
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('gallery-lightbox-img');
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('gallery-lightbox-close')) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
      }
      // Переключение на следующую картинку по клику на саму картинку
      if (e.target === lightboxImg) {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
      }
    });
  }
})(); 