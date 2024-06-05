import ButtonControls from "./ButtonControls";
import StudentTable from "./StudentTable";
import SearchControls from "./SearchContols";
import FilterButton from "./FilterButton";


export default function Grades() {
    return (
        <div className="ms-5">
            <br />
            <ButtonControls/>
       
            <SearchControls/>
            <FilterButton/>
     
            <StudentTable/>
          
        </div>
    );

}