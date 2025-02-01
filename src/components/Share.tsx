import Image from "@/components/Image";

const Share = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* USER AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="/general/avatar.png"
          alt="user avatar"
          w={100}
          h={100}
          tr
        />
      </div>

      {/* SHARE INPUT & OTHER OPTIONS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What's the word, humming bird?"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Image
              path="/icons/image.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>

          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
