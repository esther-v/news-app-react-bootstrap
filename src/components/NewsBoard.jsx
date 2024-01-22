import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [category])
  return (
    <div className="d-flex flex-column">
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div className="margin-auto">
        {articles.map((article, index) => {
          return <NewsItem 
            key={index} 
            title={article.title} 
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        })}
      </div>
    </div>
  )
}

export default NewsBoard