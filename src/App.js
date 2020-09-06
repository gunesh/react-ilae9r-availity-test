import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import FieldExample from './Component/FieldExample'
import CheckboxExample from './Component/CheckboxExample'
import DateExample from './Component/DateExample'

export default function App() {
  return (
    <>
    <FieldExample />
     <CheckboxExample />
     <DateExample />
    </>
  );
}
