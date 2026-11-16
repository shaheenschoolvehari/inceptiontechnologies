'use client'
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavItems from "../NavItems/NavItems";
import { useRootContext } from "@/Provider/context";
import useScroll from "@/hooks/useScroll";

const { navItems, main_logo } = headerData;

const HeaderInnerCloned = () => {
  const [mounted, setMounted] = useState(false);
  const scrollTop = useScroll(130);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { handleToggle } = useRootContext();

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`main-header sticky-header sticky-header--normal sticky-header--cloned ${
        scrollTop ? " active " : ""
      }`}
    >
      <Container fluid>
        <div className='main-header__inner'>
          <div className='main-header__logo'>
            <Link href='/'>
              <Image
                src={main_logo}
                alt='Inception Technology'
                width={300}
                height={68}
                style={{ width: "auto", height: "68px", objectFit: "contain" }}
                priority
              />
            </Link>
          </div>

          <nav className='main-header__nav main-menu'>
            <ul className='main-menu__list'>
              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}
            </ul>
          </nav>
          <div className='main-header__right'>
            <div
              onClick={handleToggle}
              className='mobile-nav__btn mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderInnerCloned;
