// Data Produk
const produkData = {
  parang: {
    title: "Batik Parang",
    img: "https://source.unsplash.com/800x600/?batik,classic",
    desc: "Batik Parang adalah salah satu motif tertua di Indonesia yang melambangkan kesinambungan, keteguhan, dan keberanian.",
    detail: [
      "Asal: Jawa",
      "Makna: Keteguhan dan semangat yang tak pernah padam",
      "Teknik: Batik Tulis dengan canting",
      "Kategori: Klasik"
    ]
  },
  kawung: {
    title: "Batik Kawung",
    img: "https://source.unsplash.com/800x600/?batik,modern",
    desc: "Motif Batik Kawung berbentuk bulatan menyerupai buah kawung yang melambangkan kesucian dan keabadian.",
    detail: [
      "Asal: Jawa Tengah",
      "Makna: Kesucian dan keabadian",
      "Teknik: Batik Cap",
      "Kategori: Geometris"
    ]
  },
  mega: {
    title: "Batik Mega Mendung",
    img: "https://source.unsplash.com/800x600/?batik,indonesia",
    desc: "Motif Mega Mendung melambangkan keteduhan, kesabaran, dan kesejukan hati.",
    detail: [
      "Asal: Cirebon",
      "Makna: Keteduhan dan kesabaran",
      "Teknik: Batik Tulis",
      "Kategori: Klasik"
    ]
  },
  sido: {
    title: "Batik Sido Mukti",
    img: "https://source.unsplash.com/800x600/?batik,traditional",
    desc: "Batik Sido Mukti sering digunakan dalam upacara pernikahan, melambangkan doa agar pemakainya mendapatkan kehidupan bahagia dan sejahtera.",
    detail: [
      "Asal: Jawa Tengah (Surakarta & Yogyakarta)",
      "Makna: Kebahagiaan, kesejahteraan, dan keberkahan",
      "Teknik: Batik Tulis",
      "Kategori: Tradisional"
    ]
  },
  lasem: {
    title: "Batik Lasem",
    img: "https://source.unsplash.com/800x600/?batik,red",
    desc: "Batik Lasem dikenal dengan warna merah menyala yang khas, menunjukkan akulturasi budaya Jawa dengan Tiongkok.",
    detail: [
      "Asal: Lasem, Jawa Tengah",
      "Makna: Semangat, keberanian, dan keharmonisan",
      "Teknik: Batik Tulis",
      "Kategori: Akulturasi Budaya"
    ]
  }
};

// Event klik card
document.querySelectorAll(".batik-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.produk;
    showProduk(id);
  });
});

// Tampilkan produk
function showProduk(id) {
  const p = produkData[id];
  if (!p) return;

  document.getElementById("produk-img").src = p.img;
  document.getElementById("produk-title").textContent = p.title;
  document.getElementById("produk-desc").textContent = p.desc;

  const detailList = document.getElementById("produk-detail");
  detailList.innerHTML = "";
  p.detail.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    detailList.appendChild(li);
  });

  document.getElementById("galeri").classList.add("hidden");
  document.getElementById("produk").classList.remove("hidden");
}

// Kembali ke galeri
function closeProduk() {
  document.getElementById("produk").classList.add("hidden");
  document.getElementById("galeri").classList.remove("hidden");
}
