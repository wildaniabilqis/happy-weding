function btn() {
    window.location.href= "dashboard.html";
    const audio = document.getElementById("musik");
  audio.play().catch(() => {
    // Handle autoplay restrictions
    console.log("Klik dibutuhkan untuk memutar musik");
  });
}

const musik = document.getElementById("musik");

if (localStorage.getItem("playMusic") === "yes") {
musik.play().catch(() => {
console.log("Autoplay diblokir, tunggu interaksi user");
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