"use client";

import Link from "next/link";
import css from "./TagsMenu.module.css";
import { useState } from "react";

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toogle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toogle}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              href={`notes/filter/all`}
              className={css.menuLink}
              onClick={toogle}
            >
              All notes
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              href={`notes/filter/Work`}
              className={css.menuLink}
              onClick={toogle}
            >
              Work
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              href={`notes/filter/Personal`}
              className={css.menuLink}
              onClick={toogle}
            >
              Personal
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              href={`notes/filter/Meeting`}
              className={css.menuLink}
              onClick={toogle}
            >
              Meeting
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              href={`notes/filter/Shopping`}
              className={css.menuLink}
              onClick={toogle}
            >
              Shopping
            </Link>
          </li>
          <li className={css.menuItem}>
            <Link
              href={`notes/filter/Todo`}
              className={css.menuLink}
              onClick={toogle}
            >
              Todo
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
