import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brandName, brandImage, id } = brand;

  const navigate = useNavigate();

  const handleBrand = () => {
    navigate(`/brands/${id}`);
  };

  return (
    <div>
      <div
        onClick={handleBrand}
        className="relative mt-4  flex bg-white flex-col   shadow-md  rounded-xl bg-clip-border"
      >
        <div className="relative mx-4 my-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <p className="block font-sans text-center mb-4 text-2xl antialiased font-bold leading-relaxed text-blue-gray-900 text-[#EC6F66]">
            {brandName}
          </p>
          <img
            src={brandImage}
            className="object-cover w-full md:w-[500px] h-[280px] "
          />
        </div>
      </div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
