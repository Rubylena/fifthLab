import React, { createContext, useCallback, useEffect, useState } from "react";
import axiosClient from "../api/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { INat, IUsers } from "../utils/interface/interface";
import { UsersContextType } from "../utils/types/types";
import { countries } from "../utils/utils";

const UsersContext = createContext<UsersContextType | null>(null);

const UsersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [results, setResults] = useState<IUsers[] | null>(null);
  const [currentUser, setCurrentUser] = useState<IUsers | null>(null);
  const [paginationParams, setPaginationParams] = useState({
    page: 1,
    results: 5,
  });
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState<INat>(countries[0]);
  const [getUsersLoading, setGetUsersLoading] = useState(false);
  const [downloadUsersLoading, setDownloadUsersLoading] = useState(false);
  const exclusions = "exc=dob,id"; // id is always empty

  const getCurrentUser = useCallback(async () => {
    try {
      const response = await axiosClient.get(`?${exclusions}`);

      if (response?.data?.error) {
        throw new Error();
      }

      setCurrentUser(response?.data?.results[0]);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  }, []);

  const getMultipleUsers = useCallback(async () => {
    setGetUsersLoading(true);
    try {
      const response = await axiosClient.get(
        `?${exclusions}${
          gender ? `&gender=${gender}` : "&seed=8843f31a07f9ee34"
        }${nat?.value && `&nat=${nat?.value}`}`,
        { params: paginationParams }
      );

      if (response?.data?.error) {
        throw new Error();
      }

      setResults(response?.data?.results);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setGetUsersLoading(false);
    }
  }, [paginationParams, gender, nat?.value]);

  const downloadUsers = async () => {
    setDownloadUsersLoading(true);
    try {
      const response = await axiosClient.get(
        `?${exclusions}${
          gender ? `&gender=${gender}` : "&seed=8843f31a07f9ee34"
        }${nat?.value && `&nat=${nat?.value}`}&format=csv&dl`,
        { params: paginationParams }
      );

      if (response?.data?.error) {
        throw new Error();
      }

      const fileUrl = URL.createObjectURL(new Blob([response?.data]));
      const a = document.createElement("a");
      a.href = fileUrl;
      a.download = "users.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data);
      } else {
        toast.error("An unknown error occurred.");
      }
    } finally {
      setDownloadUsersLoading(false);
    }
  };

  useEffect(() => {
    getMultipleUsers();
    getCurrentUser();
  }, [getMultipleUsers, getCurrentUser]);

  return (
    <UsersContext.Provider
      value={{
        results,
        currentUser,
        downloadUsers,
        paginationParams,
        setPaginationParams,
        gender,
        setGender,
        nat,
        setNat,
        getUsersLoading,
        downloadUsersLoading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
