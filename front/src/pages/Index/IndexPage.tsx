import { Navigate } from "react-router-dom";
import { Page } from "../../Router";


const IndexPage: Page = () => {
  return <Navigate to="/" replace />;
};

export default IndexPage;
