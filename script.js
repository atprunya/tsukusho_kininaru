// GLightbox 初期化（ビラ用）
const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  openEffect: 'zoom', // 控えめ
  closeEffect: 'zoom',
});

// 外部リンクの安全対策（万が一の直書きミスに備える）
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  if (!a.rel.includes('noopener')) a.rel += ' noopener';
  if (!a.rel.includes('noreferrer')) a.rel += ' noreferrer';
});

