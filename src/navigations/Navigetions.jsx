import { Routes, Route } from "react-router-dom";
import AppHeader from "../components/head-component/AppHeader";
import AppHome from "../pages/pages-standard/home";
import AppTarutao from "../pages/pages-south/tarutao";
import AppPhuKhaoThong from "../pages/pages-south/phukhaothong";
import AppSongkhlaMos from "../pages/pages-south/songkhlaMos";
import AppPhuketOld from "../pages/pages-south/phuket";
import AppSongKhlaOld from "../pages/pages-south/songkhlaOld";
import AppBangPakong from "../pages/pages-eastern/bangPakong";
import AppLumMaha from "../pages/pages-eastern/lumMahachai";
import AppImmaculate from "../pages/pages-eastern/Immaculate";
import AppWatSathon from "../pages/pages-eastern/watSathon";
import AppPrasatSri from "../pages/pages-eastern/prasatSri";
import AppWattham from "../pages/pages-western/watthamsuea";
import AppMueangMa from "../pages/pages-western/mueangMa";
import AppPhraNakhon from "../pages/pages-western/phraNakhon";
import AppThaenHin from "../pages/pages-western/watThaenHin";
import AppWatWang from "../pages/pages-western/watWangwi";
import AppPhanom from "../pages/pages-north-est/phanom";
import AppChiangKhan from "../pages/pages-north-est/chiangKhan";
import AppPhuMano from "../pages/pages-north-est/phumanorom";
import AppPhuHuail from "../pages/pages-north-est/phuHuaiIsan";
import AppMoHin from "../pages/pages-north-est/moHinKhao";
import AppWatPhraKeaw from "../pages/pages-central/watPhraKaew";
import AppWatNiwet from "../pages/pages-central/watNiwet";
import AppHubPaTat from "../pages/pages-central/hupPaTat";
import AppRetroThai from "../pages/pages-central/retroThai";
import AppSanNakhon from "../pages/pages-central/sanNakhon";
import AppDoiInThanon from "../pages/pages-nortern/doiInThanon";
import AppBanRakThai from "../pages/pages-nortern/banRakThai";
import AppMeaKampong from "../pages/pages-nortern/maeKampong";
import AppMeaGahLuang from "../pages/pages-nortern/maeFahLuang";
import AppKwanPhayao from "../pages/pages-nortern/kwanPhayao";
import AppSouth from "../pages/pages-attraction/south";
import AppNortheast from "../pages/pages-attraction/northeast";
import AppCentral from "../pages/pages-attraction/central";
import AppWestern from "../pages/pages-attraction/western";
import AppNorthern from "../pages/pages-attraction/northern";
import AppEastern from "../pages/pages-attraction/eastern";

const Navigation = () => {
   return (
      <div className="bg-zinc-50 font-poppins h-full">
         <AppHeader />
         <Routes>
            <Route path="/" element={<AppHome />} />
            {/* south */}
            <Route path="/south/3" element={<AppTarutao />} />
            <Route path="/south/4" element={<AppPhuKhaoThong />} />
            <Route path="/south/2" element={<AppSongkhlaMos />} />
            <Route path="/south/0" element={<AppPhuketOld />} />
            <Route path="/south/1" element={<AppSongKhlaOld />} />
            {/* eastern */}
            <Route path="/eastern/0" element={<AppBangPakong />} />
            <Route path="/eastern/1" element={<AppLumMaha />} />
            <Route path="/eastern/2" element={<AppImmaculate />} />
            <Route path="/eastern/3" element={<AppWatSathon />} />
            <Route path="/eastern/4" element={<AppPrasatSri />} />
            {/* western */}
            <Route path="/western/3" element={<AppWattham />} />
            <Route path="/western/1" element={<AppMueangMa />} />
            <Route path="/western/0" element={<AppPhraNakhon />} />
            <Route path="/western/4" element={<AppThaenHin />} />
            <Route path="/western/2" element={<AppWatWang />} />
            {/* northeast */}
            <Route path="/northeast/0" element={<AppPhanom />} />
            <Route path="/northeast/1" element={<AppChiangKhan />} />
            <Route path="/northeast/2" element={<AppPhuMano />} />
            <Route path="/northeast/3" element={<AppPhuHuail />} />
            <Route path="/northeast/4" element={<AppMoHin />} />
            {/* central */}
            <Route path="/central/0" element={<AppWatPhraKeaw />} />
            <Route path="/central/1" element={<AppWatNiwet />} />
            <Route path="/central/2" element={<AppHubPaTat />} />
            <Route path="/central/3" element={<AppRetroThai />} />
            <Route path="/central/4" element={<AppSanNakhon />} />
            {/* northern */}
            <Route path="/northern/3" element={<AppDoiInThanon />} />
            <Route path="/northern/0" element={<AppBanRakThai />} />
            <Route path="/northern/2" element={<AppMeaKampong />} />
            <Route path="/northern/1" element={<AppMeaGahLuang />} />
            <Route path="/northern/4" element={<AppKwanPhayao />} />
            {/* all-region */}
            <Route path="/region/3" element={<AppSouth />} />
            <Route path="/region/2" element={<AppNortheast />} />
            <Route path="/region/0" element={<AppCentral />} />
            <Route path="/region/1" element={<AppWestern />} />
            <Route path="/region/4" element={<AppNorthern />} />
            <Route path="/region/5" element={<AppEastern />} />
         </Routes>
      </div>
   )
}

export default Navigation;