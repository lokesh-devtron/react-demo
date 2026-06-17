import "./App.css";
import InfoCard from "./components/InfoCard";

function App() {
  const buildVersion = process.env.REACT_APP_VERSION || "1.0.0";

  return (
    <div className="container">
      <h1>🚀 Devtron React Demo Application</h1>
      <p>This application is deployed using Kubernetes and Devtron.</p>

      <div className="cards">
        <InfoCard title="Environment" value="Development" />
        <InfoCard title="Version" value={buildVersion} />
        <InfoCard title="Platform" value="Kubernetes" />
      </div>

      <button onClick={() => alert("Devtron deployment is working!")}>
        Test Application
      </button>
    </div>
  );
}

export default App;