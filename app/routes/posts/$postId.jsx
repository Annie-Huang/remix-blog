import { useParams, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';

export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error('Post not found');

  const data = { post };
  return data;
};

const Post = () => {
  // const params = useParams();
  const { post } = useLoaderData();

  return (
    <div>
      {/*<h1>Post {params.postId}</h1>*/}
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;
