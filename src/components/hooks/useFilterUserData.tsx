import { IUserData } from "../models/IUserDataModel";
import { keysOf } from "../helper/Keysof";

// function keysOf<T extends Object>(obj: T): Array<keyof T> {
//   return Array.from(Object.keys(obj)) as any;
// }

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


