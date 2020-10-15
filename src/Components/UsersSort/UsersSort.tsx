import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {FilterAgeAC, OppositeSortAC, SortAC, usersDataItem} from "../../Redux/hwReducer";
import {RootStateType} from '../../Redux/redux-store';
import styles from './UsersSort.module.css'

export const UsersSort = (props: any) => {
    let users = useSelector<RootStateType, Array<usersDataItem>>(state => state.usersData)


    let dispatch = useDispatch()

    const sortUp = () => dispatch((SortAC()))
    const sortDown = () => dispatch((OppositeSortAC()))
    const filterAge = () => dispatch((FilterAgeAC()))

    return (<div className={styles.main}>
            <div>{users.map(i => <div key={i.id}>{i.name}</div>)}</div>
            <div className={styles.buttonWrap}>
                <button onClick={sortUp}>Sort Up</button>
                <button onClick={sortDown}>Sort Down</button>
                <button onClick={filterAge}>Age filter</button>
            </div>
        </div>
    )
}