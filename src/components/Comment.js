import React from 'react';
//import TechItem from './TechItem/index';

function Comment({ comment }) {
        return (
         <>
            <li>
               <img src={comment.author.avatar} title={comment.author.name}></img>
               <div class="comment">
                  <p><b>{comment.author.name}</b> {comment.content}</p>
               </div>
            </li>
         </>
      );
   
 }

export default Comment;