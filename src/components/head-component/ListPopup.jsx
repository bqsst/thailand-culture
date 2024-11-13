import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../ui/Apploader';

const ListPopup = ({ handleList }) => {
   const [list, setList] = useState([]);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [loadingMap, setLoadingMap] = useState(true);

   useEffect(() => {
      loadDatas();
   }, []);

   const loadDatas = async () => {
      try {
         const res = await axios.get('http://localhost:5000/api/list');
         setList(res.data);
      } catch (err) {
         console.log(err);
      } finally {
         setLoadingMap(true);
      }
   };

   const handleRemove = async (id) => {
      try {
         await axios.delete('http://localhost:5000/api/list/' + id);
         loadDatas();
      } catch (err) {
         console.log(err);
      }
   };

   const handleMapLoad = () => {
      setLoadingMap(false);
   };

   const handleSelectIndex = (index) => {
      setSelectedIndex(index);
      setLoadingMap(true);
   };

   return (
      <div onClick={handleList} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div onClick={(e) => e.stopPropagation()} className="bg-white flex justify-between items-center rounded-lg shadow-lg p-6 w-2/3 h-[580px]">
            <div className="flex flex-col justify-center w-full h-full p-6 overflow-y-auto no-scrollbar">
               <div className="m-auto text-[32px] font-semibold h-1/6">
                  LIST
               </div>
               <div className="flex flex-col gap-[50px] h-5/6">
                  {list.map((datas, index) => (
                     <div key={index} className='relative'>
                        <div onClick={() => handleSelectIndex(index)} className="flex flex-row items-center h-[70px] cursor-pointer">
                           <div className="flex flex-row w-2/6 h-full">
                              <div className="flex justify-center items-center w-1/3">
                                 {selectedIndex === index ? (
                                    <img src="/images/vector-2-icon.png" alt="vector" className="w-4 h-4" />
                                 ) : null}
                              </div>
                              <div className="bg-neutral-200 hover:bg-neutral-300 flex justify-center items-center rounded-full w-[65px] h-[65px]">
                                 <span className="text-[20px] font-semibold">{index + 1}</span>
                              </div>
                           </div>
                           <div className={`flex flex-col items-center w-4/6 h-auto pt-2 ${selectedIndex === index ? 'border-b-2 border-orange-300' : 'border-b-0'
                              } `}>
                              <h4 className="font-semibold text-left w-full">{datas.name}</h4>
                              <p className="text-zinc-500 text-[13px] text-left w-full">{datas.describe}</p>
                           </div>
                           <div onClick={() => handleRemove(datas._id)} className='flex items-center rounded-md hover:bg-zinc-200'>
                              <img src="/images/remove-icon.png" alt="delete" className='w-[25px] h-[27px] cursor-pointer' />
                           </div>
                        </div>
                        {index !== list.length - 1 && (
                           <div className="absolute left-[75px] top-[75px] w-0.5 h-[30px] border-dotted border-l-[7px] border-zinc-300"></div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex justify-center items-center w-full h-full p-10">
               {loadingMap ? (
                  <div className="flex justify-center items-center h-full">
                     <Loader />
                  </div>
               ) : null}
               {list[selectedIndex]?.map && (
                  <iframe
                     src={list[selectedIndex]?.map}
                     allowFullScreen=""
                     referrerPolicy="no-referrer-when-downgrade"
                     onLoad={handleMapLoad}
                     className="w-[400px] h-[500px] rounded-2xl"
                     style={{ display: loadingMap ? 'none' : 'block' }}
                  />
               )}
            </div>
         </div>
      </div>
   );
};

export default ListPopup;
