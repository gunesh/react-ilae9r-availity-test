import useContext from "react";
import { myStoreContext } from "../store";

export const useMyStore = () => useContext(myStoreContext);
