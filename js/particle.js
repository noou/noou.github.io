// particles-canvas на чистом JS с линиями между частицами
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-js';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  const colors = ['#aa73ff', '#f8c210', '#83d238', '#33b1f8'];
  const particles = [];
  const PARTICLE_COUNT = 88;
  const LINK_DIST = 110;

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1.5,
      color: randomColor(),
      dx: (Math.random() - 0.5) * 1.6,
      dy: (Math.random() - 0.5) * 1.6,
      opacity: 0.5 + Math.random() * 0.5
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }

  function drawParticles() {
    ctx.clearRect(0, 0, w, h);
    // Линии между частицами
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.save();
          ctx.globalAlpha = 0.25 * (1 - dist / LINK_DIST); // плавная прозрачность
          ctx.strokeStyle = '#33b1f8';
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    // Сами частицы
    for (const p of particles) {
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      // Движение
      p.x += p.dx;
      p.y += p.dy;
      // Отскок от краёв
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawParticles);
  }

  window.addEventListener('resize', function() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });

  drawParticles();
})();