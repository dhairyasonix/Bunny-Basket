import featuresData from '../utils/features.json'

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#fdfaea]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
{featuresData.map((item)=>(
  <div key={item.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src={item.image}
            alt={item.label}
            className=" mb-4 w-14"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">
            {item.subtitle}
          </p>
        </div>

))}

        

       
      </div>
    </section>
  );
};

export default FeaturesSection;
