/** @format */

import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Check in</div>
      <div>Check Out</div>
      <div>Stay durations</div>
      <div>Sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
