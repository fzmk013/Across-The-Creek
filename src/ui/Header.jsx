/** @format */

import styled from "styled-components";
import LogOut from "../features/authentication/LogOut";

/** @format */
const Styledheader = styled.header`
  background-color: #fff;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid #f3f4f6;
`;
function Header() {
  return (
    <Styledheader>
      <LogOut />
    </Styledheader>
  );
}

export default Header;
