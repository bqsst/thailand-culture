import AppHomeDes from '../../components/home-component/AppHomeDes';
import AppHomeFooter from '../../components/home-component/AppHomeFooter';
import AppHomeHead from '../../components/home-component/AppHomeHead';
import AppHomeMonk from '../../components/home-component/AppHomeMonk';
import AppHomeShow from '../../components/home-component/AppHomeShow';
import AppRegion from '../../components/home-component/AppRegion';

const AppHome = () => {
    return (
        <div className="h-screen pt-[52px] sm:pt-[58px] xl:pt-[70px] bg-zinc-50">
            <AppHomeHead/>
            <AppHomeShow/>
            <AppRegion />
            <AppHomeMonk/>
            <AppHomeDes/>
            <AppHomeFooter/>
        </div>
    )
}

export default AppHome;
