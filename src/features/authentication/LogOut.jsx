/** @format */

import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";

import SpinnerMini from "../../ui/SpinnerMini";

import styled from "styled-components";
import { useLogout } from "./useLogout";

const Span = styled.span`
  /* color: #087f5b; */
  margin-left: 10px;
  position: relative;
  bottom: 5px;
  right: 10px;
  font-size: 18px;
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      <Span>Sign out</Span>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
