import { INat, IParams, IUsers } from "../interface/interface";

export type UsersContextType = {
  results: IUsers[] | null;
  currentUser: IUsers | null;
  downloadUsers: () => void;
  paginationParams: IParams;
  setPaginationParams: React.Dispatch<React.SetStateAction<IParams>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  nat: INat;
  setNat: React.Dispatch<React.SetStateAction<INat>>;
  getUsersLoading: boolean;
  downloadUsersLoading: boolean;
};
