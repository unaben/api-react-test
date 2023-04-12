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
      setUsers(
        resData.map((user: IUserData) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            website: user.website,
          };
        })
      ) as unknown as IUserData[];
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setError("Error fetching users");
      }
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [baseURL]);

  return { users, error } as IApiResponseData;
};

export default useFetch;
