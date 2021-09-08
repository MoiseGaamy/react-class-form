import React from "react";


class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {name:"",email:"",password:""}
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail(e) {
        this.setState({
            email:e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ name: "", email: "", password: "" });
    }
    render() {
        return (
            <div className="CF">
                <h1>Class Form</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="write your name" value={this.state.name} onChange={(e)=>this.handleName(e)}/>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" placeholder="write your email" value={this.state.email} onChange={(e)=>this.handleEmail(e)}/>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="password" value={this.state.password} onChange={(e)=>this.handlePassword(e)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default ClassForm;