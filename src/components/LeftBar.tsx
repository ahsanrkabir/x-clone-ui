import Link from "next/link";

import Image from "@/components/Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-3 pb-8">
      {/* LOGO + NAVLINKS + POST BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-hoverGray">
          <Image path="/antisocial/icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>

        <div className="flex flex-col gap-2">
          {menuList.map(({ id, name, link, icon }) => (
            <Link
              key={id}
              href={link}
              className="p-2 rounded-full hover:bg-hoverGray flex items-center gap-4"
            >
              <Image
                path={`/antisocial/icons/${icon}`}
                alt={name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{name}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image
            path="/antisocial/icons/post.svg"
            alt="new post"
            w={24}
            h={24}
          />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>

      {/* USER INFO */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path="/antisocial/general/avatar.png"
              alt="avatar"
              w={100}
              h={100}
              tr
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ahsan kabir</span>
            <span className="text-sm text-textGray">@ahsanrkabir</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
