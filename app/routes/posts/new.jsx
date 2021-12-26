import { Link, redirect } from 'remix';

export const action = () => {
  // You can see the action log in terminal, not chrome devtool
  console.log('123');
  return redirect('/posts');
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
