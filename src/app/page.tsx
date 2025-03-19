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
  article,
  aside {
    z-index: 2;
  }
  aside.play-range {
    width: 500px;
    height: 470px;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      inset: 0;
      background: linear-gradient(
        to bottom right,
        rgba(23, 85, 83, 1),
        rgba(67, 217, 173, 0.13)
      );
      box-shadow: inset 0px 2px var(--color-primitive-slate-50);
      border: 1px solid var(--color-theme-stroke);
      border-radius: 8px;
      opacity: 0.7;
      z-index: 3;
    }
    .content {
      z-index: 4;
    }
  }
`;

export default function Home() {
  return (
    <HomePageStyled className="flex-1 flex flex-row gap-[146px] justify-center items-center h-full w-full">
      <article className="own-intro flex flex-col gap-[75px] font-[family-name:var(--font-fira-code)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-(--color-theme-foreground)">
              Hi all. I am
            </p>
            <h1 className="text-(--color-heading-foreground)">
              {`Doan Minh Hao`}
            </h1>
          </div>
          <div className="flex flex-row items-end gap-4">
            <h4 className="text-(--color-theme-foreground)">{`a.k.a`}</h4>
            <h1 className="text-(--color-primitive-yellow-200)">{`Timw`}</h1>
          </div>
          <h4 className="text-(--color-primitive-indigo-500)">{`> Front-end developer`}</h4>
        </div>
        <div className="flex flex-col gap-4 text-md text-(--color-theme-foreground)">
          <p>{`// complete the game to continue`}</p>
          <p>{`// find my profile on Github:`}</p>
          <p>
            <span className="text-(--color-primitive-indigo-500)">{`const `}</span>
            <span className="text-(--color-primitive-teal-400)">
              {`githubLink`}
            </span>
            <span className="text-(--color-heading-foreground)">{` = `}</span>
            <a
              target="_blank"
              href="https://github.com/H-Timw"
            >
              <span className="underline text-(--color-theme-link-foreground)">{`"https://github.com/H-Timw"`}</span>
            </a>
          </p>
        </div>
      </article>
      <aside className="play-range flex flex-col items-center justify-center px-4 py-4">
        <div className="content">
          <h5 className=" text-(--color-primitive-yellow-200)">{`Let some description or some small game, most proud project here !`}</h5>
        </div>
      </aside>
    </HomePageStyled>
  );
}
