import React from "react";

interface TitleProps {
  title: string;
  des: string;
  titleStyle?: React.CSSProperties; // Optional prop
  descriptionStyle?: React.CSSProperties; // Optional prop
}

const Title: React.FC<TitleProps> = ({
  title,
  des,
  titleStyle,
  descriptionStyle,
}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont">
      <h3
        style={titleStyle}
        className="uppercase font-bold text-designColor tracking-wide mt-10"
      >
        {title}
      </h3>
      <h1
        style={descriptionStyle}
        className="text-gray-300 font-semibold capitalize"
      >
        {des}
      </h1>
    </div>
  );
};

export default Title;
