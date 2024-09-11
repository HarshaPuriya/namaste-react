//using react to create element
//{} - inside it we give attributes to our tag
//heading is react element. The below line create object
const headingOne = React.createElement('h1', {id: 'parent'}, [
    React.createElement('h2', {id: 'child'}, "I am child"), 
    React.createElement('h2', {id: 'child2'}, "I am child2")])

const heading = React.createElement('h1', {}, "Hello World from React!");
//using react dom to create rrot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(headingOne);