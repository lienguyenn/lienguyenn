import React from "react";

function Header() {
  return (
    <div className="">
      <div className="font-light">
        As a QA Engineer, I enjoy conducting and learning more about software
        testing. I am highly responsible and trustworthy. I take it upon myself
        to fulfill what I have promised to others. To me, it is important to
        show kindness unto others, so I portray this by performing good gestures
        to my team members and the people around me.
      </div>

      <h3 className="text-6xl mt-5 font-bold">LIEN NGUYEN</h3>

      <div className="flex items-center gap-5 mt-3">
        <div className="text-gray-200 text-sm">
          <a className="mr-5" href="callto:+6596992997">
            +65 9699 2997
          </a>
          <a className="mr-5" href="mailto:bichlien.nguyens@gmail.com">
            bichlien.nguyens@gmail.com
          </a>
          <a
            className="mr-5"
            href="https://www.linkedin.com/in/nguyenbichlien/"
          >
            LinkedIn
          </a>
        </div>

        {/* <div className="h-[1px] bg-white flex-1"></div> */}
      </div>
    </div>
  );
}

export default Header;
