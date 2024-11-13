import axios from "axios";
import { useState } from "react";

const AppBodyHead = (props) => {

    const { name, view, image, review } = props;

    const [like, setLike] = useState(false)

    const handleLike = async () => {
        if(!like){
            setLike(!like)
            await axios.post('http://localhost:5000/api/favorite', {
                image: image,
                name: name,
                describe: review
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }
    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[180px] py-6 md:space-x-2">
            <div className="flex flex-col text-center md:text-left">
                <h4 className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold">{name}</h4>
                <div className="flex flex-row items-center space-x-2 justify-center md:justify-start mt-2">
                    {Array(5).fill(0).map((_, index) => (
                        <img key={index} src="/images/heart-icon.png" alt="heart" className="object-cover w-5 h-5" />
                    ))}
                    <p className="text-[18px] md:text-[24px] text-black text-opacity-50">{view}</p>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-4 mt-4 md:mt-0">
                <img src="/images/share-icon.png" alt="share" className="object-cover w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
                <div onClick={handleLike} className="flex flex-row items-center rounded-full border-2 border-black py-2 px-4 space-x-2 hover:bg-gray-100">
                    <img src="/images/favorite-icon.png" alt="favorite" className="object-cover w-[20px] sm:w-[30px] h-[20px] sm:h-[30px]" />
                    <span className="text-[16px] sm:text-[20px]">{like ? 'Liked' : 'Like'}</span>
                </div>
            </div>
        </div>
    )
}

export default AppBodyHead;