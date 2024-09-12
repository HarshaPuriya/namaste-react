import React from "react"
import ReactDOM from "react-dom/client"
//using react to create element
//{} - inside it we give attributes to our tag
//heading is react element. The below line create object
const headingOne = React.createElement('h1', {id: 'parent'}, [
    React.createElement('h2', {id: 'child'}, "I am child"), 
    React.createElement('h2', {id: 'child2'}, "I am child2")])

const heading = React.createElement('h1', {}, "Hello World from React!");
//using react dom to create rrot
const root = ReactDOM.createRoot(document.getElementById('root'));



//JSX - HTML-like or XML-like syntax

const jsxHeading = <h1 className="heading" tabIndex="5">Namaste React using JSX</h1>

//React Functional Component

const title = (
    <h1 className="head">I am heading</h1>
)
const HeadingComponent = () => {
    return <h1> React Functional Component</h1>
}

//component composition - component inside component
const HeadingComponent2 = () => (
    <div id="container">
        {HeadingComponent()}
        {title}
        <HeadingComponent></HeadingComponent>
        <HeadingComponent/>
    <h1> React Functional Component</h1>
    </div>
)


root.render(<HeadingComponent2/>);