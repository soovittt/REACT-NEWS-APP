import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './News';
class Category extends Component {

    render() {
        let { category } = this.props;
        return (
            <News category={category}></News>
        );
    }
}

export default Category;