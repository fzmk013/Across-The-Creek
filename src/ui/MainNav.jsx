/** @format */

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #4b5563;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #1f2937;
    background-color: #f9fafb;
    border-radius: 5px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #9ca3af;
    transition: all 0.3s;
    
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    stroke: #087f5b;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        {/* HOME */}
        <li>
          <StyledNavLink to="/dashboard">
            {/* HOME ICON page*/}
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        {/* BOOKING page*/}
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        {/*CABINS PAGE */}
        <li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        {/* USERS PAGE */}
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        {/* SETINGS PAGE */}
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
