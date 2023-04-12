import { IUserData } from "../models/IUserDataModel";
import { keysOf } from "../helper/Keysof";


const useMultiFilter = (contactData: IUserData[], value: string) => {
  const multiFilter = contactData.filter((user) => {
    return keysOf(user).some((key) => {
      return user[key]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
  });

  return [multiFilter];
};

export default useMultiFilter;


