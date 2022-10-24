import React from "react";
import "./index.css";
const Layout = React.lazy(() => import("./components/layout"));
const DashBoard = React.lazy(() => import("./components/dashboard"));

function App() {
  return (
    <Layout>
      <DashBoard />
    </Layout>
  );
}

export default App;
