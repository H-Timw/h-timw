"use client";
import styled from "styled-components";

const HomePageStyled = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 780px;
    transform: translateX(50%);
    background-image: url("/home_bg_blur.svg");
    background-size: contain; // Or 'contain', 'repeat', etc.
    background-repeat: no-repeat;
    z-index: 1;
  }
`;

export default function Home() {
  return (
    <HomePageStyled className="flex-1 flex flex-row gap-[146px] justify-center items-center h-full w-full">
      <article className="own-intro flex-flex-column gap-[75px] font-[family-name:var(--font-fira-code)]">
        <div className="flex-flex-column gap-[8px]">
          <p className="text-lg text-(--color-theme-foreground)">
            Hi all. I am
          </p>
          <h1 className="text-(--color-heading-foreground)">
            {`Doan Minh Hao`}
          </h1>
          <h1 className="text-(--color-heading-foreground)">{`a.k.a Timw`}</h1>
          <h4 className="text-(--color-primitive-indigo-500)">{`> Front-end developer`}</h4>
        </div>
      </article>
      <aside></aside>
    </HomePageStyled>
  );
}
