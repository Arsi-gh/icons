import { GiCoffeePot, GiHotMeal, GiMeal , GiSteak , GiChickenOven , GiRoastChicken, GiDrinkMe, GiGymBag, GiSoccerBall, GiWoodenChair} from 'react-icons/gi';
import { BiCoffeeTogo, BiDrink, BiLogoGit, BiLogoGithub, BiLogoMongodb, BiSolidCoffeeAlt , BiSolidDrink, BiSolidSushi , BiSushi } from 'react-icons/bi';
import { BsCupHot, BsCupStraw } from 'react-icons/bs';
import { LuPartyPopper , LuCakeSlice, LuChefHat, LuCroissant, LuCupSoda, LuEggFried, LuIceCreamBowl, LuSalad, LuSandwich, LuSoup, LuArmchair } from 'react-icons/lu';
import { RiBeerFill, RiBeerLine, RiCake3Line, RiDrinks2Line, RiDrinksLine } from 'react-icons/ri';
import { PiBeerBottleBold, PiBeerBottleFill, PiBreadBold, PiChefHatBold, PiCoffee, PiCookie, PiSoccerBallFill, PiVolleyballBold } from 'react-icons/pi';
import { TbApi, TbBallVolleyball, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandRedux, TbBrandSass, TbBrandTypescript, TbCookie, TbGymnastics, TbMilkshake, TbPizza, TbRegex, TbSausage, TbSoccerField } from 'react-icons/tb';
import { MdOutlineCookie, MdOutlineEmojiFoodBeverage , MdOutlineLocalCafe, MdOutlineSportsBar, MdOutlineSportsBasketball, MdOutlineSportsFootball, MdOutlineSportsTennis, MdOutlineTableBar, MdSportsBasketball, MdSportsGolf, MdSportsMma } from 'react-icons/md';
import { CiFries } from 'react-icons/ci';
import { PiHamburgerBold } from 'react-icons/pi';
import { LiaCookieBiteSolid, LiaHamburgerSolid } from 'react-icons/lia';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FiCoffee, FiFigma } from 'react-icons/fi';
import { CgFormatLeft, CgGym } from 'react-icons/cg';
import { FaAws, FaChair, FaSwimmer } from 'react-icons/fa';
import { SiJest, SiMui, SiReact, SiReactquery, SiTailwindcss, SiThreedotjs } from 'react-icons/si';
import { FaCheese } from 'react-icons/fa6'

