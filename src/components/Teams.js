import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";

export const Teams = () => {
  const { response: teamNames, loading } = useTeamNames();

  if (loading === true) {
    return <Loading />;
  }
  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />
      <Outlet />
    </div>
  );
};

export default Teams;
