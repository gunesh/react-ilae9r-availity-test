import createContext from "react";

import {MyStore} from './MyStore'

export const myStore = createContext(new MyStore())