import React, {useState} from "react";
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    items: ItemType[]
    onChange: (value: any) => void
    value: string
}

function Select(props:AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return(
        <div>
            <div>
                <h3  className={styles.inp} onClick={() => {changeCollapsed()}}>{props.value}</h3>
            </div>

            {collapsed &&
            <ul className={styles.itemsList}>
                {props.items.map((i, index) => <li className={styles.itemsList_item} onClick={() => {
                    props.onChange(i.value)
                    setCollapsed(false)
                }} key={index}>{i.title}</li>)}
            </ul>
            }
        </div>
    )
}

export default Select