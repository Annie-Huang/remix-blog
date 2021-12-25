import { Outlet } from 'remix';

export default function App() {
  return (
    <html lang='en'>
      <head>
        <title>My Remix Blog</title>
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  );
}
