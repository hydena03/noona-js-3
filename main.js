const API_KEY = `e8b9019be4404f7a9760c1636a0c451c`;
let news=[]
const getLatestNews = async ()=> {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    );
  const response = await fetch(url)
  const data = await response.json();
  news = data.articles
  console.log("ddd", data.articles);
};

getLatestNews();

