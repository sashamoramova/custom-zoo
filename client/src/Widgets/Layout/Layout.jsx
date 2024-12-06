
import Navigation from '../Navigate/Navigation';
import { Outlet } from 'react-router-dom';
import Foot from '../Footer/Foot';

function Layout( user, setUser) {
    return (
        <>
            <Navigation user={user} setUser={setUser}  />
            <Outlet user={user} setUser={setUser}  />
            <Foot />
        </>
    );
}

export default Layout;