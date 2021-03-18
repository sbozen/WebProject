import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './blog/blog';
import BlogDetails from './blog/blogDetails';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/blog">
                    <Blog />
                </Route>

                <Route exact path="/blog-details">
                    <BlogDetails />
                </Route>

            </Switch>
        </BrowserRouter>

    );
};

export default Routes;


