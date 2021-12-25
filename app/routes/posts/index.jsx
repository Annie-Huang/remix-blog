import { useLoaderData } from 'remix';

export const loader = () => {
  // loader runs in the server, you can see it log in terminal, not chrome devtool
  console.log('123');

  return {};
};

const PostItems = () => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default PostItems;
