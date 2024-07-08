/* START Code for the filtering of the topics */

function showAll() 
{
    // Get all article elements with the class "topics-blogs"
    const articles = document.querySelectorAll('.topics-blogs');

    // Loop through each article and show it
    articles.forEach(article => 
    {
        // ' ' means the default display value of the element
        article.style.display = '';
    });
}

function filterArticles(category) 
{
    // Get all article elements with the class "topics-blogs"
    const articles = document.querySelectorAll('.topics-blogs');

    // Loop through each article and hide it
    articles.forEach(article => 
    {
        article.style.display = 'none';
    });

    // Get all article elements with the class "topics-blogs" and the data-category attribute equal to the category
    const filteredArticles = document.querySelectorAll(`.topics-blogs[data-category="${category}"]`);

    // Loop through each article and show it
    filteredArticles.forEach(article => 
    {
        article.style.display = '';
    });
}

// querySelector is used to select the button with the class "all" and add an event listener to it
// When the button is clicked, the showAll function is called, and the corresponding articles are shown
document.querySelector('.filter-nav-btns.all').addEventListener('click', showAll);
document.querySelector('.filter-nav-btns.technology').addEventListener('click', () => filterArticles('technology'));
document.querySelector('.filter-nav-btns.business').addEventListener('click', () => filterArticles('business'));
document.querySelector('.filter-nav-btns.travel').addEventListener('click', () => filterArticles('travel'));
document.querySelector('.filter-nav-btns.food').addEventListener('click', () => filterArticles('food'));
document.querySelector('.filter-nav-btns.education').addEventListener('click', () => filterArticles('education'));

/* END Code for the filtering of the topics */


