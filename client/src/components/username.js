import React,{Fragment,useEffect ,useState} from "react" ;
import queryString from 'query-string';


const EnterButton =({ location })=>{

    const [Name , setName] =useState("");
    const [Location , setLocation] =useState("");
    const [id, setId] = useState(0);
    
    const onSubmitForm =  async e =>{
            e.preventDefault() ;
            if(Name.length === 0 || Location.length ===0 ){
                alert("Location or Name can't be empty!");
                return ;
            }
            try {
                const body ={Name ,Location} ;

                console.log(body);
                const response =await fetch (`http://localhost:5000/brandedshoes/${id}`,{
                    method : "POST" ,
                    headers : {"Content-Type" : "Application/json"},
                    body : JSON.stringify(body)
                });
              
                window.open(`/display?id=${id}`, "_self") ;
            } catch (err) {
                console.error(err.message);
            }
    }

    useEffect(() => {
        const id = location.pathname.split('/');
        console.log(id);
        setId((Number)(id[2]));
    },[location.pathname]);

   
    return (

        <Fragment >

            <div className="container alert alert-success my-4">
                <form  onSubmit={onSubmitForm}>
                    <div class="form-group">
                        <label className="align-items-center">Enter Your Name</label>
                        <input type="text" class="form-control"   placeholder="Enter Name" value={Name}  
                        onChange={e=>setName(e.target.value)}/>
                        
                    </div>
                    <div class="form-group">
                        <label className="align-items-center">Enter Your Current Location</label>
                        <input type="text" class="form-control"   placeholder="Enter Location" value={Location}  
                        onChange={e=>setLocation(e.target.value)}/>
                        
                    </div>
                    
                    <button  type="submit" class="btn btn-primary " >
                        Submit
                    </button>
                </form>
            </div>

        </Fragment>
        
    )
};

export default EnterButton ;