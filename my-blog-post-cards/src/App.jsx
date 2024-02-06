import { useEffect, useState } from "react";
import { fetchPosts } from "./api";

import BlogCard from "./BlogCard";

import "./style.scss";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      console.log(JSON.stringify(data));
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="row u-equal-height u-clearfix">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default App;
