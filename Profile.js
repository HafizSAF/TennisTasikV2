// JavaScript untuk navigasi ketika tombol diklik
document.addEventListener("DOMContentLoaded", function () {
    // Mengambil elemen tombol "Ask A Question" dan "Find A Package"
    const askQuestionButton = document.querySelector('.ask-question');
    const findPackageButton = document.querySelector('.find-package');

    // Menambahkan event listener untuk navigasi
    askQuestionButton.addEventListener('click', function () {
        window.location.href = 'Contact.html'; // Mengarahkan ke halaman Contact
    });

    findPackageButton.addEventListener('click', function () {
        window.location.href = 'Package.html'; // Mengarahkan ke halaman Package
    });
});