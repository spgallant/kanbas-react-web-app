import { FaSearch } from "react-icons/fa";

export default function SearchControls() {
    return (
        <div className="row mb-3">

            <div className="col-6">
                    <label htmlFor="wd-search-students" className="form-label fw-bold">
                        Student Names
                    </label>
                    

                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        
                        <input id="search-students" className="form-control"  placeholder="Search Students"/>
                        
                        <button className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"    
                        >
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Jane Adams</a></li>
                            <li><a className="dropdown-item" href="#">Christina Allen</a></li>
                            <li><a className="dropdown-item" href="#">Samreen Ansari</a></li>
                            <li><a className="dropdown-item" href="#">Han Bao</a></li>
                            <li><a className="dropdown-item" href="#">Mahi Sai Srinivas</a></li>
                            <li><a className="dropdown-item" href="#">Siran Cao</a></li>
                        </ul>
                    </div>
                </div>


                <div className="col-6">
                    <label htmlFor="search-assignments" className="form-label fw-bold">
                        Assignment Names
                    </label>
                    
                    
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <input id="search-assignments" className="form-control" placeholder="Search Assignments"/>
                        
                        <button className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">A1 SETUP Out of 100</a></li>
                            <li><a className="dropdown-item" href="#">A2 HTML Out of 100</a></li>
                            <li><a className="dropdown-item" href="#">A3 CSS out of 100</a></li>
                            <li><a className="dropdown-item" href="#">A4 BOOTSTRAP out of 100</a></li>
                        </ul>
                    </div>
                </div>

        </div>



    );
}