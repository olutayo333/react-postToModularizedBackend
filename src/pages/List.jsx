import React from 'react'
import FoodList from './FoodList';

const List = () => {
    const food = ["Rice", "Pap", "Garri"];

    return (
    <ul>
        {
            food.map((items)=>(<FoodList foods={items}/> ))
            }
    </ul>
  )

}

export default List
