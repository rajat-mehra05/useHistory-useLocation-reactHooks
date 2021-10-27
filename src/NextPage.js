import { useHistory, useLocation } from "react-router-dom";

const NextPage = () => {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <h1> NextPage </h1>
      <p> This is {location.pathname} </p>
      <button onClick={handleClick}> Go Home </button>
    </>
  );
};

export default NextPage;
