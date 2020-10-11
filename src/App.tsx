import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Prejunior from "./Components/Prejunior/Prejunior";
import Junior from "./Components/Junior/Junior";
import {Route} from 'react-router-dom';
import {JuniorPlus} from "./Components/Junior+/JuniorPlus";


function App() {

    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    let sorted = users.sort((a, b) => a.name > b.name ? 1 : -1);

    console.log(sorted);

    return (<div className={'AppWrap'}>
            <div className={'navWrap'}>
                <Navbar/>
            </div>
            <div className={'contWrap'}>
                <Route path='/Prejunior' render={() => <Prejunior/>}/>
                <Route path='/Junior' render={() => <Junior/>}/>
                <Route path='/JuniorPlus' render={() => <JuniorPlus/>}/>
            </div>
        </div>
    );
}


export default App;
