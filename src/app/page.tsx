import AddPost from "@/components/add-post";
import Feed from "@/components/feed";
import Stories from "@/components/Stories";

const Homepage = () => {
  return (
    <div className="w-full py-6 container flex mx-auto gap-10">
      <div className="basis-[18%] hidden xl:block">LeftMenu</div>
      <div className="flex-auto">
        <div className="flex flex-col">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="basis-[20%] hidden lg:block">Right Menu</div>
    </div>
  );
};

export default Homepage;
