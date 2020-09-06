import {} from "mobx-react-lite";
import { observable } from "mobx";
export class MyStore {
  myFirstVar = "";
  listItem = [];
  itemDetails = {};
  constructor() {}
  submitMyForm(form) {
    console.log(form);
  }
}
