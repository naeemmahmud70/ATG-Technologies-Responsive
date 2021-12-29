import React, { useEffect, useState } from 'react';
import PostData from '../../PostData/PostData.json'
import Postcard from '../PostCard/Postcard';

const AllPost = () => {

    const [posts, setAllPost] = useState([]);
    console.log(posts)

    useEffect(() => {
        setAllPost(PostData)
    }, []);

    return (
        <section>
            {
                posts.map(post => <Postcard post={post} key={post.id}></Postcard>)
            }
        </section>
    );
};

export default AllPost;