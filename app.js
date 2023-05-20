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
        <li class="nav-item active">
          <a onclick="newsId('${data.category_id}')" class="nav-link active" aria-current="page" href="#">${data.category_name}</a>
        </li>
        
        `
        newsNavbar.appendChild(navLi);
        
    });
}

const newsId = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => categorie(data.data))

};

const categorie = datas => {
    const newsBody = document.getElementById('news-body')
    newsBody.innerHTML = ''
    datas.forEach(data => {
        console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="row p-4">
            <div class="col-md-4">
                <img class="w-100" src="${data.image_url}" alt="Image">
            </div>
            <div class="col-md-8">
                 <h4 class="py-2">${data.title}</h4>
                <p>${data.details.slice(0, 200)}</p>
                <div>
                 <div>
                  <img class="avatar" src="${data.author.img}" alt="Image">
                 </div>
                </div>
            </div>
        </div>
        
        `
        newsBody.appendChild(div);
    })

}


newsCategories();