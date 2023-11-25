import React from "react";
import HomeHeaderComponent from "../Headers/HomeHeaderComponent";
import PricingCardComponent from "../PricingCard/PricingCardComponent";
import { MyDialog } from "../Popup-contact/PopupContact";

const CustomWebsiteComponent = () => {
  const basicPricing = {
    title: "Basic",
    pricing: "₹ 1.5 k",
    pricingTime: "/Day",
    time: "Daily Charges",
    features: [
      {
        value: true,
        title: " Free handling for 1 year",
      },
      {
        value: true,
        title: " Free SSL security",
      },
      {
        value: true,
        title: " Free domain name (Website Name)",
      },
    ],
  };
  const standardPricing = {
    title: "Standard",
    pricing: "₹ 30 k",
    pricingTime: "/Monthly",
    time: "Monthly Charges",
    features: [
      {
        value: true,
        title: " Free handling for 1 year",
      },
      {
        value: true,
        title: " Free SSL security",
      },
      {
        value: true,
        title: " Free domain name (Website Name)",
      },
    ],
  };
  const popularPricing = {
    title: "Popular",
    pricing: "₹ 1 Lakh",
    pricingTime: "/6 Months",
    time: "Half Yearly Charges",
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
    ],
  };
  return (
    <div className="bg-white">
      <HomeHeaderComponent />
      {/* <MyDialog/> */}
      <div className="mx-auto max-w-2xl pt-32  ">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Custom Website Plan
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create your own custom website according to your plan. Specially For
            large software like EPR, CRM
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

export default CustomWebsiteComponent;
