const newsCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => categories(data.data.news_category))
};

const categories =  datas => {
    const newsNavbar = document.getElementById('navbarNav')
    datas.forEach(data => {
        const navLi = document.createElement('li');
        navLi.innerHTML = `
        <li class="nav-item">
          <a onclick="newsId('${data.category_id}')" class="nav-link active" aria-current="page" href="#">${data.category_name}</a>
        </li>
        
        `
        newsNavbar.appendChild(navLi);
        
    });
}

const newsId = id => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => categorie(data.data))

};

const categorie = datas => {
    const newsBody = document.getElementById('news-body')
    datas.forEach(data => {
        console.log(data)
    })

}


newsCategories();