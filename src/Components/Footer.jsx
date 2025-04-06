import footerData from "../utils/footer.json";

const Footer = () => {
  const { links, socialMedia, brand,copyright,payments } = footerData;
  console.log(footerData);
  const { name, tagline } = brand;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 pt-16 pb-8 px-20 bg-amber-200">
      <div className="col-span-1 flex flex-col justify-between pr-40">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p>{tagline}</p>

        <div className="flex mt-4 ">
          {socialMedia.map((item) => (
            <a
              className="p-2 mr-4 bg-white  items-center justify-center rounded-md shadow-md  hover:shadow-lg hover:shadow-[#6B3B0A]/50 transition-shadow duration-300 hover:bg-[#6b3b0a] group "
              key={item.platform}
              href={item.url}
            >
              {" "}
              <img
                className="w-5 h-5 group-hover:invert"
                src={item.icon}
                alt={item.platform}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-2 flex flex-wrap justify-between gap-8 pl-32">
        {Object.keys(links).map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-2 text-lg">{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
            <ul className="text-gray-600 space-y-1">
              {links[section].map((link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="col-span-3 flex justify-between items-center mt-12">
<h4>{copyright.text}</h4>
<div className="flex">
{payments.map((item)=>(
<img className="w-10 ml-4 rounded-xs" src={item} alt={item} />
))}
</div>
      </div>
    </div>
  );
};

export default Footer;
