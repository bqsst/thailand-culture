import { useState, useEffect } from "react";
import AppAttracHead from "../../components/attraction-component/AppAttracHead";
import AppAttarcShow from "../../components/attraction-component/AppAttracShow";
import axios from "axios";

const AppNorthern = () => {

    const [attraction, setAttraction] = useState([])

    useEffect(() => {
        loadDatas()
    }, [])

    const loadDatas = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/attraction')
            setAttraction(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {attraction.slice(4,5).map((datas, index) => (
                <div key={index} className="h-screen pt-[52px] sm:pt-[58px] xl:pt-[70px]">
                    <AppAttracHead name={datas.name} describe={datas.describe} />
                    <AppAttarcShow  
                        image1={datas.image1} image2={datas.image2} image3={datas.image3} image4={datas.image4} image5={datas.image5}
                        name1={datas.name1} name2={datas.name2} name3={datas.name3} name4={datas.name4} name5={datas.name5}
                        describe1={datas.describe1} describe2={datas.describe2} describe3={datas.describe3} describe4={datas.describe4} describe5={datas.describe5}
                        basePath="/northern"
                     />
                </div>
            ))}
        </div>
    )
}

export default AppNorthern;