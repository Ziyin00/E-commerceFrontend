import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const ServiceData = [
    {
      id: 1,
      icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
      title: "Free Shipping",
      description: "Free Shipping On All Order",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
      title: "Safe Money",
      description: "30 Dats Money Back",
    },
    {
      id: 3,
      icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      id: 4,
      icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
      title: "Online Support 24/7",
      description: "Technical Support 24/7",
    },
  ];
  return (
    <div>
      <div className="container my-5 md:my-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap gap-y-8">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start gap-4 sm:flex-row"
            >
              {data.icon}
              <div>
                <h1 className="font-bold lg:text-xl">{data.title}</h1>
                <h1 className="text-sm text-gray-400">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
