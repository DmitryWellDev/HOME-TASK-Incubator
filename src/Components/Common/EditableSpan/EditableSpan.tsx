import React, {useState} from "react"
import InputNya from "../../InputNya/InputNya";
import styles from './EditableSpan.module.css'
import {restoreState, saveState, StateType} from "../Local/local";


type EditableSpanPropsType = {
    setNameStorage: (value: string) => void
    nameStorage: string
    changedValue: () => void
}

function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState<boolean>(true)

    const tegsChangeHandler = () => {
        setEditMode(false)
    }

const SaveValue = () => {
    saveState<StateType>("test", {x: props.nameStorage, y: 1})
    alert(props.nameStorage)
}

const ChackSavedValue = () => {
    const state: StateType = restoreState<StateType>("test", {x: "", y: 0})
alert(state.x)
    }

    return (
        <div>
            {editMode
                ? <span onClick={tegsChangeHandler}>My Span</span>
                : <InputNya onChangeHandler={(value: string) => {
                    props.setNameStorage(value)
                }}
                            value={props.nameStorage}
                            onEnter={() => {
                                props.changedValue()
                            }}/>}
                            <button onClick={SaveValue}>Save Value</button>
                            <button onClick={ChackSavedValue}>Chack Saved Value</button>
        </div>
    )
}

export default EditableSpan
