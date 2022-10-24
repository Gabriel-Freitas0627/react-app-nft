import Cards from "./components/Cards";
import TopCategories from "./components/TopCategories";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <div className="left">
          <div className="firstLeftContainer">
            <h1 className="head1">Welcome to SolBuzz</h1>
          </div>
          <div className="secondLeftContainer">
            <h3 className="secondConHeading">Explore</h3>
            <div className="cards">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="firstRightContainer">
            <h3 className="head2">Top Categories</h3>
            <div className="topCategories">
              <TopCategories num='1' />
              <TopCategories num='2' />
              <TopCategories num='3' />
            </div>
          </div>
          <div className="secondRightContainer">
            <h3 className="head2">Recent Activity</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
