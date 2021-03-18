import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/blogs/1.jpg';
import pic2 from '../images/blogs/blog1.jpg';
import pic3 from '../images/blogs/blog2.jpg';

const Entry = () => {
    return (
        <div className="blog">
            <div className="blog">
                <div className="featured_img  ">
                    <Link to="/blog-details">
                        <img src={pic1} alt="" className="img-responsive" />
                    </Link>
                </div>
                <div className="post-contents  ">
                    <Link to="/blog-details" className="post-date">20<span>June</span></Link>
                    <h4 className="post-title"><Link to="/blog-details">Services that we offers </Link></h4>
                    <ul className="post-meta nav">
                        <li><i className="fa fa-user"></i>By: <a href="#">Admin</a></li>
                        <li><i className="fa fa-tag"></i><a href="#">Exterior Furniture Tips</a></li>
                        <li><i className="fa fa-comments"></i>Comments: <a href="#">8</a></li>
                    </ul>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet, consect etur, adipisci velit.</p>
                    <Link to="/blog-details" className="read-more submit">read more</Link>
                </div>
            </div>
            <div className="blog">
                <div className="featured_img  ">
                    <Link to="/blog-details"><img src={pic2} alt="" className="img-responsive" /></Link>
                </div>
                <div className="post-contents  ">
                    <Link to="/blog-details" className="post-date">20<span>June</span></Link>
                    <h4 className="post-title"><a href="blog-details.html">Services that we offers </a></h4>
                    <ul className="post-meta nav">
                        <li><i className="fa fa-user"></i>By: <a href="#">Admin</a></li>
                        <li><i className="fa fa-tag"></i><a href="#">Exterior Furniture Tips</a></li>
                        <li><i className="fa fa-comments"></i>Comments: <a href="#">8</a></li>
                    </ul>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet, consect etur, adipisci velit.</p>
                    <Link to="/blog-details" className="read-more submit">read more</Link>
                </div>
            </div>
            <div className="  blog">
                <div className="featured_img  ">
                    <Link to="/blog-details"><img src={pic3} alt="" className="img-responsive" /></Link>
                </div>
                <div className="post-contents  ">
                    <Link to="/blog-details" className="post-date">20<span>June</span></Link>
                    <h4 className="post-title"><a href="blog-details.html">Services that we offers </a></h4>
                    <ul className="post-meta nav">
                        <li><i className="fa fa-user"></i>By: <a href="#">Admin</a></li>
                        <li><i className="fa fa-tag"></i><a href="#">Exterior Furniture Tips</a></li>
                        <li><i className="fa fa-comments"></i>Comments: <a href="#">8</a></li>
                    </ul>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet, consect etur, adipisci velit.</p>
                    <Link to="/blog-details" className="read-more submit">read more</Link>
                </div>
            </div>

            <ul class="pagination">
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li class="next"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
            </ul>

        </div>
    );
}

export default Entry;