import React from "react";

const Stories = () => {
  return (
    <div>
      <div className="flex gap-4 overflow-hidden">
        {listImages.map((url) => (
          <StoryItem key={url} image={url} />
        ))}
      </div>
    </div>
  );
};

const listImages = [
  "https://images.pexels.com/photos/26632788/pexels-photo-26632788/free-photo-of-a-woman-in-a-white-dress-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/17649492/pexels-photo-17649492/free-photo-of-orange-building-ceilings.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/26857128/pexels-photo-26857128/free-photo-of-purple-anthurium.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/26793658/pexels-photo-26793658/free-photo-of-a-black-and-white-dog-is-standing-on-top-of-a-hill.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/2323232/pixels-photo-2323232.jpeg",
];

type StoryProps = {
  image: string;
};

const StoryItem = ({ image }: StoryProps) => {
  return (
    <div className="h-52 rounded-lg flex-[1_0_23%] shadow-md overflow-hidden">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-full w-full bg-cover cursor-pointer hover:scale-110 transition-transform ease-out-in duration-500"
      ></div>
    </div>
  );
};

export default Stories;
