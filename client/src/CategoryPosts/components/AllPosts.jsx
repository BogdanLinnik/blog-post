import React from 'react';
import Post from './_post';

export const AllPosts = (props) => {
  let posts = props.posts.map((post) => {
    return(
      <Post
        key={post.id}
        post={post}
        categoryId={props.categoryId}
        handleUpdate={props.handleUpdate}
        handleDelete={props.handleDelete}
        handleRedirect={props.handleRedirect}
      />
    )
  })

  return(
    <div>
      {posts}
    </div>
  )
}
