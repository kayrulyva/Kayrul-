document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;

    // Ambil data yang disimpan dari localStorage
    var registeredEmail = localStorage.getItem('registeredEmail');
    var registeredPassword = localStorage.getItem('registeredPassword');

    // Validasi
    if (inputEmail === registeredEmail && inputPassword === registeredPassword) {
        window.location.href = "HOME/portofolio.html";
    } else {
        alert('Email atau password salah.');
    }
});
