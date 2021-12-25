import { useLoaderData } from 'remix';

// Mimic making a api call in server side and get the data from the frontend.
export const loader = () => {
  // loader runs in the server, you can see it log in terminal, not chrome devtool
  // console.log('123');

  const data = {
    posts: [
      { id: 1, title: 'Post 1', body: 'This is a test post' },
      { id: 2, title: 'Post 2', body: 'This is a test post' },
      { id: 3, title: 'Post 3', body: 'This is a test post' },
    ],
  };
  return data;
};

const PostItems = () => {
  const { posts } = useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default PostItems;
