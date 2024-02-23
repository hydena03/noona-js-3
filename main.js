const API_KEY = `e8b9019be4404f7a9760c1636a0c451c`;
let newsList=[]
const menus = document.querySelectorAll(".menus button")
menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewsByCategory(event)));

let url = new URL(`https://noona-api-practice.netlify.app/top-headlines?country=kr&apikey=${API_KEY}`)
// let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apikey=${API_KEY}`);

const getNews =async()=>{
  try{
    const response = await fetch(url)
    const data = await response.json();
    if(response.status===200){
      if(data.articles.length===0){
        throw new Error("검색 결과가 없습니다.")
      }
      newsList = data.articles;
      render();
    }else{
      throw new Error(data.message)
    }

  }catch(error){
errorRender(error.message);
  }
};

const getLatestNews = async ()=> {

  let url = new URL(`https://noona-api-practice.netlify.app/top-headlines?country=kr&apikey=${API_KEY}`)
  // let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apikey=${API_KEY}`);

    getNews();
};

const getNewsByCategory= async (event)=>{
  const category = event.target.textContent.toLowerCase();


url = new URL (`https://noona-api-practice.netlify.app/top-headlines?country=kr&category=${category}&apikey=${API_KEY}`);
// const url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apikey=${API_KEY}`);

getNews();

};

const searchNews = async() => {
  const Keyword = document.getElementById("search-input").value;

  url = new URL (`https://noona-api-practice.netlify.app/top-headlines?country=kr&q=${Keyword}&apikey=${API_KEY}`);
  // url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${Keyword}&apikey=${API_KEY}`);

  getNews();

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
};

const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-primary" role="alert">
    ${errorMessage}
  </div>`;

  document.getElementById("news-board").innerHTML = errorHTML; 
};

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
}

getLatestNews();






