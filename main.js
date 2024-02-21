const API_KEY = `e8b9019be4404f7a9760c1636a0c451c`;
let newsList=[]

const getLatestNews = async ()=> {
  const url = new URL(`https://noona-api-practice.netlify.app/top-headlines?country=kr&apikey=${API_KEY}`);

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
  <img class="news-img-size"
  src="${
    news.urlToImage ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"}"/>

  
  </div>
    <div class="col-lg-8">
  <h2>${news.title}</h2>
  <p>${
    news.description == null || news.description == ""
      ? "내용없음"
      : news.description.length > 200
      ? news.description.substring(0, 200) + "..."
      : news.description
}</p>
<div>${news.source.name|| "no source"}  ${moment(
  news.publishedAt
).format('llll')}</div>

  </div>
  </div>`).join(``);


  document.getElementById("news-board").innerHTML=newsHTML
}

getLatestNews();







