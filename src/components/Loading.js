import { DiamonLoading } from "react-loadingg";
import { MeteorRainLoading } from "react-loadingg";
import { CoffeeLoading } from "react-loadingg";

let Load = () => {
  return (
      <div>

    <div className="equation">Calculating... Please Wait...</div>
    <div className="loadingContainer">
      <div className="loadingThing">
        <DiamonLoading color="#DFAE9F" />
      </div>
      <div className="loadingThing">
        <MeteorRainLoading color="#DFAE9F" />
      </div>
      <div className="loadingThing">
        <CoffeeLoading color="#DFAE9F" />
      </div>
    </div>
      </div>
  );
};

export default Load;
