import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

//import Post from '../../components/Post/Post';
//import FullPost from '../FullPost/FullPost';
//import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                                {/* <NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink> */}
                                </li>
                            <li>
                            <a href="/new-post">New Post</a>
                                {/* <NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink> */}
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Posts /> */}
                    
            </div>
        );
    }
}

export default Blog;