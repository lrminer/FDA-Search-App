import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import DrugSearch from "./components/DrugSearch";
function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <h1>Home</h1>
        </Tab>
        <Tab eventKey="profile" title="Drug Search">
          <DrugSearch />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <h1>Contact</h1>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
