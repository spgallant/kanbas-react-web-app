

export default function StudentTable() {
    return (


        <div id="wd-grade-table" className="table-responsive">
       
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Student Name</th>
                            <th className="text-center">A1 SETUP Out of 100</th>
                            <th className="text-center">A2 HTML Out of 100</th>
                            <th className="text-center">A3 CSS Out of 100</th>
                            <th className="text-center">A4 BOOTSTRAP Out of 100</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-danger ">Jane Adams</td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                        </tr>
                        <tr>
                            <td className="text-danger">Christina Allen</td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                        </tr>
                        <tr>
                            <td className="text-danger">Samreen Ansari</td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                        </tr>
                        <tr>
                            <td className="text-danger">Han Bao</td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                        </tr>
                        <tr>
                            <td className="text-danger">Mahi Sai Srinivas</td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                        </tr>
                        <tr>
                            <td className="text-danger">Siran Cao</td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                            <td><input type="number" className="form-control" defaultValue="100"/></td>
                        </tr>
                    </tbody>
                </table>
          
        </div>

    );

}