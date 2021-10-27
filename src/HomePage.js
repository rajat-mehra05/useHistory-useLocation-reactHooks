import { useHistory, useLocation } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    history.push("/next");
  };

  return (
    <>
      <h1> HomePage </h1>
      <p> This is {location.pathname} </p>
      <button onClick={handleClick}> Go Next </button>
    </>
  );
};

export default HomePage;
