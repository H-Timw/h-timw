import React from "react";

const myBio = `
/**\nAbout me\nI have 5 years of еxperience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat  nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.`;

export default function Bio() {
  return (
    <>
      <div className="flex flex-row gap-0 h-full flex-1 px-20 py-6">
        <div className="line-number flex flex-col"></div>
        <p className="text-lg text-(--color-theme-foreground) whitespace-pre-wrap">
          {myBio}
        </p>
      </div>
      <div className="flex flex-row gap-0 h-full flex-1">abv</div>
    </>
  );
}
