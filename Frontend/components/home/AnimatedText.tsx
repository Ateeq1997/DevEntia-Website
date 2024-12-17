import React, { useEffect } from 'react';
import {
  FaAddressCard,
  FaChrome,
  FaCircleDollarToSlot,
  FaGamepad,
  FaHospitalUser,
  FaLaptop,
  FaMagnifyingGlassChart,
  FaMicrophone,
  FaMobile,
  FaPeopleRoof,
  FaSackDollar,
  FaTablet,
} from 'react-icons/fa6';
import { GrCloudSoftware, GrCompliance, GrTechnology } from 'react-icons/gr';
import { MdAccountBalance } from 'react-icons/md';
import { HiSpeakerphone } from 'react-icons/hi';
import {
  FaAmericanSignLanguageInterpreting,
  FaFirstAid,
  FaMouse,
  FaMousePointer,
  FaSafari,
  FaTripadvisor,
} from 'react-icons/fa';
import { LiaCommentDollarSolid } from 'react-icons/lia';
import { GiSatelliteCommunication } from 'react-icons/gi';
import icon from '../../assets/images/scss.webp';
import tialwind from '../../assets/images/tialwind.png';
import material from '../../assets/images/material.png';
import bootstrap from '../../assets/images/bootstrap.png';
import figma from '../../assets/images/figma.png';
import github from '../../assets/images/github.png';
import nextjs from '../../assets/images/nextjs.png';
import reactjs from '../../assets/images/reactjs.png';
import graphql from '../../assets/images/graphql.png';
import redux from '../../assets/images/redux.png';
import styles from '../../styles/AnimatedText.module.css';
import Image from 'next/image';

const AnimatedText = () => {
  const icons = [
    <FaLaptop key="laptop" className="text-[--home-hero-animation-text]" />,
    <Image key="figma" src={figma} alt="figma" />,
    <FaAmericanSignLanguageInterpreting
      key="asl"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="reactjs" src={reactjs} alt="reactjs" />,
    <FaPeopleRoof
      key="people-roof"
      className="text-[--home-hero-animation-text]"
    />,
    <FaMagnifyingGlassChart
      key="magnifying-glass"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="bootstrap" src={bootstrap} alt="bootstrap" />,
    <FaHospitalUser
      key="hospital-user"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="material" src={material} alt="material" />,
    <FaAddressCard
      key="address-card"
      className="text-[--home-hero-animation-text]"
    />,
    <FaCircleDollarToSlot
      key="circle-dollar"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="nextjs" src={nextjs} alt="next.js" />,
    <FaMicrophone
      key="microphone"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="redux" src={redux} alt="redux" />,
    <GrCloudSoftware
      key="cloud-software"
      className="text-[--home-hero-animation-text]"
    />,
    <GrCompliance
      key="compliance"
      className="text-[--home-hero-animation-text]"
    />,
    <GrTechnology
      key="technology"
      className="text-[--home-hero-animation-text]"
    />,
    <MdAccountBalance
      key="account-balance"
      className="text-[--home-hero-animation-text]"
    />,
    <HiSpeakerphone
      key="speakerphone"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="tailwind" src={tialwind} alt="tailwind" />,
    <FaFirstAid
      key="first-aid"
      className="text-[--home-hero-animation-text]"
    />,
    <LiaCommentDollarSolid
      key="comment-dollar"
      className="text-[--home-hero-animation-text]"
    />,
    <GiSatelliteCommunication
      key="satellite"
      className="text-[--home-hero-animation-text]"
    />,
    <FaSackDollar
      key="sack-dollar"
      className="text-[--home-hero-animation-text]"
    />,
    <Image key="github" src={github} alt="github" />,
    <FaTablet key="tablet" className="text-[--home-hero-animation-text]" />,
    <FaGamepad key="gamepad" className="text-[--home-hero-animation-text]" />,
    <Image key="scss" src={icon} alt="scss" />,
    <FaMobile key="mobile" className="text-[--home-hero-animation-text]" />,
    <FaTripadvisor
      key="tripadvisor"
      className="text-[--home-hero-animation-text]"
    />,
    <FaMousePointer
      key="mouse-pointer"
      className="text-[--home-hero-animation-text]"
    />,
    <FaMouse key="mouse" className="text-[--home-hero-animation-text]" />,
    <Image key="graphql" src={graphql} alt="graphql" />,
    <FaSafari key="safari" className="text-[--home-hero-animation-text]" />,
    <FaChrome key="chrome" className="text-[--home-hero-animation-text]" />,
  ];

  useEffect(() => {
    const flipWords = () => {
      const words = document.querySelectorAll(`.${styles.word}`);
      words.forEach((word, wordIndex) => {
        setTimeout(() => {
          word.classList.add(styles.flipped);
        }, (wordIndex + 1) * 1000);

        setTimeout(() => {
          word.classList.remove(styles.flipped);
        }, (wordIndex + 1) * 1000 + 4000);
      });
    };

    flipWords();
    const intervalId = setInterval(flipWords, 4000); // Repeat every 4 seconds
    return () => clearInterval(intervalId);
  }, []);

  let globalIconIndex = 0;

  return (
    <>
      {['Deventia', 'Scripting', 'Future', 'Technologies'].map(
        (word, wordIndex) => (
          <div
            className={`${styles.word} gap-0.5 space-y-0.5`}
            key={`word-${wordIndex}`}
          >
            {word.split('').map((letter, index) => {
              const iconElement = icons[globalIconIndex % icons.length];
              globalIconIndex += 1;

              return (
                <div
                  key={`${word}-${index}`}
                  className={`${styles.box} size-[30px] lg:size-[50px]`}
                  data-letter={letter}
                >
                  <div
                    className={`${styles.animation_icon} shadow-md rounded bg-[#4945f7] p-2 opacity-80`}
                  >
                    {iconElement}
                  </div>
                  <div
                    className={`${styles.letter} shadow-md rounded bg-[#4945f7]`}
                  >
                    {letter}
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </>
  );
};

export default AnimatedText;
