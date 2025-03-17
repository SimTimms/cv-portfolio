import "./Tim.css";
import tim from "../../assets/tim.png";

export default function Tim() {
  return (
    <div className="tim-wrapper">
      <img src={tim} className="tim-img" />
      <img src={tim} className="tim-img-shadow" />
    </div>
  );
}
