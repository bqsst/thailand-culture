import { useState } from "react";
import axios from "axios";

const AppListBut = (props) => {

    const { name, map, describe } = props;

    const [plusHover, setPlusHover] = useState(false)
    const [plused, setPlused] = useState(false)

    const handleAddList = async (e) => {
        e.preventDefault()
        setPlused(!plused)
        if(!plused){
            alert('Add to list succesfully!')
        }
        await axios.post('http://localhost:5000/api/list', {
            name: name,
            describe: describe,
            map: map
        })
    }

    return (
        <div className="fixed flex flex-row items-center bottom-8 right-6 space-x-2">
            {plusHover && (
                <div className="bg-white flex items-center shadow-md rounded-lg h-[40px] px-4">
                    Add to list
                </div>
            )}
            <button onClick={handleAddList} onMouseEnter={() => setPlusHover(true)} onMouseLeave={() => setPlusHover(false)}
                className="bg-white flex justify-center items-center rounded-full w-12 h-12 shadow-lg">
                <img src="/images/plus-black-icon.png" alt="add" className="w-[24px] h-[24px]" />
            </button>
        </div>
    )
}

export default AppListBut;