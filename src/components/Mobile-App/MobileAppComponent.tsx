import React from "react";
import HomeHeaderComponent from "../Headers/HomeHeaderComponent";
import PricingCardComponent from "../PricingCard/PricingCardComponent";

const MobileAppComponent = () => {
  const basicPricing = {
    title: "Basic",
    pricing: "₹ 15 k",
    pricingTime: "/Year",
    time:"For 1 Year",
    features: [
      {
        value: true,
        title: " Free handling for 1 year",
      },
      {
        value: false,
        title: " 28 Day free update",
      },
    ],
  };
  const standardPricing = {
    title: "Standard",
    pricing: "₹ 12 k",
    pricingTime: "/Year",
    time:"For 2 Year",
    features: [
      {
        value: true,
        title: " Free handling for 2 year",
      },

      {
        value: false,
        title: " 28 Day free update",
      },
    ],
  };
  const popularPricing = {
    title: "Popular",
    pricing: "₹ 10 k",
    pricingTime: "/Year",
    time:"For 4 Year",
    features: [
      {
        value: true,
        title: " Free handling for 4 year",
      },

      {
        value: false,
        title: " 28 Day free update",
      },
    ],
  };
  return (
    <div className="bg-white">
      <HomeHeaderComponent />
      <div className="mx-auto max-w-2xl pt-32  ">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Mobile App Plan
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create your own Mobile App
          </p>
        </div>
         
      </div>
      <div className="pcontainer pb-32 mx-auto">
        
        <PricingCardComponent pricingCardData={basicPricing} />
        <PricingCardComponent pricingCardData={standardPricing} />
        <PricingCardComponent pricingCardData={popularPricing} />
      </div>
    </div>
  );
};

export default MobileAppComponent;
