import { useState } from "react";
import { motion } from "framer-motion";

type Frequency = "monthly" | "yearly";

const donationPlans = [
  {
    id: "topaz",
    name: "Topaz",
    price: 999,
    image: "/assets/j.png",
    shares: "10 Shares",
    verse: "Job 28:19",
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
    price: 1999,
    image: "/assets/ja.png",
    shares: "20 Shares + Bonus",
    verse: "Exodus 24:10",
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
    price: 2999,
    image: "/assets/be.png",
    shares: "30 Shares + Bonus",
    verse: "Revelation 4:3",
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
    price: 3999,
    image: "/assets/am.png",
    shares: "40 Shares + Bonus",
    verse: "Proverbs 31:10",
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
    price: 4999,
    image: "/assets/sapphirestone.png",
    shares: "50 Shares + Bonus",
    verse: "Exodus 28:18",
    features: [
      "All Ruby benefits",
      "Maximum bonus shares",
      "Founding Diamond Partner",
      "Lifetime recognition",
      "Strategic advisory access",
    ],
  },
];

export default function Donation() {
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>("sapphire");

  return (
    <div className="py-20 bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Frequency Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 flex shadow-md">
            <button
              onClick={() => setFrequency("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                frequency === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setFrequency("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                frequency === "yearly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly (20% Off)
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {donationPlans.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;
            const displayPrice =
              frequency === "yearly"
                ? plan.price * 12 * 0.8
                : plan.price;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedPlan(plan.id)}
                className="cursor-pointer"
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl border-2 p-6 transition ${
                    isSelected
                      ? "bg-white border-blue-500 shadow-xl scale-105"
                      : "bg-white/90 hover:bg-white hover:border-blue-400"
                  }`}
                >
                  <div>
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-500 italic">
                        {plan.verse}
                      </p>
                    </div>

                    <div className="flex justify-center mb-6">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    <div className="text-center mb-4">
                      <span className="text-sm font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                        {plan.shares}
                      </span>
                    </div>

                    <div className="text-center mb-6">
                      <span className="text-2xl font-bold">
                        ${displayPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">
                        /{frequency === "yearly" ? "yr" : "mo"}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-500">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
                    Select Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
