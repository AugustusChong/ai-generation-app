import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link
      to="/image-showcase"
      className="font-inter font-medium bg-buttonPrimary text-white px-4 py-2 rounded-md"
    >
      Image Showcase
    </Link>
  );
};

export default Home;
