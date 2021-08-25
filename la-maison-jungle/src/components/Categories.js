import '../styles/Categories.css'

function Cartegories ({setSelectCat ,selectedCat, cartegories}) {
    return (
        <div>
            <select value={selectedCat} className='lmj-categories-select' onChange={((e) => setSelectCat(e.target.value))}>
                <option value=''>----</option>
                {cartegories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setSelectCat('')}>Reinitialiser</button>
        </div>
    )
}

export default Cartegories