
let news=[]
const getLatestNews = async ()=> {
  const url = new URL(`https://noona-api-practice.netlify.app/top-headlines?country=kr`);

  const response = await fetch(url)
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();

