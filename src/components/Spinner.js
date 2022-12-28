import React, { Component } from 'react';
import  SpinnerImage  from "./SpinnerImage.gif";



class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={SpinnerImage} alt="SpinnerImage"/>
            </div>
        );
    }
}

export default Spinner;