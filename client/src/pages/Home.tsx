import { Link } from "react-router-dom";
import { sectionClassNames } from "../constants";

const Home = () => {
  return (
    <section className={`${sectionClassNames}`}>
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
    </section>
  );
};

export default Home;
