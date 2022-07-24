import React, { useContext } from 'react'
import Item from './Pattern/Item.component'
import { Context } from '../Context';




const Pattern = props => {

    const {patternList,setPatternList} = useContext(Context)



    const handleOptionChange = e => {
        const changedList = patternList.slice().fill(false)
        changedList[e.target.value-1] = !changedList[e.target.value-1]
        setPatternList(changedList)
    }

    const createItem = () => {
        return patternList.map((item, i) =>
            <Item
                key={`pattern${i}`}
                index={i + 1}
                checked={item}
                handleOptionChange={handleOptionChange} 
            />)
    }


    return (
        <div className="Pattern-part">
            <div className="Pattern">
                <div className="Pattern-label">Pattern</div>
                {createItem()}
            </div>
        </div>
    )
}
export default Pattern