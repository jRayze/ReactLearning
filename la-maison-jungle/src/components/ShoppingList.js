import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem.js'
import Categories from './Categories'
import '../styles/ShoppingList.css'


function ShoppingList({cart, updateCart}) {
    const [selectedCat, setSelectCat] = useState('')
    let listCategory = [];
    plantList.forEach(function (plant) {
        if (!listCategory.includes(plant.category)) {
            listCategory.push(plant.category)
        }
    })

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount : currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([
                ...cart,
                { name, price, amount : 1 }
            ])
        }
    }

	return (
        <div>
            <Categories setSelectCat={setSelectCat} selectedCat={selectedCat}  cartegories={listCategory}/>
            <ul className='lmj-plant-list'>
                {
                    plantList.map(({ id, cover, name, water, light, price, category }) =>
                    !selectedCat || selectedCat === category ? 
                    (
                        <div key={id}>
                            <PlantItem 
                                name={name} 
                                cover={cover} 
                                id={id} 
                                light={light} 
                                water={water}
                            />
                            <button onClick={() => addToCart(name, price)}> Ajouter </button>
                        </div>
                    ) : null)
                }
            </ul>
        </div>
    )
}

export default ShoppingList