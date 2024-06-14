import { Link } from "react-router-dom";
import { Page } from "../../Router";

const Error404Page: Page = () => {
  return (
    // TODO переписать когда появится в макетах
    <>
      <p>404 Not Found</p>
      <Link to="/">На главную</Link>
    </>
  );
};

export default Error404Page;
