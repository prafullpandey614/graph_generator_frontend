import React from 'react'
import "./home.css"
import Input from './Input'
const Home = () => {
    // const [data, setData] = useState([])
  return (
    <div>
        <div className="container text-center">
            <h2 style={{"fontSize" : "4rem", "fontWeight" : "bold"}}>
                Check Hydro Status
            </h2>
        </div>
        
        <div className="container input-box ">
            
            <br />

            <h3 className='text-center'>Input Chemical properties here</h3>
            <br />
            <div className="rw"> <Input placeholder={"Ca+"}/> <br />
          <Input placeholder={"Ca+"}/> <br /> 
          {/* <br /> */}
          <Input placeholder={"Ca+"}/> <br />

          <Input placeholder={"Ca+"}/><br />
          <Input placeholder={"Ca+"}/> <br />
          </div>
          <div className="rw">
          <Input placeholder={"Ca+"}/> <br />
          <Input placeholder={"Ca+"}/> <br /> 
          {/* <br /> */}
          <Input placeholder={"Ca+"}/> <br />

          <Input placeholder={"Ca+"}/><br />
          <Input placeholder={"Ca+"}/> <br />
          
          </div>
          <div className="rw">
          <button type="button" class="btn btn-success">Submit</button>
          </div>
          <div className="rw"> <Input placeholder={"Ca+"}/> <br />
          <Input placeholder={"Ca+"}/> <br /> 
          {/* <br /> */}
          <Input placeholder={"Ca+"}/> <br />

          <Input placeholder={"Ca+"}/><br />
          <Input placeholder={"Ca+"}/> <br />
          </div>
          <div className="rw">
          <Input placeholder={"Ca+"}/> <br />
          <Input placeholder={"Ca+"}/> <br /> 
          {/* <br /> */}
          <Input placeholder={"Ca+"}/> <br />

          <Input placeholder={"Ca+"}/><br />
          <Input placeholder={"Ca+"}/> <br />
          
          </div>
          <div className="rw">
          <button type="button" class="btn btn-success">Submit</button>
          </div>
          
         
        </div>
        
    </div>
  )
}

export default Home