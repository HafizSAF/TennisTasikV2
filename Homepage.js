// Ambil elemen header
const header = document.querySelector('.header');

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Jika scroll lebih dari 50px, tambahkan class "scrolled"
    header.classList.add('scrolled');
  } else {
    // Jika di atas 50px, hapus class "scrolled"
    header.classList.remove('scrolled');
  }
});
