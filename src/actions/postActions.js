import {FETCH_POSTS,NEW_POST,UPDATE_POST} from './types';
export const fetchPosts = () => dispatch => {
console.log('fetch');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
        );
};

export const createPost = (postData) => dispatch => {
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(res =>  res.json())
        .then(post=>  dispatch({
            type:NEW_POST,
            payload:post
        }));
      };
    

      export const updatePost = (postData) => dispatch => {
    
        fetch('https://jsonplaceholder.typicode.com/posts/'+postData.userId,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(postData)
          })
          .then(res =>  res.json())
            .then(post=>  dispatch({
                type:UPDATE_POST,
                payload:post
            }));
          ;}