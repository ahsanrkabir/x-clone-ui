import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
  return (
    <div className="">
      <Search />
      <PopularTags />
      <Recommendations />
    </div>
  );
};

export default RightBar;
