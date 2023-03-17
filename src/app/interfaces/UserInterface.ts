import {AddressInterface} from "./AddressInterface";

export interface UserInterface {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  address: AddressInterface
}
