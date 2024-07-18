import React from "react";
//import Image from "next/image";

import imgSrc from "../../public/profile-dummy.png";
const AboutMe = () => {
  return (
    <div className="justify-start h-96 pb-40 ">
      <section>
        <div className="flex text-left">
          <img src={imgSrc} />
          <div className="px-5">
            <h1 className="w-full  ">About Me</h1>
            <p className="flex">
              Incididunt fugiat pariatur sit esse deserunt sunt cupidatat ut
              non. Lorem ea labore do quis reprehenderit adipisicing. Voluptate
              amet nisi et adipisicing nostrud voluptate exercitation. Culpa
              veniam culpa ad nulla. Quis sint dolor tempor amet et occaecat
              consectetur. Commodo dolore occaecat in minim sint eiusmod fugiat
              Lorem est ea in reprehenderit duis exercitation. Duis sunt
              cupidatat amet cillum est. Voluptate occaecat minim sit ea
              pariatur cupidatat esse. Qui ad enim deserunt ad ut amet esse.
              Pariatur proident ex commodo sit officia magna culpa. Lorem sunt
              consectetur exercitation exercitation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMe;
