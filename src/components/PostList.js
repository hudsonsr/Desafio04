import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
   state = {
     posts: [
      {
         id: 1,
         author: {
           name: "Denis Rocha",
           avatar: "https://avatars3.githubusercontent.com/u/26466516?s=180&v=4"
         },
         date: "04 Jun 2019",
         content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
         comments: [
            {
               id: 1,
               author: {
                 name: "Diego Fernandes",
                 avatar: " https://avatars3.githubusercontent.com/u/2254731?s=180&v=4"
               },
               content: "Neste monmento estamos contratando apenas para o evento RS/XP"
             },
             {
               id: 2,
               author: {
                 name: "Pedro Scoob",
                 avatar: "https://avatars0.githubusercontent.com/u/37818334?s=180&v=4"
               },
               content: "O processo seletivo inicia no início de 2020."
             },
         ]
       },
       {
         id: 2,
         author: {
           name: "Pedro Scoob",
           avatar: "https://avatars0.githubusercontent.com/u/37818334?s=180&v=4"
         },
         date: "05 Jun 2019",
         content: "Galera o que vcs estão achando do NodeJS?",
         comments: [
            {
               id: 3,
               author: {
                 name: "Diego Fernandes",
                 avatar: " https://avatars3.githubusercontent.com/u/2254731?s=180&v=4"
               },
               content: "Cara é uma tecnologia muito massa"
             },
             {
               id: 4,
               author: {
                 name: "Denis Rocha",
                 avatar: "https://avatars3.githubusercontent.com/u/26466516?s=180&v=4"
               },
               content: "Cara, ainda estou no início do curso mais parece ser promissora."
             },
         ]
       },      
       ,
       {
         id: 3,
         author: {
           name: "Pedro Scoob",
           avatar: "https://avatars0.githubusercontent.com/u/37818334?s=180&v=4"
         },
         date: "05 Jun 2019",
         content: "Galera o que vcs estão achando do NodeJS?",
         comments: [
            {
               id: 3,
               author: {
                 name: "Diego Fernandes",
                 avatar: " https://avatars3.githubusercontent.com/u/2254731?s=180&v=4"
               },
               content: "Cara é uma tecnologia muito massa"
             },
             {
               id: 4,
               author: {
                 name: "Denis Rocha",
                 avatar: "https://avatars3.githubusercontent.com/u/26466516?s=180&v=4"
               },
               content: "Cara, ainda estou no início do curso mais parece ser promissora."
             },
         ]
       },      
     ]
   };

   render(){
      return (
         <div id="wrapper">
            {this.state.posts.map( post => (
               <>
              <Post key={post.id} post={post} />
               </>
      ))}

         </div>
      );
   }
 }

export default PostList;