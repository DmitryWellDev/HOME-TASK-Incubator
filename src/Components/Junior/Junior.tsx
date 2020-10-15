import React, {useState} from "react";
import styles from './Junior.module.css'
import EditableSpan from "../Common/EditableSpan/EditableSpan";
import Select from "../Common/Select/Select";
import Radio from "../Common/Radio/Radio";
import {UsersSort} from "../UsersSort/UsersSort";

export type ItemType = {
    title: string
    value: any,
    checked: boolean
}

function Junior() {

    let [value, setvalue] = useState('Menu')

    const onChange = (value: any) => {
        let el = items.find(it => it.value === value)
        if (el) {
            setvalue(el.title)
        }
    }
    let [items, setItems] = useState<ItemType[]>([
        {title: 'Task 1', value: 1, checked: false,},
        {title: 'Task 2', value: 2, checked: false,},
        {title: 'Task 3', value: 3, checked: false,},
        {title: 'Task 4', value: 4, checked: false,},
    ])

    const onChangeInp = (value: any) => {

        const newItems = items.map(el => {
            if(el.value === value) {
                return {...el, checked: true}
            }else {
                return {...el, checked: false}
            }
        })
        setItems(newItems)
    }

    let [nameStorage, setNameStorage] = useState("")

    const changedValue = () => {
        setNameStorage(nameStorage)
        alert(nameStorage)
        setNameStorage('')
    }

    return <div className={styles.content}>
        <div>Tuesday</div>
        <EditableSpan
            setNameStorage={setNameStorage}
            nameStorage={nameStorage}
            changedValue={changedValue}
        />
        <Select items={items} onChange={onChange} value={value}/>
        <Radio items={items} onChangeInp={onChangeInp} value={value}/>
        <UsersSort/>
    </div>
}

export default Junior