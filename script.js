function btn() {
    window.location.href= "dashboard.html"
}

function lanjutHalaman() {
  document.getElementById("halaman1").classList.add("tersembunyi");
  document.getElementById("halaman2").classList.remove("tersembunyi");

  const audio = document.getElementById("musik");
  audio.play().catch(() => {
    // Handle autoplay restrictions
    console.log("Klik dibutuhkan untuk memutar musik");
  });
}

// Ganti nama tamu secara dinamis (bisa dari URL param atau form)
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('nama');
  if (nama) {
    document.getElementById("namaTamu").innerText = nama;
  }
});s