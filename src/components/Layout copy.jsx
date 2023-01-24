import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          border: '1px solid black',
        }}
      >
        <h1 className='text-3xl font-bold'>Firebase Todo |</h1>

        <Link to='/'>Home</Link>
        <Link to='/account'>Account</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
