document.addEventListener("DOMContentLoaded", function () {
    const bgElement = document.getElementById("background-div");
    const bookTitle = document.getElementById("book-title");
    const bookYear = document.getElementById("book-year");
    const bookGenre = document.getElementById("book-genre");
    const bookDescription = document.getElementById("book-description");
    const carouselItems = document.querySelectorAll(".carousel-item");

    function setActiveItem(item) {
       
        bgElement.classList.add("fade-out");

        setTimeout(() => {
            bgElement.style.backgroundImage = `url('${item.dataset.bg}')`;

            bgElement.classList.remove("fade-out");
        }, 400);

 
        bookTitle.textContent = item.dataset.title;
        bookYear.textContent = item.dataset.year;
        bookGenre.textContent = item.dataset.genre;
        bookDescription.textContent = item.dataset.description;
    }

    if (carouselItems.length > 0) {
        setActiveItem(carouselItems[0]);
    }

    carouselItems.forEach(item => {
        item.addEventListener("click", () => setActiveItem(item));
    });
});
