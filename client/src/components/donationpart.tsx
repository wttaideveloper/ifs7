import React, { useState } from "react";
import { motion } from "framer-motion";
import PayPalDonateButton from "@/components/PayPalDonateButton";
import topazImg from "@assets/j.png";
import sapphireImg from "@assets/ja.png";
import emeraldImg from "@assets/be.png";
import rubyImg from "@assets/am.png";
import diamondImg from "@assets/sapphirestone.png";

const plans = [
  {
    id: "topaz",
    name: "Topaz",
    verse: "Job 28:19",
    price: 999,
    shares: "10 Shares",
    image: topazImg,
    features: [
      "Entry-level equity in IBLU",
      "Foundational Supporter recognition",
      "Early access to updates",
      "Annual vision briefing",
    ],
  },
  {
    id: "sapphire",
    name: "Sapphire",
    verse: "Exodus 24:10",
    price: 1999,
    shares: "20 Shares + Bonus",
    image: sapphireImg,
    features: [
      "All Topaz benefits",
      "Bonus shares included",
      "Covenant Partner status",
      "Quarterly strategy updates",
      "Founders Page listing",
    ],
  },
  {
    id: "emerald",
    name: "Emerald",
    verse: "Revelation 4:3",
    price: 2999,
    shares: "30 Shares + Bonus",
    image: emeraldImg,
    features: [
      "All Sapphire benefits",
      "Enhanced bonus allocation",
      "Strategic Growth Partner",
      "Annual investor summit",
    ],
  },
  {
    id: "ruby",
    name: "Ruby",
    verse: "Proverbs 31:10",
    price: 3999,
    shares: "40 Shares + Bonus",
    image: rubyImg,
    features: [
      "All Emerald benefits",
      "Premium bonus shares",
      "Redeemer-Level Partner",
      "Executive briefings",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    verse: "Exodus 28:18",
    price: 4999,
    shares: "50 Shares + Bonus",
    image: diamondImg,
    features: [
      "All Ruby benefits",
      "Maximum bonus shares",
      "Founding Diamond Partner",
      "Lifetime recognition",
      "Strategic advisory access",
    ],
  },
];

export default function donationpart() {
  const [selectedType, setSelectedType] = useState("donate");
  const [selectedPlan, setSelectedPlan] = useState("sapphire");
  const [amount, setAmount] = useState("50");

  const donationAmount = Number(amount) || 0;

  return (
    <div className="min-h-screen bg-[#F9F5FF] p-6 md:p-10">
      {/* TOP BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-12">
       {/* DONATE */}
<button
  onClick={() => setSelectedType("donate")}
  className="w-full md:w-[600px] h-[180px] md:h-[240px] rounded-3xl bg-white p-[20px] shadow-lg transition"
>
  <div
    className={`w-full h-full rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold transition
    ${
      selectedType === "donate"
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        : "border-2 border-purple-400 text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
    }`}
  >
    Donate to the Cause
  </div>
</button>

{/* INVEST */}
<button
  onClick={() => setSelectedType("invest")}
  className="w-full md:w-[600px] h-[180px] md:h-[240px] rounded-3xl bg-white p-[20px] shadow-lg transition"
>
  <div
    className={`w-full h-full rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold transition
    ${
      selectedType === "invest"
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        : "border-2 border-purple-400 text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text"
    }`}
  >
    Invest in the Cause
  </div>
</button>


      </div>

      {/* DONATION UI */}
      {selectedType === "donate" && (
        <div className="flex justify-center items-center min-h-[60vh] px-4">
          <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl text-center">
            <h2 className="text-2xl font-semibold mb-6">
              Enter your donation amount
            </h2>

            <div className="relative mb-3">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-500 font-medium">
                $
              </span>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-2xl font-semibold text-center border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <p className="text-gray-500 mb-6">
              Minimum donation amount is $1
            </p>

            <div className="w-full min-h-[48px]">
              <PayPalDonateButton amount={donationAmount} />
            </div>

            <div className="mt-8 text-yellow-600 italic">
              <p>"God loves a cheerful giver."</p>
              <p className="mt-1">– 2 Corinthians 9:7</p>
            </div>
          </div>
        </div>
      )}

      {/* INVESTMENT PLANS */}
      {selectedType === "invest" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan) => {
            const selected = selectedPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`rounded-2xl p-6 shadow-lg cursor-pointer transition border
                ${
                  selected
                    ? "bg-gradient-to-b from-blue-200 to-purple-200 border-blue-500"
                    : "bg-white border-gray-200"
                }`}
              >
                <h2 className="text-xl font-bold text-center">
                  {plan.name}
                </h2>

                <p className="text-center text-gray-500 text-sm italic">
                  {plan.verse}
                </p>

                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-20 h-20 mx-auto my-4 object-contain"
                />

                <p className="text-center bg-blue-100 text-blue-600 rounded-full px-3 py-1 mb-3 text-sm">
                  {plan.shares}
                </p>

                <p className="text-center text-2xl font-bold mb-4">
                  ${plan.price.toLocaleString()}/mo
                </p>

                <ul className="text-sm space-y-2 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>

                <button
                  className={`w-full p-2 rounded-lg font-semibold transition
                  ${
                    selected
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {selected ? "Selected" : "Select Plan"}
                </button>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
