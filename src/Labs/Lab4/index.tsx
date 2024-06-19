import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";


export default function Lab1() {

    function sayHello() {
        alert("Hello");
    }

    return (
        <div id="wd-lab4" className="container-fluid">
            <h2>Lab 4</h2>
            <ClickEvent/>
            <PassingDataOnEvent/>

            <PassingFunctions theFunction={sayHello} />

            <EventObject/>
            <Counter/>
        </div>
    );
}