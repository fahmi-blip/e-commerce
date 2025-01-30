//toogle class active
const navbarNav = document.querySelector(".navbar-nav");

//menu ketika di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});



// Inisialisasi Popup Login
  // Fungsi untuk membuka popup
  function openPopup() {
    popup.style.opacity = "1";
    popup.style.visibility = "visible";
  }

  // Fungsi untuk menutup popup
  function closePopup() {
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
    history.pushState("", document.title, window.location.pathname);
  }

  // Event listener untuk membuka popup ketika tombol login diklik
  if (loginButton) {
    loginButton.addEventListener("click", function (e) {
      e.preventDefault(); // Ini hanya untuk mencegah default pada button login
      openPopup();
    });
  }

  // Event listener untuk menutup popup ketika tombol close diklik
  if (closeButton) {
    closeButton.addEventListener("click", function (e) {
      e.preventDefault();
      closePopup();
    });
  }

  // Event listener untuk menutup popup ketika mengklik di luar area konten popup
  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  }

  // Validasi email untuk memastikan domain @gmail.com
  if (form && emailInput) {
    form.addEventListener("submit", function (e) {
      const emailValue = emailInput.value;

      // Periksa apakah email berakhiran @gmail.com
      if (!emailValue.endsWith("@gmail.com")) {
        e.preventDefault(); // Cegah pengiriman form jika email tidak valid
        emailInput.classList.add("error"); // Tambahkan kelas error
        emailInput.setAttribute(
          "placeholder",
          "Please enter a valid email address"
        ); // Ganti placeholder menjadi pesan error
        emailInput.value = ""; // Kosongkan input agar placeholder terlihat
      } else {
        emailInput.classList.remove("error"); // Hapus kelas error jika valid
      }
    });
  }

  // Memastikan ikon password selalu muncul
  if (passwordInput && passwordIcon) {
    function showPasswordIcon() {
      passwordIcon.style.visibility = "visible";
    }

    // Event listener ketika email input di-fokus
    emailInput.addEventListener("focus", function () {
      showPasswordIcon();
    });

    // Event listener untuk input password
    passwordInput.addEventListener("focus", function () {
      showPasswordIcon();
    });

    // Event listener toggle untuk show/hide password
    passwordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Tampilkan password
      } else {
        passwordInput.type = "password"; // Sembunyikan password
      }
    });
  }

  // Event listener untuk "Daftar" - Navigasi ke halaman register
  const signupLink = document.querySelector(".signup label"); // Menggunakan label untuk menavigasi
  if (signupLink) {
    signupLink.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah aksi default
      document.getElementById("loading").style.display = "flex"; // Tampilkan loading

      // Pindah ke halaman register setelah 1 detik
      setTimeout(function () {
        window.location.href = "register.html"; // Arahkan ke halaman pendaftaran akun
      }, 2000); // 2000 ms = 2 detik
    });
  };


