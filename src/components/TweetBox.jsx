import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const TweetBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {

    const post = {
      avatar: "https://pbs.twimg.com/media/CmpIszlVMAAK1MK.jpg:large",
      displayName: "Test User",
      image: formData.image,
      text: formData.tweet,
      userName: "TestUser",
      verified: false,
    };
    await addDoc(collection(db, "posts"), post);

    reset();
  }


  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit(onSubmit)} className="tweetBox__form">
        <div className="tweetBox__form--input--container">
          <Avatar src="https://pbs.twimg.com/media/CmpIszlVMAAK1MK.jpg:large"></Avatar>
          <input
            className="tweetBox__form--input"
            placeholder="What's happening?"
            type="text"
            {...register("tweet", { required: true })}
          />
          {errors.tweet && <p className="tweetBox__form--error">Tweet is required</p>}
        </div>
        <input
          className="tweetBox__form--Imageinput"
          placeholder="Optional: Enter image URL"
          type="text"
          {...register("image", { required: false})}
        />
        <div className="tweetBox__form--button--container">
          <Button type="submit" className="tweetBox__btn">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
