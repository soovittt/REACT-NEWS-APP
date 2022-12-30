import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export default class News extends Component {
  constructor() {
    super();
    this.state = {
      "articles": [],
      "loading": false,
      "page": 1,

    }

  }



  async fetchNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5929c1a97c874cd9a2b1bb4efd0a4047&page=${this.state.page}&pageSize=18`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalPages: Math.ceil(parsedData.totalResults / 18) ,loading:false},);
    this.props.setProgress(100);
  }



  async componentDidMount() {
    this.fetchNews();
  }



  previousPage = async () => {
    if (this.state.page < 1) {

    } else {
      this.setState({page:this.state.page-1});
      this.fetchNews();
    }
  }




  nextPage = async () => {
    if (this.state.page + 1 > this.state.totalPages) {

    } else {
      this.setState({page:this.state.page+1});
      this.fetchNews();

    }
  }


  render() {
    let {category , setProgress} = this.props;
    return (

      

      <div className='container my-3'>
        <h1 align="center" className='text-light'>Top {category} Headlines</h1>
        {this.state.loading && <Spinner />}
        {
          !this.state.loading &&
          < div className="row" style={{ padding: 20 }}>
            {this.state.articles.map((newsItem) => {
              return (
                <div className="col-md-4" key={newsItem.url}>
                  <NewsItem title={newsItem == null ? "" : newsItem.title + "..."}
                    description={newsItem == null ? "" : newsItem.content + "..."}
                    urlToImage={newsItem.urlToImage} newsUrl={newsItem.url} 
                    />
                </div>
              );
            })}
          </div>
        }
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.previousPage} disabled={this.state.page <= 1}>Prev</button>
          <button type="button" className="btn btn-dark" onClick={this.nextPage} disabled={this.state.page + 1 > this.state.totalPages}>Next</button>
        </div>
      </div>
    )
  }
}
