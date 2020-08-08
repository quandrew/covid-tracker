import React from 'react';
import './News.css';

class News extends React.Component {
  
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  
  render() {
    return <div className="News">
      <header className="News-header">
        <h2>News</h2>
      </header>
    <div>
      </div>
    </div>;
  }
  
  componentDidMount() {
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
            console.log(data.news[0].images[0].url)
            this.setState({articles: data});
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }
}

export default News;