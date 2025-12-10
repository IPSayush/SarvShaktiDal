import React from 'react'
import { Users, Plus, HelpCircle, DollarSign, AlertCircle, Share2 } from 'lucide-react';
export default function HomeIconCards () {
  const cards = [
    {
      icon: Users,
      title: "Become Member",
      titleHindi: "सदस्य बनें",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: Plus,
      title: "Benefits of Membership",
      titleHindi: "सदस्यता के फ़ायदे",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: HelpCircle,
      title: "About Sarvashaktidal",
      titleHindi: "जानें सर्वशक्ति दल के बारे में",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: DollarSign,
      title: "Social Media",
      titleHindi: "सोशल मीडिया",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: HelpCircle,
      title: "About Janta Darbaar",
      titleHindi: "जानें जनता दरबार के बारे में",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: AlertCircle,
      title: "For Problem Solution",
      titleHindi: "समस्या निवारण हेतु",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: DollarSign,
      title: "To Donate",
      titleHindi: "दान करने हेतु",
      buttonText: "Sarva Shakti Dal"
    },
    {
      icon: Share2,
      title: "Share App",
      titleHindi: "ऐप शेयर करें",
      buttonText: "Sarva Shakti Dal"
    }
  ];

  return (
    <div className="min-h-screen  p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-between border border-gray-200"
              >
                <div className="flex flex-col items-center space-y-4 grow">
                  <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-base text-gray-600">
                      {card.titleHindi}
                    </p>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
                  {card.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
