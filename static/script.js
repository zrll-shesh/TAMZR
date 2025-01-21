document.addEventListener("DOMContentLoaded", function () {

    const testimoniBtn = document.getElementById("testimoni-btn");
    const testimoniContainer = document.getElementById("testimoni-container");
    const testimoniMessage = document.getElementById("testimoni-message");

    testimoniBtn.addEventListener("click", function () {
        if (testimoniContainer.style.display === "none" || testimoniContainer.innerHTML === "") {
            testimoniContainer.innerHTML = "";

            let img1 = document.createElement("img");
            img1.src = "/static/images/testimoni1.jpeg";
            img1.alt = "Testimoni 1";
            img1.classList.add("testimoni-img");

            let img2 = document.createElement("img");
            img2.src = "/static/images/testimoni2.jpeg";
            img2.alt = "Testimoni 2";
            img2.classList.add("testimoni-img");

            testimoniContainer.appendChild(img1);
            testimoniContainer.appendChild(img2);

            testimoniContainer.style.display = "flex";
            testimoniBtn.textContent = "Tutup Testimoni";

            typeText("Berikut adalah beberapa testimoni!");

        } else {
 
            testimoniContainer.style.display = "none";
            testimoniBtn.textContent = "Tampilkan Testimoni";

            typeText("Terima kasih telah melihat testimoni! 😊");
        }
    });

    function typeText(message) {
        let i = 0;
        testimoniMessage.innerHTML = ""; 
        function typeWriter() {
            if (i < message.length) {
                testimoniMessage.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }
        typeWriter();
    }
});
