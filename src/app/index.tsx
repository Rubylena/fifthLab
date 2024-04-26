import { useLoaderData } from "react-router-dom";
import { IUsers } from "../interface";

const Home = () => {
  const results = useLoaderData() as IUsers[];

  return (
    <div>
      {results?.map((user: IUsers) => (
        <div key={user.login.uuid}>
          <p>{user.name.first}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
