import React, { Component } from 'react';

export default class NewsItem extends Component {
    
  render() {
    return (
      <>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-dark bg-light background-sticky-top">
          <div className="card" style={{ width: '18rem' }}>
            <img src={this.props.pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">
                {this.props.description}    </p>
                <p className="card-text">
                {this.props.date}    </p>
                <p className="card-text">
                {this.props.source}    </p>
              <a href={this.props.url} target='blank' className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
