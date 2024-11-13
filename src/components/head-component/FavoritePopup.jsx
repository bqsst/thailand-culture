import React from 'react'
import AppFavoriteCom from '../favorite-component/AppFavorite';

const FavoritePopup = ({ handleFavorite }) => {
    return (
        <div onClick={handleFavorite} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white flex flex-col items-center rounded-lg shadow-lg p-6 w-2/3 h-[600px] space-y-4 overflow-y-auto">
                <div className="flex flex-col justify-center items-center px-[200px] space-y-2 my-4">
                    <h1 className="text-[30px] font-semibold">FAVORITE</h1>
                    <p className="text-[15px] text-zinc-500 text-center">
                        A land of breathtaking natural beauty, with crystal-clear seas and pristine white sand
                        beaches.
                    </p>
                </div>
                <AppFavoriteCom />
            </div>
        </div>
    )
}

export default FavoritePopup;