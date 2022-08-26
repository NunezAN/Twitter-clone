import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = collection(db, "posts");
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((elem) => ({ id: elem.id, data: elem.data() }))
      );
    });
  }, []);

  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header--title">Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.data.displayName}
          userName={post.data.userName}
          verified={post.data.verified}
          text={post.data.text}
          image={post.data.image}
          avatar={post.data.avatar}
        />
      ))}
      {/* <Post
        displayName="Alex Nunez"
        userName="HONCHO"
        verified
        text="This is a post"
        image="https://media4.giphy.com/media/h2NxCschQ81ltiL9HV/giphy.gif?cid=ecf05e470tcujvr3u0hx7zm1nneh06zqmicr0eawg0kint1x&rid=giphy.gif&ct=g"
        avatar="https://pbs.twimg.com/media/CmpIszlVMAAK1MK.jpg:large"
      /> */}
    </div>
  );
};

export default Feed;
