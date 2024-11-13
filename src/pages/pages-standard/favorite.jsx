import AppFavoriteCom from "../../components/favorite-component/AppFavorite";

const AppFavorite = () => {

    return (
        <div className="bg-zinc-50 h-screen pt-[52px] sm:pt-[58px] xl:pt-[70px]">
            <div className="flex flex-col justify-center items-center h-[150px] px-[200px] space-y-2 my-4">
                <h1 className="text-[35px] font-semibold">FAVORITE</h1>
                <p className="text-[19px] text-zinc-500 text-center">
                    A land of breathtaking natural beauty, with crystal-clear seas and pristine white sand
                    beaches. <br /> The stunning scenery and fresh air make it perfect for relaxation and nature exploration.
                </p>
            </div>
            <AppFavoriteCom />
        </div>
    )
}

export default AppFavorite;