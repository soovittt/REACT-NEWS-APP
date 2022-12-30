import React, { Component } from 'react';






class Dropdown extends Component {


    render() {
        let { type , filterItems } = this.props;
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {type}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {filterItems.map((element)=>{
                        return <a className="dropdown-item" >{element}</a>
                    })}
                    {/* <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a> */}
                </div>
            </div>
        );
    }
}

export default Dropdown;