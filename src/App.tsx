import { Outlet, useParams } from "react-router-dom";
import { useMe } from "./api/hooks/useAuth";

const App = () => {
  const { userId } = useParams();
  const userIdString: string | undefined = userId;

  const { isLoading } = useMe(userIdString);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
