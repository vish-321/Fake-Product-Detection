import React,{Fragment,useEffect ,useState} from "react" ;
import queryString from 'query-string';
const DisplayList =({ location })=>{

    const [ scans , setScans ]  = useState ([]);
    const [id, setID] = useState(0);

    const getScans = async ()=>{
        try {
            console.log(id);
            const response = await fetch (`http://localhost:5000/brandedshoes/${id}`);
            console.log(response);
            const jsondata = await response.json();
            console.log(response);
            setScans(jsondata);
            

           //  
        } catch (err) {
            console.error(err.message);
        }
    }
    
    function getDescription(scans) {
        if(scans.length>3){
            return "Product seems counterfeited !" ;
        }
        if(scans.length >0){
            return scans[0].description ;
        }
        return [] ;
    }

    useEffect(() => {

        const { id } = queryString.parse(location.search);
        console.log(id);
        setID(id);
        console.log(id);
       

    }, [location.search]);

    useEffect(() => {
        getScans();
    }, [id]);
   
   
   
    return (
        <Fragment >

            <div className="container alert alert-danger">
               <h1 className="text-center">
                  Puma shoes
               </h1>
              

                <h5 className="text-center text-danger">
                          {getDescription(scans)}
                </h5>   
               

            </div>
            <div className="container alert alert-info">
                <table className="table">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Scan time</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                        { scans.map(scan=>(
                            <tr key = {scan.scan_id}>

                                <td>{scan.user_name} </td>
                                <td> {scan.scan_time}  </td>
                                <td> {scan.location}  </td> 
                                
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
            
            
        </Fragment>
        
    )
};

export default DisplayList ;