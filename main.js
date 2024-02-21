const API_KEY = `e8b9019be4404f7a9760c1636a0c451c`;
let newsList=[]

const getLatestNews = async ()=> {
  const url = new URL(`https://noona-api-practice.netlify.app/top-headlines?country=kr`);

// const getLatestNews = async ()=> {
//      const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apikey=${API_KEY}`);

  const response = await fetch(url)
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("dddd", newsList);
};

const render = ()=>{
  const newsHTML = newsList.map(news=>`<div class="row news">
  <div class="col-lg-4">
  <img class="news-img-size" src=${news.urlToImage}>
  </div>
    <div class="col-lg-8">
  <h2>${news.title}</h2>
  <p>${news.description}</p>
  <div>${news.source.name}*${news.publishedAt}</div>
  </div>
  </div>`).join(``);


  document.getElementById("news-board").innerHTML=newsHTML
}

getLatestNews();

