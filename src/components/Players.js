import { useLocation, useSearchParams, Outlet } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Loading from "./Loading";
import { Sidebar } from "./Sidebar";

export const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const team = searchParams.get("teamId");
  const { response: names, loading } = usePlayerNames(team);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={names} />
      <Outlet />
    </div>
  );
};

export default Players;
