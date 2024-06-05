import { LuFilter } from "react-icons/lu";

export default function FilterButton() {
    return (
        <div className="mb-3">
             <button id="wd-filter-btn" className="btn btn-lg btn-secondary me-1">
                        <LuFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                        Apply Filters
                </button>

        </div>
    );

}