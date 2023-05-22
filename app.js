const newsCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => categories(data.data.news_category))
};

const categories =  datas => {
    const newsNavbar = document.getElementById('navbar')
    datas.forEach(data => {
        const navLi = document.createElement('li');
        navLi.innerHTML = `
        <li class="nav-item active">
          <a onclick="newsId('${data.category_id}')" class="nav-link active" href="#">${data.category_name}</a>
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
newsId('id');

const categorie = datas => {
    const itens = document.getElementById('items')
    itens.innerText = `${datas.length}`;
    const newsBody = document.getElementById('news-body')
    newsBody.innerHTML = ''
    datas.forEach(data => { 
        const div = document.createElement('div')
        div.innerHTML = `
        <div onclick="model('${data._id}')" class="row p-4 my-5 bg-white rounded d-flex justify-content-around" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="col-md-4">
                <img class="w-100" src="${data.image_url}" alt="Image">
            </div>
            <div class="col-md-8">
                 <h4 class="py-2">${data.title}</h4>
                <p>${data.details.slice(0, 200)}</p>
                <div class="d-flex justify-content-evenly">
                 <div class="d-flex align-middle">
                   <div class="mx-4">
                    <img class="avatar" src="${data.author.img}" alt="Image">
                    </div>
                   <div class="lh-1">
                    <p>${data.author.name}</p>
                    <p>${data.author.published_date}</p>
                   </div>
                 </div>
                 <div class="d-flex">
                  <img class="eyeicon mt-1 mx-2" src="image/eye.png" alt="">
                   <p>${data.total_view}</p>
                 </div>
                 <div><img class="eyeico" src="image/5star.png" alt=""></div>
                </div>
            </div>
        </div>
        
        `
        newsBody.appendChild(div);
    })
}

const model = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then(res => res.json())
    .then(data => modalOpen(data.data))
}
model('id')

const modalOpen = datas => {
    datas.forEach(data  => {
        console.log(data)
    })

}


newsCategories();