import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

import img1 from "/blue.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";
 

const Banner = () => {
    return (
       <div className='mt-6 mb-10'>
          <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={9000}
  >
    <div data-src={img1}> </div>
    <div data-src={img2}></div>
    <div data-src={img3}></div>
    <div data-src={img4}></div>
    <div data-src={img5}></div>
  </AutoplaySlider>
       </div>
    );
};

export default Banner;