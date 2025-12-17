import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//to fetch the data

export const FetchPosts = async (pageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

//to fetch indv data
export const FetchInvPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// Pagination
// https://jsonplaceholder.typicode.com/posts?_start=1&_limit=3

//delete post
export const deletePost = async (id) => {
  return api.delete(`/posts/${id}`);
};

// update post
export const updatePost = async (id) => {
  return api.patch(`/posts/${id}`, { title: "Updated Title" });
};

// Infinite Scrolling
export const FetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};
