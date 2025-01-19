document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Efek animasi sebelum alert muncul
            button.style.transform = "scale(0.95)";
            button.style.transition = "transform 0.2s ease-in-out";

            // Membalikkan efek setelah beberapa detik
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 200);

            // Menampilkan pesan
            setTimeout(() => {
                alert('Thank you for interacting with Tamzr Joki Tugas & Bimbel Online!');
            }, 300);  // Memberi jeda setelah animasi
        });
    });
});
