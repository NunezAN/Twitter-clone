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
          key={post.id}
          displayName={post.data.displayName}
          userName={post.data.userName}
          verified={post.data.verified}
          text={post.data.text}
          image={post.data.image}
          avatar={post.data.avatar}
        />
      ))}
    </div>
  );
};

export default Feed;
