import React, { Component } from "react";
import NewsItem from "./NewsItem";
 import { Spinner } from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

export class NewsBox extends Component {
  // below articles are taken from sampleOutput.json(just for example ) and shows up until live article is fetched from newsapi
  article = [
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Fox News",
      title:
        "Arkansas' GOP Gov. Hutchinson says Trump not ‘the one to lead our party and our country again’",
      description:
        "Republican Arkansas Gov. Asa Hutchinson said Saturday in Washington, D.C., that he doesn’t believe former President Donald Trump deserves a second shot at running the country.",
      url: "https://www.foxnews.com/politics/arkansas-gov-hutchinson-trump-lead-party-country-again",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/01/AP21005034498345-e1609858170240.jpg",
      publishedAt: "2022-01-30T18:52:20.5341986Z",
      content:
        'Republican Arkansas Gov. Asa Hutchinson declared Saturday that former President Donald Trump is not "the one" to represent the party going into the 2024 presidential election.\r\nHutchinson, chairman o… [+2133 chars]',
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "About 1,300 U.S. flights canceled after winter storm in Northeast",
      description:
        "About 1,300 U.S. flights were canceled early on Sunday after the northeastern part of the country was walloped by a fierce winter storm.",
      url: "https://www.reuters.com/world/us/about-1300-us-flights-canceled-after-winter-storm-northeast-2022-01-30/",
      urlToImage:
        "https://www.reuters.com/resizer/QHF5m9zlt0WEPGISfNIW1nhWYEg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GDRQJM22I5LGJPNE4UJMR6Y7ZU.jpg",
      publishedAt: "2022-01-30T14:25:39Z",
      content:
        "Jan 30 (Reuters) - About 1,300 U.S. flights were canceled early on Sunday after the northeastern part of the country was walloped by a fierce winter storm.\r\nSeveral U.S. states had declared emergenci… [+1871 chars]",
    },
    {
      source: {
        id: "google-news-in",
        name: "Google News (India)",
      },
      author: "Rituraj Baruah",
      title:
        "As covid cases recede, economic activities should be maintained: PM Modi",
      description:
        "Now the cases of corona infection have also started decreasing, this is a very positive sign. People should be safe, the pace of economic activities of the country should be maintained, said Modi",
      url: "https://www.livemint.com/economy/as-covid-cases-recede-economic-activities-should-be-maintained-pm-modi-11643534138756.html",
      urlToImage:
        "https://images.livemint.com/img/2022/01/30/600x338/Narendra_Modi_1643359267445_1643534328494.jpg",
      publishedAt: "2022-01-30T10:16:58+00:00",
      content:
        "New Delhi: Prime Minister Narendra Modi on Sunday said that as the daily cases of Coronavirus infection have started to decline, the momentum of economic activities should be maintained.\r\nAddressing … [+3776 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Harmeet Kaur, CNN",
      title:
        "Colleges and universities across the US are moving to ban caste discrimination",
      description:
        "A tweak to California State University's anti-discrimination policy that quietly went into effect on January 1 acknowledges caste discrimination. Now that the largest university system in the country's most populous state has committed to caste protections, m…",
      url: "http://us.cnn.com/2022/01/30/us/csu-caste-protections-universities-cec/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220127184201-san-diego-state-university-file-2020-restricted-super-tease.jpg",
      publishedAt: "2022-01-30T09:36:57Z",
      content:
        '(CNN)On paper, the change was subtle -- the word "caste" appearing in parentheses after the term "race and ethnicity."\r\nBut for many advocates and student leaders, the tweak to California State Unive… [+12284 chars]',
    },
    {
      source: {
        id: "next-big-future",
        name: "Next Big Future",
      },
      author: "Brian Wang",
      title:
        "Ukrainian Army and Special Ops Improved But Virtually No Navy and Air Force | NextBigFuture.com",
      description:
        "In 2014, Ukraine’s defense minister said the country had 6,000 combat-ready troops. Today in 2022, Ukraine’s army numbers around 145,000-150,000 troops and",
      url: "https://www.nextbigfuture.com/2022/01/ukrainian-armed-forces-analysis.html",
      urlToImage:
        "https://nextbigfuture.s3.amazonaws.com/uploads/2022/01/ukrainemilitary-1024x683.jpeg",
      publishedAt: "2022-01-27T19:19:57Z",
      content:
        "In 2014, Ukraines defense minister said the country had 6,000 combat-ready troops. Today in 2022, Ukraines army numbers around 145,000-150,000 troops and has significantly improved its capabilities, … [+3383 chars]",
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Sydney Bucksbaum",
      title:
        "Blockbuster TV creators and stars discuss why the Emmys are finally paying attention",
      description:
        "<em>The Mandalorian, WandaVision, The Boys, Lovecraft Country</em>, and more shows are proving that genre TV is better than ever — and more than deserving of all those Emmy nominations.",
      url: "https://ew.com/awards/emmys/emmys-blockbuster-tv-the-mandalorian-wandavision-the-boys-lovecraft-country/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&rect=0%2C0%2C2000%2C1000&poi=%5B980%2C13%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F08%2F26%2FBlockbuster-TV.jpg",
      publishedAt: "2021-08-27T19:00:00Z",
      content:
        "Game of Thrones used to be the only genre television show sitting on the Emmys throne. But the long, cold winter of blockbuster TV being shut out of the awards show race is finally over, and sci-fi/c… [+9139 chars]",
    },
    {
      source: {
        id: "rte",
        name: "RTE",
      },
      author: "RTÉ News",
      title: "275,000 appointments made at Penneys this week",
      description:
        "There have been 275,000 appointment slots booked for Penneys stores around the country this week, the retailer has said.",
      url: "https://www.rte.ie/news/business/2021/0515/1221782-penneys/",
      urlToImage: "https://img.rasset.ie/0016c07f-1600.jpg",
      publishedAt: "2021-05-15T10:52:52Z",
      content:
        "There have been 275,000 appointment slots booked for Penneys stores around the country this week, the retailer has said.\r\nPenney's 36 stores opened on an appointment-only basis from last Monday, with… [+577 chars]",
    },
  ];
  static defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general"
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  };
  capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("i m 1st");
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
      totalResults:0
    };

    document.title = `${this.capitalise(this.props.category)}-NewsApp`;
  }
 
  async updateFetchedArticle() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
  }

  async fetchMoreData(){
    this.setState({
      page: this.state.page + 1,
    });
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
  });
}

  async componentDidMount() {
    this.updateFetchedArticle();
  
    // console.log("i m 3rd");
    // this.setState({loading:true});
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7c376a4c887a46de88081d6555ee1174&page=1&pageSize=${this.props.pagesize}`;
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({article:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
  }
  

  handlePrevClick = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7c376a4c887a46de88081d6555ee1174&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
    });
    this.updateFetchedArticle();
  };

  handleNextClick = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7c376a4c887a46de88081d6555ee1174&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
    });
    this.updateFetchedArticle();
  };

  render() {
    // console.log("i m 2nd");
    return (
      <>
          <div className="container my-3">  
          <h1 className="text-center" style={{ margin: "60px" }}>
            NewsMonkey - Top {this.capitalise(this.props.category)} Headlines
          </h1>
            {this.state.loading && <Spinner />}  
          
         {/* <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData()}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Spinner/>}
        >  */}
         <div className="container">
        <div className="row">
             {!this.state.loading &&  
              this.state.article.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 100) : ""}
                      desc={
                        element.description
                          ? element.description.slice(0, 200)
                          : ""
                      }
                      urlImg={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
          
           {/* </InfiniteScroll> */}
          

      
   <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                          Math.ceil(this.state.totalResults / this.props.pagesize) <=
                this.state.page
              }
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> 
          
        </div>
      </>
    );
  }
}

export default NewsBox;