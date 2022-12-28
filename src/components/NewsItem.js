


import React, { Component } from 'react';

class NewsItem extends Component {


    constructor(){
        super();
    }


    



    render() {
        let {title,description,urlToImage,newsUrl} = this.props;
        
        return (
            <>
                <div className="card" style={{borderRadius:30,margin:10}}>
                    <img src={urlToImage?urlToImage:"https://www.investors.com/wp-content/uploads/2022/12/Stock-SantaCash-adobe.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-primary">View</a>
                        </div>
                </div>
            </>
        );
    }
}

export default NewsItem;