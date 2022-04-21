import {NavLink, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
  <>
<div className='navbar'>
    <NavLink to={'counters'}>
        <button>Counters</button>
    </NavLink>
    <NavLink to={'todos'}>
        <button>Todos</button>
    </NavLink>
</div>
    <div className='main'><Outlet /></div>
  </>
    )
}

export {MainPage}