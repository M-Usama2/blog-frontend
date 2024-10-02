import { useEffect, useState } from "react";
import Post from "../Components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
};

export default IndexPage;
