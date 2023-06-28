import { useEffect, useState } from "react";
import { FormField, Loader, RenderCards } from "../components";
import { sectionClassNames } from "../constants";
import type { IPostData } from "../types";

const ImageShowcase = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allPosts, setAllPosts] = useState<IPostData[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchedResults, setSearchedResults] = useState<IPostData[]>([]);
  const [searchTimeout, setSearchTimeout] = useState<number>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchWords = searchText.toLowerCase().split(" ");
        const searchResults = allPosts.filter((item) => {
          return (
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            searchWords.every((word) =>
              item.prompt.toLowerCase().split(" ").includes(word)
            )
          );
        });

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <section className={`${sectionClassNames} max-w-7xl mx-auto`}>
      <div>
        <h1 className="font-extrabold text-fontPrimary text-[32px]">
          Community Showcase
        </h1>
        <p className="mt-2 text-fontSecondary text-[16px] max-w-[500px] text-justify tracking-tight">
          Welcome to the community showcase! This is a place for you to browse
          through a collection of AI generated images created from the prompts
          of other users.
        </p>
      </div>

      <div className="mt-16">
        <FormField
          labelName="Search Posts"
          type="text"
          name="text"
          placeholder="Search Posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-fontSecondary text-xl mb-3">
                Showing results for{" "}
                <span className="text-fontPrimary">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={searchedResults} title="No results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ImageShowcase;
