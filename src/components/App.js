import { lazy, Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import Loading from "./Loading";
import Navbar from "./Navbar";
const Home = lazy(() => import("./Home"));
const Teams = lazy(() => import("./Teams"));
const Players = lazy(() => import("./Players"));
const TeamPage = lazy(() => import("./TeamPage"));
const Player = lazy(() => import("./Player"));
const Team = lazy(() => import("./Team"));
const Articles = lazy(() => import("./Articles"));
const Article = lazy(() => import("./Article"));

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        {
          path: ":teamId",
          element: <Team />,
        },
        {
          path: "",
          element: <div className="sidebar-instruction">Select a team</div>,
        },
      ],
    },
    {
      path: "/players",
      element: <Players />,
      children: [
        {
          path: ":playerId",
          element: <Player />,
        },
        {
          path: "",
          element: <div className="sidebar-instruction">Select a player</div>,
        },
      ],
    },
    {
      path: "/:teamId",
      element: <TeamPage />,
    },
    {
      path: "/:teamId/articles",
      element: <Articles />,
      children: [
        {
          path: ":articleId",
          element: <Article />,
        },
        {
          path: "",
          element: <div className="sidebar-instruction">Select an article</div>,
        },
      ],
    },
  ]);
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <BreadCrumbs />
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
}
