import React, { Component } from 'react';
//import axios from 'axios';
//import axiosInstance from '../../axios';
import axios from '../../axios'; // axios instead of axiosInstance, so you don't need to adjust the code
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Gus'
                    }
                });
                this.setState({ posts: updatedPosts });
                console.log(response);
            })
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId : id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
        // const posts = this.state.posts.map(post => {
            return <Post 
            key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={() => this.postSelectedHandler(post.id)}
            />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                {/* so that inside FullPost, we can listen to us getting a new ID and then fetch data for that ID. */}
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}
}

export default Blog;