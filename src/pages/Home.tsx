import { getToken } from "@/lib/utils";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const res = getToken;
  useEffect(() => {
    console.log(getToken());
  }, []);
  return <div>вввв</div>;
};

export default Home;
