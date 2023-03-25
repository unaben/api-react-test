import { useState, useEffect } from "react";
import { IUserData } from "../models/IUserDataModel";

export type IApiResponseData = {
  users: IUserData[];
  error: string | null;
};

export const useFetch = (baseURL: string): IApiResponseData => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async () => {
    try {
      const responce = await fetch(baseURL);
      const resData = await responce.json();
      setUsers(resData) as unknown as IUserData[];
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setError(error.message);
      }
    }
  };
  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { users, error } as IApiResponseData;
};

export default useFetch;
