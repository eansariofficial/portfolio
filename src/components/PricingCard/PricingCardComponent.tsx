import { CheckCircleIcon, NoSymbolIcon } from "@heroicons/react/24/outline";
import React from "react";

const PricingCardComponent = (props: Properties) => {
  return (
    <div className="pricingCardContainer rounded-xl">
      <div className=" h-1/4 bg-pBlue w-full flex flex-col rounded-xl items-center">
        <h2 className="text-3xl font-semibold text-white py-4">
          {props.pricingCardData.title}
        </h2>
        <div className="flex flex-col justify-around items-center h-full  bg-white w-95 rounded-t-xl">
          <span className="text-xl">{props.pricingCardData.time}</span>
          <span>
            <span className="text-2xl font-bold">
              {props.pricingCardData.pricing}
            </span>
            <span className="text-xl">{props.pricingCardData.pricingTime}</span>
          </span>
        </div>
      </div>
      <div className="flex items-center flex-col mt-5">
        <div>
          {props.pricingCardData.features.map((data, key) => {
            return (
              <div
                key={key}
                className="flex flex-row items-center justify-start  h-10"
              >
                {data.value ? (
                  <CheckCircleIcon color="green" height={20} />
                ) : (
                  <NoSymbolIcon color="red" height={20} />
                )}
                <span className="ml-3">{data.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center w-full justify-center h-16 mt-20">
      <button onClick={()=>{window.open("whatsapp://send?text=Hello World!")}} className="bookNowBtn">Book Now</button>

      </div>
    </div>
  );
};

export default PricingCardComponent;
interface Properties {
  pricingCardData: PricingCardData;
}
interface PricingCardData {
  title: string;
  pricing: string;
  time: string;
  pricingTime: string;
  features: Features[];
}
interface Features {
  value: boolean;
  title: string;
}
