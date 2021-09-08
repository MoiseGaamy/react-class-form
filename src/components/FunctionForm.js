import React, { useState } from "react";

function FunctionForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
    };

    return (

     <div>
            <h1>FunctionForm</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="name" value={name} onChange={handleName} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input  type="email" name="email" className="form-control" placeholder="email" value={email} onChange={handleEmail} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input  type="password" name="password" className="form-control" placeholder="password" value={password} onChange={handlePassword} />
                </div>
                <button className="btn btn-primary">Submit</button> 
            </form>
     </div>
 )   
}
export default FunctionForm;
