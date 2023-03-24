import React from "react";

export default function ThreePic() {
  return (
    <div className="grid grid-cols-3 justify-center gap-x-10 w-full ">
      <figure className="flex flex-col ">
        <div className=" relative flex-1 pt-[100%] ">
          <iframe
            src="https://player.vimeo.com/video/765066870?h=65a73fd082&loop=1&background=1&app_id=122963"
            className="top-0 left-0 absolute w-[100%] h-[100%]"
          ></iframe>
        </div>
        <figcaption>band</figcaption>
      </figure>
      <figure className="flex flex-col ">
        <div className=" relative flex-1 pt-[100%] ">
          <iframe
            src="https://player.vimeo.com/video/765066870?h=65a73fd082&loop=1&background=1&app_id=122963"
            className="top-0 left-0 absolute w-[100%] h-[100%] "
          ></iframe>
        </div>
        <figcaption className="text-center">band</figcaption>
      </figure>
      <figure className="flex flex-col">
        <div className=" relative flex-1 pt-[100%] ">
          <iframe
            src="https://player.vimeo.com/video/765066870?h=65a73fd082&loop=1&background=1&app_id=122963"
            className="top-0 left-0 absolute w-[100%] h-[100%]"
          ></iframe>
        </div>
        <figcaption>band</figcaption>
      </figure>
    </div>
  );
}
