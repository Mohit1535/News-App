import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }

  async getAPIData() {
    const { search, q, language } = this.props;
    try {
      let response = await fetch(`
      
https://newsapi.org/v2/everything?q=${search || q}&sortBy=publishedAt&language=${language}&apiKey=c177a71a10fa4dd58080eaef57773d41`)
      response = await response.json();
      if (response.status === "ok") {
        this.setState({
          articles: response.articles.filter((x) => x.title !== "[Removed]"),
          totalResults: response.totalResults,
          page: 1, // Reset page to 1 when fetching new data
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData = async () => {
    const { search, q, language } = this.props;
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });

    try {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${
          search || q
        }&sortBy=publishedAt&language=${language}&page=${nextPage}&apiKey=YOUR_API_KEY`
      );
      response = await response.json();

      if (response?.status === "ok") {
        this.setState({
          articles: this.state.articles.concat(
            response.articles.filter((x) => x.title !== "[Removed]")
          ),
        });
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.search !== prevProps.search ||
      this.props.q !== prevProps.q ||
      this.props.language !== prevProps.language
    ) {
      this.getAPIData();
      console.log("API called due to prop change");
    }
  }

  render() {
    const { search, q } = this.props;
    const defaultImage = "path_to_default_image.jpg"; // Replace with a valid path

    return (
      <div className="container-fluid">
        <div className="bg-dark text-light text-center p-1 mt-2">
          <h2>{search || q}</h2>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {this.state.articles.map((item, index) => (
              <NewsItem
                key={index}
                source={item.source.name || "N/A"}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage || defaultImage}
                date={item.publishedAt}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
