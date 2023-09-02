const createBook = (book) => {
  return `
    <div class="book">
      <h3 class="staff-picks">Staff Picks</h3>
      <hr class="staff-picks__underline">
      <h4 class="book__title">${book.title}</h4>
      <h5 class="book__author">By ${book.author}</h5>
      <p class="book__description">${book.description}</p>
      <button class="button-buy button">Buy</button>
      <img class="book__cover" src="${book.cover}" alt="${book.title} by ${book.author} cover">
    </div>
  `
}

const createSeasonalBooks = (seasonId) => {
  const seasonalBooks = books.filter(books => books.season_id === seasonId);
  let container = document.querySelector(".books-" + seasonId);
  container.innerHTML = seasonalBooks.map(book => createBook(book)).join("");
}

createSeasonalBooks(1);
createSeasonalBooks(2);
createSeasonalBooks(3);
createSeasonalBooks(4);

const radioButtons = document.querySelectorAll("input[name='fav-season']");
const seasonalBooksAll = document.querySelectorAll('.books');

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener("change", () => {
    // Hide all seasons books
    seasonalBooksAll.forEach((seasonalBooks) => {
      seasonalBooks.style.opacity = "0";
      seasonalBooks.style.visibility = "hidden";
      seasonalBooks.style.display = "none";
    });

    // Show books for the selected season
    setTimeout(function () {
      seasonalBooksAll[index].style.opacity = "1";
      seasonalBooksAll[index].style.visibility = "visible";
    }, 30);
    seasonalBooksAll[index].style.display = "grid";
  });
});
