import React, {useState} from 'react';
import styles from './Greet.module.css'
import InputNya from "../InputNya/InputNya";
import {v1} from "uuid";

type greetNamesArrayType = {
    id: string
    name: string
}


type NamesType = {
    id: string,
    name: string
}

function Greet() {

    let [error, setError] = useState('')

    let [greetNames, setGreetNames] = useState<Array<NamesType>>([])

    function sayHello(name: string) {
        name = name.replace(/^\s+|\s+$/g, '')
        if (!name) {
            setError('Please enter name')
        } else {
            let correctedName = name[0].toUpperCase() + name.slice(1)
            alert('Hello ' + correctedName);
            let newName = {id: v1(), name: correctedName}
            let newNames = [...greetNames, newName]
            setGreetNames(newNames)
            setError('')
        }
    }

    let [nameStorage, setNameStorage] = useState("")

    let list = greetNames.map((n, index) => <li>{index + 1} {n.name}</li>)

    return (
        <div className={styles.main_content}>
            <InputNya  value={nameStorage}
                      onChangeHandler={(value: string) => {
                          setNameStorage(value)
                          setError('')
                      }}
                      error={error}
                      onEnter={() => {
                          sayHello(nameStorage)
                          setNameStorage("")
                      }}/>
            <button onClick={() => {sayHello(nameStorage)
                setNameStorage("")
            }}>Button Hello</button>
            <ul className={styles.greetList}>
                {list}
            </ul>
        </div>
    )
}

export default Greet

