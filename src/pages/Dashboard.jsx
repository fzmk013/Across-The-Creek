/** @format */

import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      {" "}
      <div type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
