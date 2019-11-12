import React from 'react';
import Comment from './Comment';

function Post({ post }) {
        return (
         <>
         <div class="post">
               <div class="owner">
                  <img src={post.author.avatar} title={post.author.name}></img>
                  <div class="dados">
                     <b><span class="nome">{post.author.name}</span></b>
                     <span class="data">{post.date}</span>
                  </div>
               </div>
               <p class="postText">{post.content}</p>
               <ul>
                  {post.comments.map(comment => (
                       <Comment key={comment.id} comment={comment} />           
                  ))}
               </ul>
         </div>
         </>
      );
   
 }

export default Post;