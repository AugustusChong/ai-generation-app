import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link
        to="/image-showcase"
        className="font-inter font-medium bg-buttonPrimary text-white px-4 py-2 mr-4 rounded-md"
      >
        Image Showcase
      </Link>
      <Link
        to="/gpt-chat"
        className="font-inter font-medium bg-buttonPrimary text-white px-4 py-2 rounded-md"
      >
        GPT Chat
      </Link>
    </>
  );
};

export default Home;
