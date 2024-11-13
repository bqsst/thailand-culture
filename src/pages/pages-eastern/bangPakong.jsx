import AppAbout from "../../components/detail-component/AppAbout";
import AppBodyHead from "../../components/detail-component/AppBodyHead";
import AppComment from "../../components/detail-component/AppComment";
import AppImage from "../../components/detail-component/AppImage";
import AppListBut from "../../components/detail-component/AppListBut";
import AppReview from "../../components/detail-component/AppReview";
import AppSimilar from "../../components/detail-component/AppSimilar";
import axios from "axios";
import { useState, useEffect } from "react";

const AppBangPakong = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        loadDatas();
    }, []);

    const loadDatas = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/detail');
            console.log('Response Data:', res.data);
            setDetail(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {detail.length > 0 ? (
                detail.slice(5,6).map((datas, index) => (
                    <div key={index} className="px-4 sm:px-8 md:px-[100px] xl:px-[200px] pt-[52px] sm:pt-[58px]  xl:pt-[70px]">
                        <AppBodyHead name={datas.name} view={datas.view} image={datas.image1} review={datas.personText1} />
                        <AppImage image1={datas.image1} image2={datas.image2} image3={datas.image3} />
                        <AppAbout locationSrc={datas.locationSrc} location={datas.location} email={datas.email} phone={datas.phone} describe={datas.describe} />
                        <AppSimilar
                            imageSimilar1={datas.imageSimilar1} imageSimilar2={datas.imageSimilar2}
                            imageSimilar3={datas.imageSimilar3} imageSimilar4={datas.imageSimilar4}
                            similar1={datas.similar1} similar2={datas.similar2} similar3={datas.similar3} similar4={datas.similar4}
                        />
                        <AppReview
                            star={datas.star} poppular1={datas.poppular1} poppular2={datas.poppular2} poppular3={datas.poppular3}
                            poppular4={datas.poppular4} poppular5={datas.poppular5} poppular6={datas.poppular6} poppular7={datas.poppular7}
                        />
                        <AppComment
                            personSrc1={datas.personSrc1} personSrc2={datas.personSrc2} personSrc3={datas.personSrc3} person1={datas.person1}
                            person2={datas.person2} person3={datas.person3} personText1={datas.personText1} personText2={datas.personText2} personText3={datas.personText3}
                            imageReview11={datas.imageReview11} imageReview12={datas.imageReview12} imageReview21={datas.imageReview21} imageReview22={datas.imageReview22}
                            imageReview23={datas.imageReview23} imageReview31={datas.imageReview31} imageReview32={datas.imageReview32}
                        />
                        <AppListBut name={datas.name} map={datas.locationSrc} describe={"Explore the"+ datas.name} />
                    </div>
                ))
            ) : (
                <div className="flex justify-center items-center h-[450px]">
                    <p className="text-black text-opacity-50">No detail available.</p>
                </div>
            )}
        </div>
    );
};

export default AppBangPakong;
