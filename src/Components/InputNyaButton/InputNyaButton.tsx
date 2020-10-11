import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './InputNyaButton.module.css'

type InputNyaButtonType = {
    f: () => void
}

const InputNyaButton = (props: InputNyaButtonType) => {

    return <div><button onClick={props.f}>X</button></div>
}

export default InputNyaButton
