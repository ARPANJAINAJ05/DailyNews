import React, { Component } from 'react';

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("hey");
  // }
  render() {
   
   let {title,desc,urlImg,url,date,author,source}=this.props;
  //  var color="danger";
  //  if({category}==="business")
  //  color="dark";
  //  else if({category}==="sports")
  //  color="primary";
  //  else if({category}==="health")
  //  color="warning";
  //  else if({category}==="entertainment")
  //  color="alert";
  //  else if({category}==="technology")
  //  color="info";
  //  else if({category}==="science")
  //  color="secondary";

    return <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>
    {source}
  </span>
  <img src={urlImg?urlImg:"https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-129166551.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
   
    <p className="card-text">{desc}...</p>
    <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {new Date(date).toLocaleString()}</small></p>
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
    </div>;
  }
}

export default NewsItem;