import React from 'react'
import Logo from './components/logo/Logo.component'
import NavItem from './components/nav/NavItem.component'
import SearchBar from './components/searchBar/SearchBar.component'
import { HeaderContainer } from './Header.styles'


const Header = () => (
    <HeaderContainer>
        <Logo />
        <NavItem title = 'Movies'/>
        <NavItem title = 'TV Shows'/>
        <NavItem title = 'People'/>
        <SearchBar />
    </HeaderContainer>
)

export default Header