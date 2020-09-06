import React from "react";
import Tabs from "./Tab/Tabs";


function TabExample() {
  return (
    <div>
      <h4>Tabs Demo</h4>
      <div className="tab-test">
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
      </div>
      
    </div>
  );
}

export default TabExample;
