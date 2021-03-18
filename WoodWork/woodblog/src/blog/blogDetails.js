import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sideBar';
import './style.css';
import pic1 from '../images/blogs/1.jpg';
import admin from '../images/blogs/admin.jpg';
import comment1 from '../images/blogs/coments1.jpg';
import comment2 from '../images/blogs/coments2.jpg';

const BlogDetails = () => {
    return (
        <div>
            <header>Header</header>
            <p>Navbar</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div class="row blog blog-details">
                            <div class="featured_img row m0">
                                <img src={pic1} alt="" class="img-responsive" />
                            </div>
                            <div class="post-contents row m0">
                                <Link to="/blog-details" class="post-date">20<span>June</span></Link>
                                <h4 class="post-title"><Link to="/blog-details">Services that we offers </Link></h4>
                                <center><ul class="post-meta nav">
                                    <li><i class="fa fa-user"></i>By: <a href="#">Admin</a></li>
                                    <li><i class="fa fa-tag"></i><a href="#">Exterior Furniture Tips</a></li>
                                    <li><i class="fa fa-comments"></i>Comments: <a href="#">8</a></li>
                                </ul></center>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem ipsum quia dolor sit amet, consect etur, adipisci velit.</p>
                                <br />
                                <h4>Eaque ipsa quae ab illo inventore veritatis et quase</h4>
                                <p>Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                                <br />
                                <ul class="nav post-list">
                                    <li>Dolor sit amet, consectetur</li>
                                    <li>Sdipiscing elit,</li>
                                    <li>Seddo eiusmod tempor</li>
                                    <li>Incididunt ut labore et</li>
                                    <li>Dolor sit amet, consectetur</li>
                                    <li>Sdipiscing elit,</li>
                                    <li>Seddo eiusmod tempor</li>
                                    <li>Incididunt ut labore et</li>
                                </ul>
                                <br />
                                <h3>Two Column texts</h3>
                                <div class="row">
                                    <div class="col-sm-6 info">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem ape riam, eaque ipsa quae ab illo invent ore
                                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                    </div>
                                    <div class="col-sm-6 info">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem ape riam, eaque ipsa quae ab illo invent ore
                                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                    </div>
                                </div>
                                <br />
                                <blockquote>
                                    <i class="fas fa-quote-left"></i>
                                    <p>Ut enim ad minima veniam, quis nostrum exercitatio nem ullam corporis suscipit labori
                                    osam, nisi ut aliqu id ex ea commodi consequatur? Quis autem vel eum iure
                                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                    <footer><a href="#">Michale John</a></footer>
                                </blockquote>
                            </div>
                        </div>

                        <div class="row posts-social">
                            <div class="post-count">Share</div>
                            <ul class="nav social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>


                        <div class="row about-post-author">
                            <div class="media author-bio">
                                <div class="media-left">
                                    <a href="#"><img src={admin} alt="" class="img-responsive" /></a>
                                </div>
                                <div class="media-body media-middle">
                                    <h4><a href="#">administrator</a></h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore
                                    mque laudantium, totam rem ape riam, eaque ipsa quae ab illo invent ore veritatis et
                                    quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                            </div>
                        </div>
                        <div class="comments row">
                            <h3 class="comments_count">Comments (5)</h3>
                            <div class="media comment">
                                <div class="media-left"><img src={comment1} alt="" /></div>
                                <div class="media-body">
                                    <h5 class="commenter-name">John Michale</h5>
                                    <ul class="date-reply nav">
                                        <li><a href="#">feb 02 2016</a></li>
                                        <li><a href="#">reply</a></li>
                                    </ul>
                                    <p>Duis aute irure dolor in reprehenderit in vol uptate velit esse cillum dolore eu
                                    fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proid pent.</p>
                                </div>
                            </div>
                            <div class="media comment">
                                <div class="media-left"><img src={comment1} alt="" /></div>
                                <div class="media-body">
                                    <h5 class="commenter-name">John Michale</h5>
                                    <ul class="date-reply nav">
                                        <li><a href="#">feb 02 2016</a></li>
                                        <li><a href="#">reply</a></li>
                                    </ul>
                                    <p>Duis aute irure dolor in reprehenderit in vol uptate velit esse cillum dolore eu
                                    fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proid pent.</p>
                                </div>
                            </div>

                            <div class="media comment">
                                <div class="media-left"><img src={comment1} alt="" /></div>
                                <div class="media-body">
                                    <h5 class="commenter-name">John Michale</h5>
                                    <ul class="date-reply nav">
                                        <li><a href="#">feb 02 2016</a></li>
                                        <li><a href="#">reply</a></li>
                                    </ul>
                                    <p>Duis aute irure dolor in reprehenderit in vol uptate velit esse cillum dolore eu
                                    fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proid pent.</p>
                                    <div class="media comment reply">
                                        <div class="media-left"><img src={comment2} alt="" /></div>
                                        <div class="media-body">
                                            <h5 class="commenter-name">Alicia Michale</h5>
                                            <ul class="date-reply nav">
                                                <li><a href="#">feb 02 2016</a></li>
                                                <li><a href="#">reply</a></li>
                                            </ul>
                                            <p>Duis aute irure dolor in reprehenderit in vol uptate velit esse cillum dolore
                                            eu fugiat nulla pari atur. Excepteur sint occaecat.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="media comment">
                                <div class="media-left"><img src={comment1} alt="" /></div>
                                <div class="media-body">
                                    <h5 class="commenter-name">John Michale</h5>
                                    <ul class="date-reply nav">
                                        <li><a href="#">feb 02 2016</a></li>
                                        <li><a href="#">reply</a></li>
                                    </ul>
                                    <p>Duis aute irure dolor in reprehenderit in vol uptate velit esse cillum dolore eu
                                    fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proid pent.</p>
                                </div>
                            </div>

                        </div>
                        <form action="#" method="post" class="comment_form row m0">
                            <h3 class="leave-comment-title">Leave a Comment</h3>
                            <input type="text" class="form-control" />
                            <input type="email" class="form-control" />
                            <textarea class="form-control"></textarea>
                            <button type="submit" class="btn btn-primary submit">submit</button>
                        </form>
                    </div>
                    <div className="col-lg-4"><SideBar /></div>
                    <footer>Footer</footer>

                </div>
            </div></div>

    );
}

export default BlogDetails;