"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

const StackSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = (row as HTMLElement).querySelector(
        ".card-left"
      ) as HTMLElement;
      const cardRight = (row as HTMLElement).querySelector(
        ".card-right"
      ) as HTMLElement;

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotationValues[index]
            }deg)`;

            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotationValues[index]
            }deg)`;
          },
        },
      });
    });

    gsap.to(".stack-info p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".main button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row relative hidden md:flex justify-center gap-4 w-full" key={i}>
          <div className="relative rounded-3xl overflow-hidden w-[50%] md:w-[30%] h-[70px] md:h-[360px] card-left">
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url(/images/stack/stack-${2 * i - 1}.jpg)`,
              }}
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden  w-[50%] md:w-[30%] h-[70px] md:h-[360px] card-right">
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url(/images/stack/stack-${2 * i}.jpg)`,
              }}
            />
          </div>
        </div>
      );
    }

    return rows;
  };
  return (
    <section className="main max-container relative flex flex-col justify-center overflow-x-hidden items-center">
      <h2 className="py-4 md:py-10 text-3xl md:text-5xl font-semibold text-center">
        Languages,Frameworks <br /> & other
        Tools
      </h2>
      <div className="md:hidden mb-4 flex px-6 items-center gap-5 overflow-x-auto min-h-[200px] hideScrollBar snapxParent">
  <Image src='/images/stack/stack-1.jpg' alt="stack" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
  <Image src='/images/stack/stack-2.jpg' alt="stack" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
  <Image src='/images/stack/stack-3.jpg' alt="stack" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
  <Image src='/images/stack/stack-4.jpg' alt="stack" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
  <Image src='/images/stack/stack-5.jpg' alt="stack" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
  <Image src='/images/stack/stack-6.jpg' alt="stack" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
</div>

      {generateRows()}
    </section>
  );
};

export default StackSection;
