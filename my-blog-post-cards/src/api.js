import axios from "axios";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
