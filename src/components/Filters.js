import React, { Component } from 'react';
import Dropdown from './Dropdown';



class Filters extends Component {


    constructor() {

        super();

        this.state = {
            "countries": [
                "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"
            ],
            "categories": [

                "business", "entertainment", "general", "health", "science", "sports", "technology"
            ]
            "country":"us"
        }
    }

    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3">
                                <Dropdown type="Country" filterItems={this.state.countries} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <button type="button" class="btn btn-dark">Submit</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <Dropdown type="Category" filterItems={this.state.categories} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;