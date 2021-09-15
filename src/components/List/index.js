const { useState } = require("react")

const List = () => {
    
    const [nameList, setNameList ] = useState([]);
    const [name, setName] = useState("")
    

    
    const handleClick = () => {
        setNameList([...nameList, name])
    }

    return(
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button disabled={!name} onClick={handleClick}>Add</button>
            <ul>
                {nameList.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    )        
}

export default List;