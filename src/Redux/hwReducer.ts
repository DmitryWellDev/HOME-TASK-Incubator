import {v1} from "uuid";

export type usersDataItem = {
    id: string
    name: string
    age: number
}

let initialState: Array<usersDataItem> =
    [
        {id: v1(), name: 'Victor', age: 16},
        {id: v1(), name: 'Sergey', age: 20},
        {id: v1(), name: 'Alex', age: 13},
        {id: v1(), name: 'Nick', age: 45},
    ]


export const hwReducer = (state: Array<usersDataItem> = initialState, action: { type: string, payload?: any }): Array<usersDataItem> => {
    switch (action.type) {
        case 'SORT':
            return [
                ...state.sort((a, b) => a.name > b.name ? 1 : -1)
            ]

        case 'OPPOSITE-SORT':
            return [
                ...state.sort((a, b) => a.name > b.name ? 1 : -1).reverse()
            ]
            return state
        case 'FILTER-AGE':
             return state.filter(i => i.age >= 18)
            return state
        default:
            return state
        //throw new Error("I don't understand this type")
    }
}


export const SortAC = () => {
    return {type: 'SORT'} as const
}
export const OppositeSortAC = () => {
    return {type: 'OPPOSITE-SORT'} as const
}
export const FilterAgeAC = () => {
    return {type: 'FILTER-AGE'} as const
}






