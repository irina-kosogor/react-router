import { useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  const currentLink = location.pathname.substring(1);
  const breadCrumbs = currentLink.split("/");

  console.log(breadCrumbs[0]);

  return (
    <div className="container">
      <span>You are here: </span>
      {breadCrumbs.map((link) => {
        return breadCrumbs[0] === "" ? (
          "home"
        ) : (
          <span key={link}>
            <a href={`/${link}`}>{link + "/"}</a>
          </span>
        );
      })}
    </div>
  );
}
