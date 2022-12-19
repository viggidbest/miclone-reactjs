import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar';
import NavOptios from './component/NavOptios.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import  Slider  from './component/Slider';
import data from './data/data.json'
import Offers from './component/Offers.js'
import Heading from './component/Heading';
import StartProduct from './component/StartProduct';
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js'
import HotAccessories from './component/HotAccessories.js'
import ProductReviews from './component/ProductReviews.js'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'


const {banner} = data
const {offer} = data
const {starProduct}= data
const {hotAccessories} =data
const {hotAccessoriesCover} =data
const {productReviews} = data
const {videos} = data
const {footer} = data
const {miPhones} = data
const {redmiPhones} = data
const {tv} = data
const {laptop} = data 
const {fitnessAndLifeStyle} =data
const {home} = data
const {audio} = data

const {accessories} = data


function App() {
  return (
    <BrowserRouter >
     <PreNavbar />
     <Navbar />


     <NavOptios miPhones={miPhones} redmiPhones={redmiPhones} tv= {tv} laptop = {laptop} fitnessAndLifeStyle={fitnessAndLifeStyle} home={home}  audio={audio}  accessories={accessories}/>
    
    
     <Slider start={banner.start}/>
     <Offers offer={offer}/>
     <Heading text="Star Products"/>
     <StartProduct starProduct={starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu />
     <Routes>
     
      <Route path="/music" element={<HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music} />} />
          {/* <HotAccessories music={hotAccessories.music} hotAccessoriesCover={hotAccessoriesCover.music}/> */}

      <Route path="/smartdevice" element={<HotAccessories smartDevice={hotAccessories.smartDevice} smartDeviceCover={hotAccessoriesCover.smartDevice} />} />
      <Route path="/home" element={<HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home} />} />
      <Route path="/lifestyle" element={<HotAccessories lifestyle={hotAccessories.lifeStyle} lifestyleCover={hotAccessoriesCover.lifeStyle} />} />
      <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={hotAccessories.mobileAccessories} mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories} />} />

      
     </Routes>

    
     <Heading text="Product Reviews" />
    
     
    <ProductReviews productReviews={productReviews}/>
    <Heading text="Videos" />
    <Videos videos={videos}/>
    <Heading text="In The Press" />
    <Banner banner={banner}/>
    <Footer footer = {footer}/>
  
    </BrowserRouter>
  );
}

export default App;
