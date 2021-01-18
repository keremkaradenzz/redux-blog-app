import React,{useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {PostAuthor} from './PostAuthor';
import {TimeAgo} from './TimeAgo';
import {ReactionButtons} from './ReactionButtons';
import {selectAllPosts} from './postsSlice'
import {fetchPosts} from './postsSlice'
export const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.posts.status);
  const postError = useSelector(state => state.posts.error);
  useEffect(() =>{
    if(postStatus === 'idle')
    {
      dispatch(fetchPosts());
    }

  },[postStatus,dispatch])
  const renderedPosts = orderedPosts.map((item) => (
    <article className="post-excerpt" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content.substring(0, 50)}</p>
     
      <div> <PostAuthor userId={item.user}/>
      <TimeAgo timestamp={item.date}></TimeAgo></div>
      <Link to={`/posts/${item.id}`} className="button muted-button">
        View Post
      </Link>
      <ReactionButtons post={item}></ReactionButtons>
    </article>
  ))
  let content;
  if(postStatus === 'loading')
  {
    content = <div> loading... </div>
  }
  else if(postStatus === 'successed')
  {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((item) => (
      <article className="post-excerpt" key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.content.substring(0, 50)}</p>
       
        <div> <PostAuthor userId={item.user}/>
        <TimeAgo timestamp={item.date}></TimeAgo></div>
        <Link to={`/posts/${item.id}`} className="button muted-button">
          View Post
        </Link>
        <ReactionButtons post={item}></ReactionButtons>
      </article> ))
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}
