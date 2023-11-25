import React from "react";
import HomeHeaderComponent from "../Headers/HomeHeaderComponent";
import PricingCardComponent from "../PricingCard/PricingCardComponent";

const EcommerceComponent = () => {
  const basicPricing = {
    title: "Basic",
    pricing: "₹ 20k",
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
        title: "  Seo Support",
      },
      {
        value: false,
        title: " 28 Day free update",
      },
    ],
  };
  const popularPricing = {
    title: "Popular",
    pricing: "₹ 15 k",
    pricingTime: "/Year",
    time:"For 3 Year",
    features: [
      {
        value: true,
        title: " Free handling for 3 year",
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
        title: "  Seo Support",
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
      <div className="mx-auto max-w-2xl pt-32 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our e-Commerce Plan's
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create your own e-commerce website
          </p>
        </div>
      </div>
      <div className="pcontainer mx-auto pb-32">
        <PricingCardComponent pricingCardData={basicPricing} />
        <PricingCardComponent pricingCardData={popularPricing} />
      </div>
    </div>
  );
};

export default EcommerceComponent;
