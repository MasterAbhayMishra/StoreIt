import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FileUploder } from "./FileUploder";
import { Search } from "./Search";


export const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploder/>
        <form>
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};
