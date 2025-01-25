import React from 'react';
import HighlightedHeading from '../../components/HighlightedHeading';
import Simplicity from "../../assets/images/Simplicity.svg";
import Customer from "../../assets/images/Customer.svg";
import Transparency from "../../assets/images/Transparency.svg";
import Commitment from "../../assets/images/Commitment.svg";

const Ourvalue = () => {
  const valueCards = [
    {
      icon: Simplicity,
      title: 'Simplicity',
      description:
        'We aim to simplify WordPress and make it accessible to everyone, regardless of technical expertise.',
    },
    {
      icon: Customer,
      title: 'Customer-Centric',
      description:
        'Your success is our success. We are here to provide personalized support and guidance to help you achieve your goals.',
    },
    {
      icon: Transparency,
      title: 'Transparency',
      description:
        'We believe in clear, honest communication. Our services and pricing are transparent, with no hidden fees or gimmicks.',
    },
    {
      icon: Commitment,
      title: 'Commitment to Excellence',
      description:
        'We are dedicated to providing high-quality services and resources to ensure the best possible user experience.',
    },
  ];

  return (
    <section className="Our-value py-12">
      <div className="container mx-auto">
        <HighlightedHeading mainText="Our " highlightedText="Values " center={true} />
        <div className="flex justify-center items-center">
          <div className="max-w-3xl grid md:grid-cols-2 gap-6 mt-6">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-medium md:p-6 space-y-3 p-4 flex flex-col items-center shadow-main"
              >
                <img src={card.icon} alt={card.title} className='md:h-20 h-16' />
                <h3 className="font-bold text-primary md:text-basic text-medium  text-center">{card.title}</h3>
                <p className="text-primary text-center font-medium md:text-medium">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvalue;