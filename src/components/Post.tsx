import Image from "@/components/Image";
import PostInfo from "@/components/PostInfo";
import PostInteractions from "@/components/PostInteractions";
import { imagekit } from "@/utils";
import Video from "@/components/Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: {
    sensitive: boolean;
  };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("679fe702432c476416691f2d");

  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767B"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Ahsan kabir reposted</span>
      </div>

      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* AUTHOR AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="/antisocial/general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
            tr
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          {/* POST HEADER */}
          <div className="flex items-center justify-between gap-2">
            {/* AUTHOR INFO */}
            <div className="flex items-center flex-wrap gap-2">
              <h1 className="text-md font-bold">Ahsan Kabir</h1>
              <span className="text-textGray text-sm">@ahsanrkabir</span>
              <span className="text-textGray text-sm">1 day ago</span>
            </div>

            {/* POST OPTIONS */}
            <PostInfo />
          </div>

          {/* POST BODY -> TEXT & MEDIA */}
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            ipsum tempora! Ut nostrum quisquam assumenda dicta placeat, harum
            quo ullam.
          </p>

          {/* <Image path="/general/post.jpeg" alt="post" w={600} h={600} /> */}

          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt="post"
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}

          {/* POST INTERACTIONS */}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
