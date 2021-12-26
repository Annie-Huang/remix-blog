import { Link, redirect } from 'remix';
import { db } from '~/utils/db.server';

export const action = async ({ request }) => {
  // You can see the action log in terminal, not chrome devtool
  // console.log('123');

  const form = await request.formData();
  // You can see it "log NodeFormData { _fields: { title: [ 'fewaf' ], body: [ 'fewaf' ] } }" in the terminal
  // console.log(form);
  const title = form.get('title');
  const body = form.get('body');
  const fields = { title, body };
  // console.log(fields); // prints out: { title: 'fewafew', body: 'fewaf' }

  // submit to database
  const post = await db.post.create({ data: fields });

  return redirect(`/posts/${post.id}`);
};

const NewPost = () => {
  return (
    <>
      <div className='page-header'>
        <h1>New Post</h1>
        <Link to='/posts' className='btn btn-reverse'>
          Back
        </Link>
      </div>
      <div className='page-content'>
        <form action='' method='post'>
          <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' />
          </div>
          <div className='form-control'>
            <label htmlFor='body'>Post Body</label>
            <textarea name='body' id='body' />
          </div>
          <button type='submit' className='btn btn-block'>
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
