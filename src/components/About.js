import React from "react";
import { Collapsible, CollapsibleItem, Icon, } from "react-materialize";

const About = () => {
  return (
    <div className="about">
      <Collapsible accordion>
        <CollapsibleItem
          expanded
          header="THE TEAM"
          
          node="div"
        >
          Here we have many movies that you love
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Nations"
          
          node="div"
        >
          {" "}
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Daily news"
          
          node="div"
        ></CollapsibleItem>
      </Collapsible>
    </div>
  );
};

export default About;
