import {hwReducer, usersDataItem} from './hwReducer'
import {v1} from "uuid";

let startState: Array<usersDataItem> =[]

beforeEach( ()=> {
    startState =
        [{id: v1(), name: 'Victor', age: 16},
            {id: v1(), name: 'Sergey', age: 20},
            {id: v1(), name: 'Alex', age: 13},
            {id: v1(), name: 'Nick', age: 45},
        ]
} )

test('hwReducer should return array with right order of names according to alfabet', () => {

    const endState = hwReducer(startState, {type: 'SORT', payload: 'up'})
    console.log(endState);
    expect(endState[0].name).toBe('Alex')
    expect(endState[1].name).toBe('Nick')
    expect(endState[2].name).toBe('Sergey')
    expect(endState[3].name).toBe('Victor')
})

test('hwReducer should return array with opposite order of names according to alfabet', () => {
    const startState =
        [{id: v1(), name: 'Victor', age: 16},
            {id: v1(), name: 'Sergey', age: 20},
            {id: v1(), name: 'Alex', age: 13},
            {id: v1(), name: 'Nick', age: 45},
        ]

    const endState = hwReducer(startState, {type: 'OPPOSITE-SORT', payload: 'down'})

    expect(endState[0].name).toBe('Victor')
    expect(endState[1].name).toBe('Sergey')
    expect(endState[2].name).toBe('Nick')
    expect(endState[3].name).toBe('Alex')
})

test('hwReducer should return array with people getting age 18 years', () => {
    const startState =
        [{id: v1(), name: 'Victor', age: 16},
            {id: v1(), name: 'Sergey', age: 20},
            {id: v1(), name: 'Alex', age: 13},
            {id: v1(), name: 'Nick', age: 45},
        ]

    const endState = hwReducer(startState, {type: 'FILTER-AGE'})

    expect(endState.length).toBe(2)
    expect(endState[0].name).toBe('Sergey')
    expect(endState[1].name).toBe('Nick')

})

