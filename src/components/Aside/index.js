import React from "react";
import { StyledAside } from "./style";
import Social from "../Socials";
import { AiFillHome,AiOutlineUser,AiFillBook,AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Aside = () => {
  return (
    <StyledAside>
      <div className="img-shadow">
        <img
          src="https://avatars.githubusercontent.com/u/42221297?v=4"
          alt=""
        />
      </div>
      <h4>KAĞAN COŞKUN</h4>
      <Social/>
      <ul className="menu">
        <li><a href="#home"><AiFillHome/>Home</a></li>
        <li><a href="#about"><AiOutlineUser/>About</a></li>
        <li><a href="#projects"><AiFillBook/>Projects</a></li>
        <li><a href="#contact"><AiOutlineMail/>Contact</a></li>
      </ul>
      <footer>
      <Link href="/admin-login">&copy; Kağan Coşkun</Link>
      </footer>
    </StyledAside>
  );
};

export default Aside;
