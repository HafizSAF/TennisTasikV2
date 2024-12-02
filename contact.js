document.getElementById("contactForm").addEventListener("submit", sendToWhatsApp);

function sendToWhatsApp(event) {
  event.preventDefault(); // Mencegah pengiriman form default

  // Ambil nilai input
  const nama = document.getElementById("fname").value;
  const alamat = document.getElementById("Alamat").value;
  const pesan = document.getElementById("subject").value;

  // Validasi input
  if (!nama || !alamat || !pesan) {
    alert("Semua kolom harus diisi!");
    return;
  }

  // Format pesan untuk WhatsApp
  const whatsappNumber = "6289662503805"; // Ganti dengan nomor WhatsApp tujuan
  const message = `Halo, saya ${encodeURIComponent(nama)}.%0AAlamat: ${encodeURIComponent(alamat)}.%0APesan: ${encodeURIComponent(pesan)}`;

  // Buat URL WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Redirect ke WhatsApp
  window.open(whatsappURL, "_blank");
}
