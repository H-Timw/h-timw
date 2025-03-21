"use client";
import {
  RiArrowRightSFill,
  RiArrowRightSLine,
  RiCloseFill,
  RiDiscordFill,
  RiExternalLinkLine,
  RiFolder3Fill,
  RiGamepadFill,
  RiMailFill,
  RiPhoneFill,
  RiTerminalFill,
  RiUser4Fill,
} from "@remixicon/react";
import { useState } from "react";
import styled from "styled-components";
import Bio from "./components/bio";

const AboutPageStyled = styled.div`
  input[type="checkbox"] + label {
    color: var(--color-theme-foreground);
    /* border-bottom: none !important; */
    .ht-dropdown {
      color: var(--color-primitive-slate-500);
      transform: rotate(0deg);
      transform-origin: center;
      transition: transform 0.15s linear;
    }
  }
  input[type="checkbox"]:checked + label {
    color: var(--color-heading-foreground);
    .ht-dropdown {
      color: var(--color-primitive-slate-50);
      transform: rotate(90deg);
      transform-origin: center;
    }
  }

  input[type="checkbox"] ~ .ht-sub-menu {
    height: 0px;
    padding: 0px;
    transform: scale(0);
    transform-origin: top left;
    transition: all 0.25s ease;
    overflow: hidden;
  }
  input[type="checkbox"]:checked ~ .ht-sub-menu {
    height: auto;
    padding: 12px;
    transform: scale(1);
  }
`;

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("userInfo");
  const [subTab, setActiveSubTab] = useState("bio");

  return (
    <AboutPageStyled className="flex flex-row items-start justify-start h-full w-full">
      <div className="flex flex-col items-center justify-start h-full gap-16 px-12 py-6 border-r border-(--color-theme-stroke)">
        <button
          type="button"
          onClick={() => setActiveTab("terminal")}
        >
          <RiTerminalFill
            size={24}
            className={
              activeTab === "terminal"
                ? "text-(--color-primitive-slate-300)"
                : "text-(--color-primitive-slate-500)"
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("userInfo")}
        >
          <RiUser4Fill
            size={24}
            className={
              activeTab === "userInfo"
                ? "text-(--color-primitive-slate-300)"
                : "text-(--color-primitive-slate-500)"
            }
          />
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("gamePad")}
        >
          <RiGamepadFill
            size={24}
            className={
              activeTab === "gamePad"
                ? "text-(--color-primitive-slate-300)"
                : "text-(--color-primitive-slate-500)"
            }
          />
        </button>
      </div>
      <div className="flex flex-col gap-0 h-full border-r border-(--color-theme-stroke) min-w-[253px]">
        <div className="flex flex-col items-center justify-start border-b border-(--color-theme-stroke)">
          <input
            type="checkbox"
            name="personal-info"
            id="personal-info"
            defaultChecked
            className="hidden"
          />
          <label
            htmlFor="personal-info"
            className="flex flex-row gap-6 cursor-pointer w-full items-center px-12 py-6 border-b border-(--color-theme-stroke)"
          >
            <RiArrowRightSFill
              size={16}
              className="ht-dropdown ht-main-menu"
            />
            <p className="text-md ">personal-info</p>
          </label>
          <div className="flex flex-col justify-start w-full ht-sub-menu">
            <input
              type="checkbox"
              name="bio"
              id="bio"
              className="hidden"
              onChange={(e) => {
                if (e?.target?.value) setActiveSubTab("bio");
              }}
            />
            <label
              htmlFor="bio"
              className="flex flex-row items-center gap-6 cursor-pointer"
            >
              <RiArrowRightSLine
                size={16}
                className="text-(--color-primitive-slate-500) ht-dropdown"
              />
              <div className="flex flex-row items-center gap-4">
                <RiFolder3Fill
                  size={16}
                  className="text-(--color-primitive-rose-400)"
                />
                <p className="text-md">bio</p>
              </div>
            </label>
            <input
              type="checkbox"
              name="interests"
              id="interests"
              className="hidden"
              onChange={(e) => {
                if (e?.target?.value) setActiveSubTab("interests");
              }}
            />
            <label
              htmlFor="interests"
              className="flex flex-row items-center gap-6 cursor-pointer"
            >
              <RiArrowRightSLine
                size={16}
                className="text-(--color-primitive-slate-500) ht-dropdown"
              />
              <div className="flex flex-row items-center gap-4">
                <RiFolder3Fill
                  size={16}
                  className="text-(--color-primitive-teal-400)"
                />
                <p className="text-md">interests</p>
              </div>
            </label>
            <input
              type="checkbox"
              name="education"
              id="education"
              className="hidden"
              onChange={(e) => {
                if (e?.target?.value) setActiveSubTab("education");
              }}
            />
            <label
              htmlFor="education"
              className="flex flex-row items-center gap-6 cursor-pointer"
            >
              <RiArrowRightSLine
                size={16}
                className="text-(--color-primitive-slate-500) ht-dropdown"
              />
              <div className="flex flex-row items-center gap-4">
                <RiFolder3Fill
                  size={16}
                  className="text-(--color-primitive-indigo-400)"
                />
                <p className="text-md">education</p>
              </div>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start border-b border-(--color-theme-stroke)">
          <input
            type="checkbox"
            name="contacts"
            id="contacts"
            defaultChecked
            className="hidden"
          />
          <label
            htmlFor="contacts"
            className="flex flex-row gap-6 w-full cursor-pointer items-center px-12 py-6 border-b border-(--color-theme-stroke)"
          >
            <RiArrowRightSFill
              size={16}
              className="ht-dropdown ht-main-menu"
            />
            <p className="text-md ">contacts</p>
          </label>
          <div className="flex flex-col justify-start w-full ht-sub-menu gap-4 text-(--color-theme-foreground)">
            <div className="flex flex-row items-center gap-4">
              <RiMailFill
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">timw051201@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <RiPhoneFill
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">(+84)0833-051-201</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <RiDiscordFill
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">Timw8469</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <input
            type="checkbox"
            name="other"
            id="other"
            defaultChecked
            className="hidden"
          />
          <label
            htmlFor="other"
            className="flex flex-row gap-6 cursor-pointer w-full items-center px-12 py-6 border-b border-(--color-theme-stroke)"
          >
            <RiArrowRightSFill
              size={16}
              className="ht-dropdown ht-main-menu"
            />
            <p className="text-md ">find-me-also-in</p>
          </label>
          <div className="flex flex-col justify-start gap-4 w-full ht-sub-menu text-(--color-theme-foreground)">
            <a
              href="https://www.freecodecamp.org/certification/timw8469/responsive-web-design"
              target="_blank"
              className="flex flex-row items-center gap-4"
            >
              <RiExternalLinkLine
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">FreeCodeCamp</p>
            </a>
            <a
              href="https://dev.to/htimw"
              target="_blank"
              className="flex flex-row items-center gap-4"
            >
              <RiExternalLinkLine
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">dev.to</p>
            </a>
            <a
              href="https://leetcode.com/u/timw0512"
              target="_blank"
              className="flex flex-row items-center gap-4"
            >
              <RiExternalLinkLine
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">LeetCode</p>
            </a>
            <a
              href="https://www.hackerrank.com/profile/timw051201"
              target="_blank"
              className="flex flex-row items-center gap-4"
            >
              <RiExternalLinkLine
                size={16}
                className="text-(--color-primitive-slate-500)"
              />
              <p className="text-md">HackerRank</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start h-full w-full">
        <div className="flex flex-row min-w-[242px] justify-between items-center gap-2 text-(--color-theme-foreground) border-r border-(--color-theme-stroke) px-12 py-6">
          <p className="text-md">{subTab}</p>
          <RiCloseFill size={16} />
        </div>
        <div className="flex flex-row items-center w-full justify-start border-t border-(--color-theme-stroke)">
          <Bio />
        </div>
      </div>
    </AboutPageStyled>
  );
}
