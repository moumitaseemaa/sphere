const CategoriesProductItem = ({ src, alt, title }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="size-[85px] rounded-full bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex justify-center items-center">
        <img src={src} alt={alt} />
      </div>
      <p className="font-['Montserrat'] font-medium text-lg text-[#2C2C2C] leading-[23.40px] max-w-[118px] text-center mt-6">
        {title}
      </p>
    </div>
  );
};

export default CategoriesProductItem;
