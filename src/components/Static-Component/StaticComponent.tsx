import React from "react";
import HomeHeaderComponent from "../Headers/HomeHeaderComponent";
import PricingCardComponent from "../PricingCard/PricingCardComponent";

const StaticComponent = () => {
  const basicPricing = {
    title: "Basic",
    pricing: "₹ 5 k",
    pricingTime: "/Year",
    time:"For 1 Year",
    features: [
      {
        value: true,
        title: " Free handling for 1 year",
      },
      {
        value: true,
        title: " Free Sll security",
      },
      {
        value: true,
        title: " Free domain name (Website Name)",
      },
      {
        value: false,
        title: " 28 Day free update",
      },
    ],
  };
  const standardPricing = {
    title: "Standard",
    pricing: "₹ 8 k",
    pricingTime: "/Year",
    time:"For 2 Year",
    features: [
      {
        value: true,
        title: " Free handling for 2 year",
      },
      {
        value: true,
        title: " Free Sll security",
      },
      {
        value: true,
        title: " Free domain name (Website Name)",
      },
      {
        value: true,
        title: " 28 Day free update",
      },
    ],
  };
  const popularPricing = {
    title: "Popular",
    pricing: "₹ 7 k",
    pricingTime: "/Year",
    time:"For 4 Year",
    features: [
      {
        value: true,
        title: " Free handling for 4 year",
      },
      {
        value: true,
        title: " Free Sll security",
      },
      {
        value: true,
        title: " Free domain name (Website Name)",
      },
      {
        value: true,
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
            Our Static Website Plan
          </h1>
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

export default StaticComponent;