const datas = [
    {isTitle : true , title : "Cafe"},
    {isTitle : false , icon : <MdOutlineLocalCafe/> , tag : "MdOutlineLocalCafe" , url : "import { MdOutlineLocalCafe } from 'react-icons/md'"},
    {isTitle : false , icon : <BiSolidCoffeeAlt/> , tag : "BiSolidCoffeeAlt" , url : "import { BiSolidCoffeeAlt } from 'react-icons/bi'"},
    {isTitle : false , icon : <MdOutlineEmojiFoodBeverage/> , tag : "MdOutlineEmojiFoodBeverage" , url : "import { MdOutlineEmojiFoodBeverage } from 'react-icons/md'"},
    {isTitle : false , icon : <GiCoffeePot/> , tag : "GiCoffeePot" , url : "import { GiCoffeePot } from 'react-icons/gi'"},
    {isTitle : false , icon : <PiCoffee/> , tag : "PiCoffee" , url : "import { PiCoffee } from 'react-icons/pi'"},
    {isTitle : false , icon : <BsCupHot/> , tag : "BsCupHot" , url : "import { BsCupHot } from 'react-icons/bs'"},
    {isTitle : false , icon : <BiCoffeeTogo/> , tag : "BiCoffeeTogo" , url : "import { BiCoffeeTogo } from 'react-icons/bi'"},
    {isTitle : false , icon : <FiCoffee/> , tag : "FiCoffee" , url : "import { FiCoffee } from 'react-icons/fi'"},
    {isTitle : false , icon : <LuCupSoda/> , tag : "LuCupSoda" , url : "import { LuCupSoda } from 'react-icons/lu'"},
    {isTitle : false , icon : <RiDrinks2Line/> , tag : "RiDrinks2Line" , url : "import { RiDrinks2Line } from 'react-icons/ri';"},
    {isTitle : false , icon : <GiDrinkMe/> , tag : "GiDrinkMe" , url : "import { GiDrinkMe} from 'react-icons/gi'"},
    {isTitle : false , icon : <RiDrinksLine/> , tag : "RiDrinksLine" , url : "import { RiDrinksLine } from 'react-icons/ri';"},
    {isTitle : false , icon : <BiDrink/> , tag : "BiDrink" , url : "import { BiDrink } from 'react-icons/bi'"},
    {isTitle : false , icon : <BiSolidDrink/> , tag : "BiSolidDrink" , url : "import { BiSolidDrink } from 'react-icons/bi'"},
    {isTitle : false , icon : <BsCupStraw/> , tag : "BsCupStraw" , url : "import { BsCupStraw } from 'react-icons/bs'"},
    {isTitle : false , icon : <TbMilkshake/> , tag : "TbMilkshake" , url : "import { TbMilkshake } from 'react-icons/tb'"},
    {isTitle : false , icon : <PiCookie/> , tag : "PiCookie" , url : "import { PiCookie } from 'react-icons/pi'"},
    {isTitle : false , icon : <TbCookie/> , tag : "TbCookie" , url : "import { TbCookie } from 'react-icons/tb';"},
    {isTitle : false , icon : <MdOutlineCookie/> , tag : "MdOutlineCookie" , url : "import { MdOutlineCookie } from 'react-icons/md'"},
    {isTitle : false , icon : <LiaCookieBiteSolid/> , tag : "LiaCookieBiteSolid" , url : "import { LiaCookieBiteSolid } from 'react-icons/lia'"},
    {isTitle : false , icon : <LuCroissant/> , tag : "LuCroissant" , url : "import { LuCroissant } from 'react-icons/lu'"},
    {isTitle : false , icon : <RiCake3Line/> , tag : "RiCake3Line" , url : "import { RiCake3Line } from 'react-icons/ri';"},
    {isTitle : false , icon : <LuCakeSlice/> , tag : "LuCakeSlice" , url : "import { LuCakeSlice } from 'react-icons/lu'"},
    {isTitle : false , icon : <MdOutlineSportsBar/> , tag : "MdOutlineSportsBar" , url : "import { MdOutlineSportsBar } from 'react-icons/md'"},
    {isTitle : false , icon : <PiBeerBottleBold/> , tag : "PiBeerBottleBold" , url : "import { PiBeerBottleBold } from 'react-icons/pi'"},
    {isTitle : false , icon : <PiBeerBottleFill/> , tag : "PiBeerBottleFill" , url : "import { PiBeerBottleFill } from 'react-icons/pi'"},
    {isTitle : false , icon : <RiBeerFill/> , tag : "RiBeerFill" , url : "import { RiBeerFill } from 'react-icons/ri'"},
    {isTitle : false , icon : <RiBeerLine/> , tag : "RiBeerLine" , url : "import { RiBeerLine } from 'react-icons/ri'"},
    {isTitle : false , icon : <LuIceCreamBowl/> , tag : "LuIceCreamBowl" , url : "import { LuIceCreamBowl } from 'react-icons/lu'"},
    {isTitle : false , icon : <PiBreadBold/> , tag : "PiBreadBold" , url : "import { PiBreadBold } from 'react-icons/pi'"},
    {isTitle : false , icon : <FaCheese/> , tag : "FaCheese" , url : "import { FaCheese } from 'react-icons/fa6'"},
    {isTitle : false , icon : <LuPartyPopper/> , tag : "LuPartyPopper" , url : "import { LuPartyPopper } from 'react-icons/lu'"},
    {isTitle : false , icon : <MdOutlineTableBar/> , tag : "MdOutlineTableBar" , url : "import { MdOutlineTableBar } from 'react-icons/md'"},
    {isTitle : false , icon : <LuArmchair/> , tag : "LuArmchair" , url : "import { LuArmchair } from 'react-icons/lu'"},
    {isTitle : false , icon : <GiWoodenChair/> , tag : "GiWoodenChair" , url : "import { GiWoodenChair } from 'react-icons/gi'"},
    {isTitle : false , icon : <FaChair/> , tag : "FaChair" , url : "import { FaChair } from 'react-icons/fa'"},

    {isTitle : true , title : "Restaurant"},
    {isTitle : false , icon : <TbSausage/> , tag : "TbSausage" , url : "import { TbSausage } from 'react-icons/tb';"},
    {isTitle : false , icon : <LuEggFried/> , tag : "LuEggFried" , url : "import { LuEggFried } from 'react-icons/lu'"},
    {isTitle : false , icon : <LuSalad/> , tag : "LuSalad" , url : "import { LuSalad } from 'react-icons/lu'"},
    {isTitle : false , icon : <LuSoup/> , tag : "LuSoup" , url : "import { LuSoup } from 'react-icons/lu'"},
    {isTitle : false , icon : <GiHotMeal/> , tag : "GiHotMeal" , url : "import { GiHotMeal } from 'react-icons/gi'"},
    {isTitle : false , icon : <GiMeal/> , tag : "GiMeal" , url : "import { GiMeal } from 'react-icons/gi'"},
    {isTitle : false , icon : <LuSandwich/> , tag : "LuSandwich" , url : "import { LuSandwich } from 'react-icons/lu'"},
    {isTitle : false , icon : <TbPizza/> , tag : "TbPizza" , url : "import { TbPizza } from 'react-icons/tb'"},
    {isTitle : false , icon : <CiFries/> , tag : "CiFries" , url : "import { CiFries } from 'react-icons/ci'"},
    {isTitle : false , icon : <PiHamburgerBold/> , tag : "PiHamburgerBold" , url : "import { PiHamburgerBold } from 'react-icons/pi'"},
    {isTitle : false , icon : <LiaHamburgerSolid/> , tag : "LiaHamburgerSolid" , url : "import { LiaHamburgerSolid } from 'react-icons/lia'"},
    {isTitle : false , icon : <IoFastFoodOutline/> , tag : "IoFastFoodOutline" , url : "import { IoFastFoodOutline } from 'react-icons/io5'"},
    {isTitle : false , icon : <GiSteak/> , tag : "GiSteak" , url : "import { GiSteak } from 'react-icons/gi'"},
    {isTitle : false , icon : <GiChickenOven/> , tag : "GiChickenOven" , url : "import { GiChickenOven } from 'react-icons/gi'"},
    {isTitle : false , icon : <GiRoastChicken/> , tag : "GiRoastChicken" , url : "import { GiRoastChicken } from 'react-icons/gi'"},
    {isTitle : false , icon : <BiSolidSushi/> , tag : "BiSolidSushi" , url : "import { BiSolidSushi } from 'react-icons/bi'"},
    {isTitle : false , icon : <BiSushi/> , tag : "BiSushi" , url : "import { BiSushi } from 'react-icons/bi'"},
    {isTitle : false , icon : <LuChefHat/> , tag : "LuChefHat" , url : "import { LuChefHat } from 'react-icons/lu'"},
    {isTitle : false , icon : <PiChefHatBold/> , tag : "PiChefHatBold" , url : "import { PiChefHatBold } from 'react-icons/pi'"},

    {isTitle : true , title : "Tech & Programming languages"},
    {isTitle : false , icon : <SiTailwindcss/> , tag : "SiTailwindcss" , url : "import { SiTailwindcss } from 'react-icons/si';"},
    {isTitle : false , icon : <TbBrandNextjs/> , tag : "TbBrandNextjs" , url : "import { TbBrandNextjs } from 'react-icons/tb';"},
    {isTitle : false , icon : <SiReactquery/> , tag : "SiReactquery" , url : "import { SiReactquery } from 'react-icons/si';"},
    {isTitle : false , icon : <SiReact/> , tag : "SiReact" , url : "import { SiReact } from 'react-icons/si';"},
    {isTitle : false , icon : <TbBrandJavascript/> , tag : "TbBrandJavascript" , url : "import { TbBrandJavascript } from 'react-icons/tb';"},
    {isTitle : false , icon : <TbBrandHtml5/> , tag : "TbBrandHtml5" , url : "import { TbBrandHtml5 } from 'react-icons/tb';"},
    {isTitle : false , icon : <TbBrandCss3/> , tag : "TbBrandCss3" , url : "import { TbBrandCss3 } from 'react-icons/tb';"},
    {isTitle : false , icon : <TbRegex/> , tag : "TbRegex" , url : "import { TbRegex } from 'react-icons/tb';"},
    {isTitle : false , icon : <FiFigma/> , tag : "FiFigma" , url : "import { FiFigma } from 'react-icons/fi';"},
    {isTitle : false , icon : <TbBrandTypescript/> , tag : "TbBrandTypescript" , url : "import { TbBrandTypescript } from 'react-icons/tb';"},
    {isTitle : false , icon : <TbBrandSass/> , tag : "TbBrandSass" , url : "import { TbBrandSass } from 'react-icons/tb';"},
    {isTitle : false , icon : <SiMui/> , tag : "SiMui" , url : "import { SiMui } from 'react-icons/si';"},
    {isTitle : false , icon : <BiLogoGit/> , tag : "BiLogoGit" , url : "import { BiLogoGit } from 'react-icons/bi';"},
    {isTitle : false , icon : <BiLogoGithub/> , tag : "BiLogoGithub" , url : "import { BiLogoGithub } from 'react-icons/bi';"},
    {isTitle : false , icon : <BiLogoMongodb/> , tag : "BiLogoMongodb" , url : "import { BiLogoMongodb } from 'react-icons/bi';"},
    {isTitle : false , icon : <TbApi/> , tag : "TbApi" , url : "import { TbApi } from 'react-icons/tb';"},
    {isTitle : false , icon : <SiThreedotjs/> , tag : "SiThreedotjs" , url : "import { SiThreedotjs } from 'react-icons/si';"},
    {isTitle : false , icon : <TbBrandRedux/> , tag : "TbBrandRedux" , url : "import { TbBrandRedux } from 'react-icons/tb';"},
    {isTitle : false , icon : <SiJest/> , tag : "SiJest" , url : "import { SiJest } from 'react-icons/si';"},
    {isTitle : false , icon : <CgFormatLeft/> , tag : "CgFormatLeft" , url : "import { CgFormatLeft } from 'react-icons/cg';"},
    {isTitle : false , icon : <FaAws/> , tag : "FaAws" , url : "import { FaAws } from 'react-icons/fa';"},

    {isTitle : true , title : "Gym & Sports"},
    {isTitle : false  , icon : <TbGymnastics/> , tag : "TbGymnastics " , url : "import { TbGymnastics } from 'react-icons/tb';"},
    {isTitle : false  , icon : <CgGym/> , tag : "CgGym " , url : "import { CgGym } from 'react-icons/cg';"},
    {isTitle : false  , icon : <GiGymBag/> , tag : "GiGymBag " , url : "import { GiGymBag } from 'react-icons/gi';"},
    {isTitle : false  , icon : <PiVolleyballBold /> , tag : "PiVolleyballBold " , url : "import { PiVolleyballBold } from 'react-icons/pi';"},
    {isTitle : false  , icon : <TbBallVolleyball /> , tag : "TbBallVolleyball " , url : "import { TbBallVolleyball } from 'react-icons/tb';"},
    {isTitle : false  , icon : <TbSoccerField /> , tag : "TbSoccerField " , url : "import { TbSoccerField } from 'react-icons/tb';"},
    {isTitle : false  , icon : <PiSoccerBallFill /> , tag : "PiSoccerBallFill " , url : "import { PiSoccerBallFill } from 'react-icons/pi';"},
    {isTitle : false  , icon : <GiSoccerBall /> , tag : "GiSoccerBall " , url : "import { GiSoccerBall } from 'react-icons/gi';"},
    {isTitle : false  , icon : <MdOutlineSportsFootball /> , tag : "MdOutlineSportsFootball " , url : "import { MdOutlineSportsFootball } from 'react-icons/md';"},
    {isTitle : false  , icon : <MdSportsGolf /> , tag : "MdSportsGolf " , url : "import { MdSportsGolf } from 'react-icons/md';"},
    {isTitle : false  , icon : <MdSportsBasketball/> , tag : "MdSportsBasketball " , url : "import { MdSportsBasketball } from 'react-icons/md';"},
    {isTitle : false  , icon : <MdOutlineSportsBasketball/> , tag : "MdOutlineSportsBasketball " , url : "import { MdOutlineSportsBasketball } from 'react-icons/md';"},
    {isTitle : false  , icon : <MdOutlineSportsTennis/> , tag : "MdOutlineSportsTennis " , url : "import { MdOutlineSportsTennis } from 'react-icons/md';"},
    {isTitle : false  , icon : <MdSportsMma/> , tag : "MdSportsMma " , url : "import { MdSportsMma } from 'react-icons/md';"},
    {isTitle : false  , icon : <FaSwimmer/> , tag : "FaSwimmer " , url : "import { FaSwimmer } from 'react-icons/fa';"},


    // {isTitle : false , icon : </> , tag : "" , url : ""},
]
export const icons = datas.map((icon) => {
    return {id : crypto.randomUUID() , ...icon}
})




