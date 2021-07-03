import "./rangeSlider.css";
import Sliderr from "./Sliderr"
const RangeSlider = ({ title, symbol, From, To }) => {
  return (
    <div className="range-slider__wrapper">
      <p className="range-slider__title">{title} Range</p>
     <Sliderr/>
      <div className="range-slider__scope-wrapper">
        <div className="price-from__wrapper">
          <div className="range-slider__symbol">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="range-slider__scope">
            <span className="scope">{From}</span>
          </div>
        </div>
        <div className="price-to__wrapper">
          <div className="range-slider__symbol">
            <span className="symbol">{symbol}</span>
          </div>
          <div className="range-slider__scope">
            <span className="scope">{To}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RangeSlider;
