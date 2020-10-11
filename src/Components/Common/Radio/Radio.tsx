import React, {useState} from "react";
import styles from './Radio.module.css'


export type ItemType = {
    title: string
    value: any
    checked: boolean
}

type RadioPropsType = {
    items: ItemType[]
    value: any
    onChangeInp: (value: any) => void
}

function Radio(props:RadioPropsType) {
    return(
        <div className={styles.RadioWrap}>
            <div>
                <h3>Radio</h3>
            </div>

            <div>
            {props.items ? props.items.map((i, index) =><div className={styles.ItemsWrap}>
                <input type={'radio'} checked={i.checked} key={index} onClick={() => {props.onChangeInp(i.value)}}/>
                    <label>{i.title}</label></div>) :
                <div></div>}
            </div>
        </div>
    )
}

export default Radio