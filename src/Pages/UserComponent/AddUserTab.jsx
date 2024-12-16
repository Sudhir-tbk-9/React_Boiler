import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LOCALIZATION from "./Tabs/template/Tab2/LOCALIZATION";
import "bootstrap/dist/css/bootstrap.min.css";
import OAuth from "./Tabs/template/Tab3/OAuth";
import Section1 from "./Tabs/template/Tab4/Section1";
import CheckBox from "./Tabs/template/Tab1/CheckBox";

function AddUserTab(props) {
  let newuser = props.newuser;
  return (
    <>
      <Tabs id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="One" title="Access Right">
          <div>
            <CheckBox newuser={newuser} />
          </div>
        </Tab>

        <Tab eventKey="Two" title="Prefrences">
          <LOCALIZATION />
        </Tab>
        <Tab eventKey="Three" title="OAUTH">
          <OAuth />
        </Tab>
        <Tab eventKey="Four" title="CALENDAR">
          <Section1 />
        </Tab>
      </Tabs>
    </>
  );
}

export default AddUserTab;
