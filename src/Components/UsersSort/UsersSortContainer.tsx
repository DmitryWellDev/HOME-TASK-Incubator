import React from 'react';
// import {Dispatch} from "redux";
// import {FilterAgeAC, OppositeSortAC, SortAC} from "../../Redux/hwReducer";
// import {UsersSort} from "./UsersSort";
// import {connect, useDispatch, useSelector} from "react-redux";
//
//
// let sss = () => {
//     let users = useSelector<any, any>(state => state.usersPage.users)
//     let dispatch = useDispatch()
//     return (
//         <UsersSort />
//     )
// }
//
// let mapStateToProps = (state: any) => {
//     return {
//         users: state.usersPage.users
//     }
// }
//
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         SortAC: () => {
//             dispatch(SortAC())
//         },
//         OppositeSortAC: () => {
//             dispatch(OppositeSortAC())
//         },
//         FilterAgeAC: () => {
//             dispatch(FilterAgeAC())
//         }
//     }
// }
//
// const UsersSortContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSort)
//
// export default UsersSortContainer;