import { Route, Routes } from "react-router-dom";
import { Home, ImageShowcase, CreatePost, GPTChat } from "../pages";

const MainContent = () => {
  return (
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-showcase" element={<ImageShowcase />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/gpt-chat" element={<GPTChat />} />
      </Routes>
    </main>
  );
};

export default MainContent;
