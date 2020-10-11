

export const hwReducer = (state: Array<{ id: string, name: string, age: number }>, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case 'SORT': [
            ...state.sort((a, b) => a.name > b.name ? 1 : -1)
        ]
    }
    return [];
};



