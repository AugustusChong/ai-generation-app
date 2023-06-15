import { download } from "../assets";
import { downloadImage } from "../utils";
import type { CardProps, RenderCardsProps } from "../types";

export const Card = ({ _id, name, prompt, photo }: CardProps) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <img
              src={download}
              alt={download}
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export const RenderCards = ({ data, title }: RenderCardsProps) => {
  if (data?.length > 0) {
    return (
      <>
        {data.map((post) => (
          <Card key={post._id} {...post} />
        ))}
      </>
    );
  }

  return (
    <h2 className="mt-5 font-bold text-fontTertiary text-xl uppercase">
      {title}
    </h2>
  );
};
