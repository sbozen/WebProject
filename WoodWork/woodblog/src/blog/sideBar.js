import React from 'react';
import { Link } from 'react-router-dom';
import post1 from '../images/blogs/post1.jpg'
import post2 from '../images/blogs/post2.jpg'
import post3 from '../images/blogs/post3.jpg'

const SideBar = () => {
    return (
        <div class="sidebar">
            <div class="row widget widget-categories">
                <div class="row widget widget-search">
                    <div class="row widget-inner">
                        <form action="/blog-details" class="search-form" method="get">
                            <div class="input-group">
                                <input type="search" class="form-control" placeholder="Enter Search keywords" />
                                <span class="input-group-addon">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div><br />
                <h4 class="widget-title">Categories</h4>
                <div class="row widget-inner">
                    <ul class="nav categories">
                        <li><Link to="/blog-details"><i class="fa fa-angle-right"></i>Interior Furniture Manfacturing</Link></li>
                        <li><Link to="/blog-details"><i class="fa fa-angle-right"></i>Reparing of Wooden Almerah</Link></li>
                        <li><Link to="/blog-details"><i class="fa fa-angle-right"></i>Hardwood Flooring</Link></li>
                        <li><Link to="/blog-details"><i class="fa fa-angle-right"></i>Renovaion of office furnitures</Link></li>
                        <li><Link to="/blog-details"><i class="fa fa-angle-right"></i>Make Quality Products</Link></li>
                        <li><Link to="/blog-details"><i class="fa fa-angle-right"></i>Renovation of Kitchen</Link></li>
                    </ul>
                </div>
            </div>
            <div class="row widget widget-popular-posts">
                <h4 class="widget-title">Popular Posts</h4>
                <div class="row widget-inner">
                    <div class="media popular-post">
                        <div class="media-left">
                            <Link to="/blog-details">
                                <img src={post1} alt="" /></Link>
                        </div>
                        <div class="media-body">
                            <h5 class="post-title"><Link to="/blog-details">Neque porro quisua mest qui dolorem.</Link></h5>
                            <h5 class="post-date"><Link to="/blog-details">20 june</Link></h5>
                        </div>
                    </div>

                    <div class="media popular-post">
                        <div class="media-left"> <Link to="/blog-details">
                            <img src={post2} alt="" /></Link></div>
                        <div class="media-body">
                            <h5 class="post-title"><Link to="/blog-details">Neque porro quisua mest qui dolorem.</Link></h5>
                            <h5 class="post-date"><Link to="/blog-details">20 june</Link></h5>
                        </div>
                    </div>

                    <div class="media popular-post">
                        <div class="media-left"><Link to="/blog-details">
                            <img src={post3} alt="" /></Link></div>
                        <div class="media-body">
                            <h5 class="post-title"><Link to="/blog-details">Neque porro quisua mest qui
                                                dolorem.</Link></h5>
                            <h5 class="post-date"><Link to="/blog-details">20 june</Link></h5>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row widget text-widget-post">
                <h4 class="widget-title">Text Widget</h4>
                <div class="text-widegt widget-inner">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant ium dolore
                    que laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                                    quasi arc</p>
                </div>
            </div>
            <div class="row widget widget-tag-clouds">
                <h4 class="widget-title">tag clouds</h4>
                <div class="row widget-inner clouds">
                    <Link to="/blog-details" class="widget-tag">Kitchen Renovation</Link>
                    <Link to="/blog-details" class="tag widget-tag active">Tips</Link>
                    <Link to="/blog-details" class="widget-tag">Indoor Furniture</Link>
                    <Link to="/blog-details" class="tag widget-tag">Repairing</Link>
                    <Link to="/blog-details" class="widget-tag">Wood Supply</Link>
                    <Link to="/blog-details" class="tag widget-tag">Flooring </Link>
                </div>
            </div>
        </div>

    );
}

export default SideBar;