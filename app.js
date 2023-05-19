const newsCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => categories(data.data.news_category))
};

const categories =  datas => {
    const newsNavbar = document.getElementById('navbarNav')
    datas.forEach(data => {
        console.log(data)
        const navLi = document.createElement('li');
        navLi.innerHTML = `
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">${data.category_name}</a>
        </li>
        
        `
        newsNavbar.appendChild(navLi);
        
    });
}




newsCategories();