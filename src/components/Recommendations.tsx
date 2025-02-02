import Link from "next/link";

import Image from "@/components/Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="/antisocial/general/avatar.png"
              alt="user"
              w={100}
              h={100}
              tr
            />
          </div>
          <div className="">
            <h2 className="text-md font-bold">John Doe</h2>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="/antisocial/general/avatar.png"
              alt="user"
              w={100}
              h={100}
              tr
            />
          </div>
          <div className="">
            <h2 className="text-md font-bold">John Doe</h2>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>

      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
