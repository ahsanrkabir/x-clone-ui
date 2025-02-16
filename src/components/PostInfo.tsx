import Image from "@/components/Image";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image
        path="/antisocial/icons/infoMore.svg"
        alt="post info"
        w={16}
        h={16}
      />
    </div>
  );
};

export default PostInfo;
