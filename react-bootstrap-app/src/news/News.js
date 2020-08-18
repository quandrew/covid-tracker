import React from 'react';
import './News.css';

class News extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  
  render() {
    return (<div className="News">

        {this.state.articles.map(article => (
          <a class="newsSection" href={article.webUrl}><div class="newsElementContainer">
            <h4>{article.title}</h4>
            <p>{article.excerpt}</p>
            {article.images != null && <img src={article.images[0].url} alt="hello"/>}
          </div></a>
        ))}

    </div>);
  }
  
  componentDidMount() {
    const that = this;
    var myHeaders = new Headers();
    myHeaders.append("Subscription-Key", "3009d4ccc29e4808af1ccc25c69b4d5d");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("https://api.smartable.ai/coronavirus/news/US", requestOptions)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            console.log(data.news[0].title);
            console.log(data.news[0].excerpt);
            console.log(data.news[0].webUrl);
            //console.log(data.news[0].images[0].url)
            that.setState({'articles': data.news});
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }
}

export default News;