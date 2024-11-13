import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ListPopup from "./ListPopup";
import LoginPopup from "./LoginPopup";
import FavoritePopup from "./FavoritePopup";

const AppHeader = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [openPop, setOpenPop] = useState(false)
    const [login, setLogin] = useState(false)
    const [favorite, setfavorite] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleFavorite = () => {
        setfavorite(!favorite)
    }

    const handleLogin = () => {
        setLogin(!login)
    }

    const handleList = () => {
        setOpenPop(!openPop)
    }

    return (
        <header
            className={`bg-white flex justify-center lg:justify-between w-full h-[70px] px-10 fixed top-0 left-0 z-50 transition-transform duration-300 ${scrollPosition > 50 ? "shadow-md" : ""
                }`}>
            <NavLink to={'/'} className="flex flex-row justify-center lg:justify-start items-center w-1/2 space-x-4 cursor-pointer">
                <img src="/images/logo-icon.png" alt="logo" />
                <h1 className="text-[24px] font-medium">SANNONGVAN</h1>
            </NavLink>
            <nav className="hidden lg:flex flex-row justify-end items-center w-1/2 space-x-8 font-medium">
                <NavLink to={'/'} className={({ isActive }) => isActive ? "text-black" : "text-neutral-400 hover:text-black"} >
                    HOME
                </NavLink>
                <button onClick={handleFavorite} className="text-neutral-400 hover:text-black">
                    FAVORITE
                </button>
                <button onClick={handleList}
                    className="text-neutral-400 hover:text-black">
                    LIST
                </button>
                <NavLink className="text-neutral-400 hover:text-black">CONTACT</NavLink>
                <button onClick={handleLogin} className="text-neutral-400 hover:text-black">
                    {/* <div className="rounded-full">
                        <img src="/images/my-pic.png" alt="myPic" />
                    </div> */}
                    LOG IN
                </button>
            </nav>
            {openPop && (
                <ListPopup handleList={handleList} />
            )}
            {login && (
                <LoginPopup handleLogin={handleLogin} />
            )}
            {favorite && (
                <FavoritePopup handleFavorite={handleFavorite} />
            )}
        </header>
    );
};

export default AppHeader;