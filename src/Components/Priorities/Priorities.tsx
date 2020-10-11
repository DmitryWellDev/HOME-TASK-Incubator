import React, {useState} from 'react';
import styles from './Priorities.module.css';


type PriorityType = {
    name: string
    priority: string
    id: number
}

type PrioritiesPropsType = {
    priority: Array<PriorityType>
    removePriority: (id:number) => void
    changeFilter: (value: FilterValueType) => void
    prioritiesForPrioritiesList:() => void
}

 type FilterValueType = 'all' | 'high' | 'middle' | 'low'

function Priorities() {

    let [priority, setPriority] = useState([
        {id: 1, name: 'Work', priority: 'high'},
        {id: 2, name: 'Study', priority: 'high'},
        {id: 3, name: 'Sport', priority: 'middle'},
        {id: 4, name: 'Amusement', priority: 'low'}
    ])

    let [filter, setFilter] = useState<FilterValueType>('all')

    function removePriority(id: number) {
        let filteredPriority = priority.filter(p => p.id !== id)
        setPriority(filteredPriority)
    }

    let prioritiesForPrioritiesList = priority
    if (filter === 'high') {
        prioritiesForPrioritiesList = priority.filter(p => p.priority === 'high')
    }
    if (filter === 'middle') {
        prioritiesForPrioritiesList = priority.filter(p => p.priority === 'middle')
    }
    if (filter === 'low') {
        prioritiesForPrioritiesList = priority.filter(p => p.priority === 'low')
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

 let PriorityElement =  priority.map((p: PriorityType) => <li key={p.id}>{p.name} : {p.priority} <button onClick={()=>{removePriority(p.id)}}>x</button></li>)

    return (<div>
            <h3>Current tasks priopities</h3>
            <ul className={styles.list}>
              {PriorityElement}
            </ul>
            <div>
                <div>ww</div>
                <button onClick={() => changeFilter('all')}>All</button>
                <button onClick={() => changeFilter('high')}>High</button>
                <button onClick={() => changeFilter('middle')}>Middle</button>
                <button onClick={() => changeFilter('low')}>Low</button>
            </div>
        </div>
    )
}

export default Priorities