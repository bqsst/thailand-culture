import axios from "axios";
import { useState, useEffect } from "react";

const AppFavoriteCom = () => {

    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        loadDatas()
    }, [])

    const loadDatas = async () => {
        await axios.get('http://localhost:5000/api/favorite')
            .then((res) => {
                setFavorite(res.data);
            })
            .catch((err) => console.log(err));
    }

    const handleRemove = async(id) => {
        await axios.delete('http://localhost:5000/api/favorite/' + id)
            .then((res) => {
                console.log(res)
                loadDatas()
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {favorite.length > 0 ? (
                favorite.map((datas, index) => (
                    <div key={index} className="flex flex-row justify-start items-center h-[190px] w-[650px] space-x-10 mb-4">
                        <div className="w-1/3 h-full">
                            <img src={datas.image} alt="Image" className="object-cover w-full h-full rounded-xl" />
                        </div>
                        <div className="w-2/3 h-full border-2 rounded-xl">
                            <div className="flex flex-col py-2 pt-2 px-4 space-y-2 h-full">
                                <div className="h-3/4 flex flex-col space-y-2">
                                    <h4 className="text-[20px] font-medium text-center">{datas.name}</h4>
                                    <p className="text-zinc-500 text-[13px] text-center overflow-y-auto">{datas.describe}</p>
                                </div>
                                <div className="bg-white z-20 flex flex-row justify-end items-end space-x-2 pr-2 h-1/4">
                                    <button onClick={() => handleRemove(datas._id)} className="bg-red-500 text-white py-2 px-4 rounded-full">
                                        Delete
                                    </button>
                                    <button className="bg-black text-white py-2 px-4 rounded-full">
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex justify-center items-center h-[350px]">
                    <p className="text-black text-opacity-50">You don't have a favorite travel destination yet.</p>
                </div>
            )}
        </div>
    )
}

export default AppFavoriteCom;