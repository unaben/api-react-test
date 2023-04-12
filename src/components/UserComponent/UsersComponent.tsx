import React, { useEffect } from "react";
import UsersList from "../UserList/UsersList";
import { IUserData } from "../models/IUserDataModel";
import useFetch, { IApiResponseData } from "../hooks/useFetch";
import useMultiFilter from "../hooks/useFilterUserData";
import { message } from "../translate/EN";
import "./UsersComponent.css";

interface IUserProps {
  usersData: IUserData[];
  setUsersData: React.Dispatch<React.SetStateAction<IUserData[]>>;
  searchTerm: string;
}

const UsersComponent: React.FC<IUserProps> = ({
  usersData,
  setUsersData,
  searchTerm,
}) => {
  const resData: IApiResponseData = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [multiFilter] = useMultiFilter(usersData, searchTerm);

  useEffect(() => {
    resData.users && setUsersData(resData.users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resData.users]);

  const handleDelete = (id: number) => {
    setUsersData(
      usersData.filter((user) => {
        return user.id !== id;
      })
    );
  };
  return (
    <div style={{ width: "100%" }}>
      {resData.error ? (
        <p>{message.errorText}</p>
      ) : (
        <div className="ms-3 " style={{ width: "100%" }}>
          <div className="user-container">
            <div className="d-flex mb-3 flex-wrap align-items-start">
              {multiFilter.length === 0 ? (
                <h2>{message.noMatchingDetailsFound}</h2>
              ) : (
                multiFilter?.map((user) => (
                  <UsersList
                    key={user.id}
                    user={user}
                    handleDelete={handleDelete}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
