import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"this is heading");

console.log(heading);
// this will give output on console as object after running command npm start 

// WRITING H1 USING JSX
const jsxHeading = <h1 id="jsxheading">this is a h1 tag</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)
//this will give again same result which is object as output on console 

//jsx syntax are transformed into javascript ie React.createElement() by BABEL as javascript not understand jsx syntax 


// 2 types of Components
//class based 
// functional components--> normal javascript function which return jsx Example,
const HeadingComponent = ()=>{
    return <h1 className="Heading">this is functional components</h1> 
}
 const demo = ReactDOM.createRoot(document.getElementById("demo"))
demo.render(<HeadingComponent/>)


//Component Composition

const Title = ()=>(
        <h1 className="title">this is Title</h1> 
);

const Compostion = ()=>(
        <div id = "container">
                <Title/>
         {/* here title is placed which in another component and this process is called component compostion */}
        <h1 className="Compostion">this is Compostion</h1> 
        </div>
);

const demo1 = ReactDOM.createRoot(document.getElementById("demo1"))
demo1.render(<Compostion/>)


// Writing Expression inside JSX by using {expresssions}
const num = 100;
const tag = <h1>this is a h1 tag and it will be placed inside the jsx by using the {}</h1>
const Expression = ()=>(
        <div id = "expressions">
            <h1>{num}</h1>
            {tag}
            <h1>{console.log("hello this is expression inside jsx")}</h1>     
        </div>
);
const demo2 = ReactDOM.createRoot(document.getElementById("demo2"))
demo2.render(<Expression/>)