import React from "react";

function Paragraph() {
    return (
        <div className="para">
            <div>
              <h1><u>Paragraphe concernig React Form</u> </h1>
            </div>
            <div>
                <p> In ReactJs Forms handling are bit different than it's used to be in html.
                    to start with there is two ways of handling froms in react which include
                    controlled components and uncontrolled components but the most recommended
                    is "controlled component".when a form data is handled by a React component
                    it's called controlled component and a form data handled by the DOM itself
                    is uncontrolled component . In React, mutable state is typically
                    kept in the state property of components, and only updated with setState()<br/>
                    -they maintain their own state and update it based on user input.<br/>
                    - a "textarea", uses a value attribute so that it can be written very similarly
                    to a form that uses a single-line input<br/>
                    - a "select", uses a value attribute on the root select tag instead of a selected attribute
                </p>  <i>NB</i>:
                 <p>  - you can pass an array into the value attribute, allowing you to select multiple options in a select tag.
                    - the "file input tag" is an uncontrolled component in React because its a read-only<br/>
                    <u>Handling Multiple Inputs:</u><br/>
                    when you need to handle multiple controlled input elements you can add a name attribute
                    to each element  and let the handler function choose what to do based on the value of even.target.name<br/>
                    <u>Controlled Input Null Value:</u><br/>
                    specifying the value prop on a controlled component prevents the user from changing the input unless you desire so.
                    if you've specified a value but the input is still editable you may have accidentally set value to undefined or null.
                </p>
            </div>
        
        </div>
    )
}

export default Paragraph;