import React from 'react';

const GetPromise = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()

}

const PostPage = async() => {
    // const resolve = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts = await resolve.json()
    const posts = await GetPromise()
    console.log(posts)
 

    return (
        <div>
            <h1>Post Page {posts.length} </h1>
        </div>
    );
};

export default PostPage