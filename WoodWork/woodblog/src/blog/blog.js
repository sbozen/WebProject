import React from 'react';
import Entry from './entry';
import SideBar from './sideBar';
import './style.css';

const Blog = () => {
    return (
        <div>
            <header >Header Tag</header>
            <p>Navbar</p>
            <div className="container">
                <div className="row sectpad">
                    <div className="blog_section col-lg-8 " >
                        <Entry />
                    </div>
                    <div className="col-lg-4">
                        <SideBar />
                    </div>
                    <footer>Footer</footer>
                </div>
            </div >
        </div >
    );

};

export default Blog;