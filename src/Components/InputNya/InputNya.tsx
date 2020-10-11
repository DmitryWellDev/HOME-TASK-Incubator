import React, {KeyboardEvent, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './InputNya.module.css'
import InputNyaButton from "../InputNyaButton/InputNyaButton";


export type InputNyaPropsType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
    onEnter?: () => void,
    onChangeHandler:(value:string) => void
    error?: string
};


function InputNya(props: InputNyaPropsType) {

    const {onEnter, error, onChange, onChangeHandler, ...restProps} = props;

    let onAddTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
 if (onEnter) {
     onEnter()
 }
        }
    }

    const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e.currentTarget.value)
    }


    return (
        <>
            <div>
                <input className={error ? s.errorInp : ''} onChange={inputOnChangeHandler}
                       onKeyPress={onAddTitle}
                       {...restProps} type="text"/>
            </div>
            {error && <div className={s.errorInp_message}>{error}</div>}
        </>
    );
}


export default InputNya



