import { CardData } from "../../constant/CardData";
import { TopCategoriesData } from "../../constant/TopCategoriesData";
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
              {CardData.map((items, index) => (
                <Cards
                  cardImage={items.image}
                  cardHeading={items.cardHeading}
                  cardSubheading={items.cardSubheading}
                  peopleImage={items.peopleImage}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="firstRightContainer">
            <h3 className="head2">Top Categories</h3>
            <div className="topCategories">
              {TopCategoriesData.map((items, index) => (
                <TopCategories
                  number={items.number}
                  image={items.image}
                  name={items.name}
                  position={items.position}
                  key={index}
                />
              ))}
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
