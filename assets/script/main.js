  document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlides() {
  // すべてのスライドを非表示
  for (let i = 0; i < slides.length; i++) {
  slides[i].classList.remove("active");
}

  // 次のスライドへ
  slideIndex++;
  if (slideIndex > slides.length) {
  slideIndex = 1;
}

  // 現在のスライドを表示
  slides[slideIndex-1].classList.add("active");

  // 5秒後に次のスライドへ
  setTimeout(showSlides, 5000);
}

  // 最初のスライドを表示
  slides[0].classList.add("active");
  setTimeout(showSlides, 5000);
});
  // ナビゲーションの動作
  document.addEventListener('DOMContentLoaded', function() {
  // モバイルメニューの開閉
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
});
