import React, {useContext, useState} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {AuthContext} from "../context/auth";

function MobileMenuBar() {

    const {user, logout} = useContext(AuthContext)

    const pathname = window.location.pathname
    const path = pathname === '/' ? 'home' : pathname.substr(1)

    const [activeItem, setActiveItem] = useState(path[0].toUpperCase() + path.substr(1))

    const handleItemClick = (e, {name}) => setActiveItem(name)

    return (user) ? (
        (
            <Menu size='massive' color='teal'>
                <Dropdown item text={activeItem}>
                    <Dropdown.Menu>
                        {
                            user.admin === true ?
                                <div>
                                    <Menu.Item
                                        name='DASHBOARD'
                                        active={activeItem === 'DASHBOARD'}
                                        onClick={handleItemClick}
                                        as={Link}
                                        to='/profile'
                                    />
                                    <Menu.Item
                                        name='VIEW_APPOINTMENTS'
                                        active={activeItem === 'VIEW_APPOINTMENTS'}
                                        onClick={handleItemClick}
                                        as={Link}
                                        to='/view_all'
                                    />
                                </div>
                                :
                                <Menu.Item
                                    name={user.username}
                                    active={activeItem === 'user.username'}
                                    onClick={handleItemClick}
                                    as={Link}
                                    to='/'
                                />
                        }
                        <Menu.Item
                            name='Services'
                            active={activeItem === 'Services'}
                            onClick={handleItemClick}
                            as={Link}
                            to='/services'
                        />
                        <Menu.Item
                            name='Bookings'
                            active={activeItem === 'Bookings'}
                            onClick={handleItemClick}
                            as={Link}
                            to='/bookings'
                        />
                        <Menu.Item
                            name='Logout'
                            active={activeItem === 'Logout'}
                            onClick={logout}
                        />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    ) : (
        <Menu size='massive' color='teal'>
            <Dropdown item text={activeItem}>
                <Dropdown.Menu>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/'
                    />
                    <Menu.Item
                        name='Services'
                        active={activeItem === 'Services'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/services'
                    />
                    <Menu.Item
                        name='Bookings'
                        active={activeItem === 'Bookings'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/bookings'
                    />
                    <Menu.Item
                        name='Login'
                        active={activeItem === 'Login'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/login'
                    />
                    <Menu.Item
                        name='Register'
                        active={activeItem === 'Register'}
                        onClick={handleItemClick}
                        as={Link}
                        to='/register'
                    />
                </Dropdown.Menu>
            </Dropdown>
        </Menu>

    )

}

export default MobileMenuBar
