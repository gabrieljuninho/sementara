import SortDropdown from "./SortDropdown";
import CreateByDropdown from "./CreateByDropdown";
import PagesDropdown from "./PagesDropdown";
import DateDropdown from "./DateDropdown";

const SearchDropdown = () => {
  return (
    <div className="pointer-events-auto relative z-[1]">
      <div>
        <div className="fixed left-0 top-0 h-screen w-screen"></div>
        <SortDropdown />
        <CreateByDropdown />
        <PagesDropdown />
        <DateDropdown />
      </div>
    </div>
  );
};

export default SearchDropdown;
