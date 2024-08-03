import React from 'react'

const Title = ({title, des}) => {
  return (
    // <div className="feature">
    //   <h3>{title}</h3>
    //   <h1>{des}</h1>
    // </div>

    <div className="flex flex-col gap-4 font-titleFont">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5x1 text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title
