import './App.css';
import data from './input.json';
// import {useState} from 'react';

import Form from 'react-bootstrap/Form';



function App() {

    // console.log(data);

    // const [object , setObject] = useState({});
    // console.log("newly created object", object);
    let obj = {};
    let obj2 = {};
    let farr = [data];
    const keys = [];
    const values = [];



    for(let key in data){
        keys.push(key);
        values.push(data[key]);
        
    }

    for(let key in data){
        obj = {...obj, [key]:false};
        // console.log("initialsed data", obj)
        obj2 = {...obj2 , [key]: 'NA'};
    }

    




    const toggleClick = (key) =>{
        // console.log("toggle clicked key", key)
        // if(object.key === true || object.key===undefined){
        //     setObject({
                
        //         key : false
        //     })
        // }else{
        //     setObject(
        //         {
        //             key : true
        //         }
        //     )
        // }
        
        if(obj[key]===true) obj[key]=false;
        else obj[key] = true;
        // console.log(obj);        
           
    }

    const remarkupdate = (e,key) =>{
        // console.log(key)
        // console.log(e.target.value);
        // obj2 = {...obj2, [key]:}
        let value = e.target.value;

        obj2 = {...obj2, [key]:value};
        // console.log("object 2", obj2);
        
    }

    const onsubmit = () =>{
        farr.push(obj);
        farr.push(obj2);
        // console.log('inside in submit funct', farr);
        const fileData = JSON.stringify(farr);
        var blob = new Blob([fileData]);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "output.json";
        link.href = url;
        link.click();
    }

    return (
        <div className="App">

            <div className="container">    

            <div className="keycontainer">
                {
                    keys.map((key)=>{
                        return(
                            <div className="key">
                                <h3>{key}</h3>
                            </div>
                        )
                    })
                }
            </div>

            <div className="valuecontainer">
                {
                    values.map((value)=>{
                        return(
                            <div className="value">
                                <h3>{value}</h3>
                            </div>
                        )
                    })
                }
            </div>


            <div className="togglecontainer">
                {
                    keys.map((key)=>{
                        return(
                            <div className="switch">
                                {/* <div class="toggle" id="toggle">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" value="false" onclick="tgswitch()" type="checkbox" role="switch" id="toggleaddress"/>
                                    </div>
                                </div> */}

                                <Form>
                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"

                                        // label="Check this switch"
                                        onClick={()=>toggleClick(key)}
                                    />
                                </Form>

                                {/* <input type='checkbox' className='switch' onClick={()=>toggleClick(key)}/> */}
                            </div>
                        )
                    })
                }
            </div>


            {/* Remark Container */}

            <div className="remarkcontainer">
                {
                    keys.map((key)=>{
                        return(
                            <div className="remark">
                                <input type="text"  placeholder='remark' onChange={(e)=>remarkupdate(e,key)}/>

                            </div>
                        )
                    })
                }
            </div>







            {/* <button style={{width: "5rem", height: "2rem"}} onClick={onsubmit}>Submit</button> */}




            
        
            {/* <h1>Hello</h1> */}
            </div>
            <button style={{width: "5rem", height: "2rem"}} onClick={onsubmit}>Submit</button>
        </div>
        
    );
}

export default App;
