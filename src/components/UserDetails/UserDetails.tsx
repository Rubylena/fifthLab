import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { UsersContextType } from "../../utils/types/types";

const UserDetails = ({ uuid }: { uuid: string }) => {
  const { results } = useContext(UsersContext) as UsersContextType;

  const details = results?.filter((user) => user.login.uuid === uuid);

  return <div>{details?.[0]?.name?.first}</div>;
};

export default UserDetails;
