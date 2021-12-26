import { Link, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';

/*// Mimic making a api call in server side and get the data from the frontend.
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
};*/

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    }),
  };
  return data;
};

const PostItems = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <div className='page-header'>
        <h1>Posts</h1>
        <Link to='/posts/new' className='btn'>
          New Post
        </Link>
      </div>
      <ul className='posts-list'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostItems;
