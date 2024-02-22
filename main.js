const API_KEY = `e8b9019be4404f7a9760c1636a0c451c`;
let newsList=[]
const menus = document.querySelectorAll(".menus button")
menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewsByCategory(event)))

// const getLatestNews = async ()=> {
//   const url = new URL(`https://noona-api-practice.netlify.app/top-headlines?country=kr&apikey=${API_KEY}`);

const getLatestNews = async ()=> {
     const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apikey=${API_KEY}`);

  const response = await fetch(url)
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("dddd", newsList);
};

const getNewsByCategory= async (event)=>{
  const category = event.target.textContent.toLowerCase();
console.log("category", category);
// const url = new URL (`https://noona-api-practice.netlify.app/top-headlines?country=kr&category=${category}&apikey=${API_KEY}`);
const url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apikey=${API_KEY}`);
const response = await fetch(url);
const data = await response.json();
console.log("Ddd",data);
newsList = data. articles;
render()
};

const searchNews = async() => {
  const Keyword = document.getElementById("search-input").value;
  console.log("Keyword",Keyword);
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${Keyword}&apikey=${API_KEY}`);

const response = await fetch(url)
const data = await response.json()
console.log("keyword data", data)
newsList = data. articles;
render()

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

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
}

getLatestNews();


//1.버튼 클릭 이벤트
//2. 카테고리별 뉴스 가져오기
//3. 그 뉴스를 보여주기






