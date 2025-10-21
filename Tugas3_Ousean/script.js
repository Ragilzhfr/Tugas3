// Ambil elemen tombol dan paragraf
const button = document.getElementById("changeTextBtn");
const paragraph = document.getElementById("intro-text");

// Simpan status awal (false = belum diubah)
let isChanged = false;

// Event listener untuk klik tombol
button.addEventListener("click", function() {
    if (!isChanged) {
        // === UBAH TEKS DAN WARNA ===
        paragraph.textContent = 
            "Terima kasih telah mengunjungi Russ Corp! " +
            "Kami terus berinovasi menciptakan solusi digital " +
            "yang memberdayakan masyarakat dan bisnis di seluruh Indonesia.";
        paragraph.style.backgroundColor = "#004aad";
        paragraph.style.color = "white";
        paragraph.style.transition = "0.5s";
        button.textContent = "Kembalikan Paragraf"; // ubah teks tombol
        isChanged = true; // ubah status
    } else {
        // === KEMBALIKAN KE KONDISI AWAL ===
        paragraph.textContent = 
            "Russ Corp adalah perusahaan yang bergerak di bidang teknologi informasi, " +
            "berkomitmen memberikan layanan terbaik untuk mendukung transformasi digital. " +
            "Kami hadir sebagai mitra terpercaya bagi bisnis dan organisasi yang ingin " +
            "memanfaatkan teknologi untuk meningkatkan efisiensi, produktivitas, dan daya saing.";
        paragraph.style.backgroundColor = "#002b80";
        paragraph.style.color = "#ffe4b5";
        button.textContent = "Ubah Paragraf"; // ubah teks tombol lagi
        isChanged = false; // balik status
    }
});
