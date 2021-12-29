import React from 'react';
import JoinGroup from '../JoinGroup/JoinGroup';
import AllPost from './AllPosts/AllPost';
import StickyTab from './StickyTab/StickyTab';

const PostArea = () => {
   

    return (
        <div className="container">
            <StickyTab></StickyTab>
            <div className="row">
                <div className='col-md-8'>
                    <AllPost></AllPost>
                </div>
                <div className="col-md-4">
                    <JoinGroup></JoinGroup>
                </div>
            </div>
        </div>
    );
};

export default PostArea;