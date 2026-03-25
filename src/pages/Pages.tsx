import { useEffect, useState } from "react";

import "./Pages.scss";

import { HomePage } from "./HomePage/HomePage";
import { AboutPage } from "./AboutPage/AboutPage";
import { CareerPage } from "./CareerPage/CareerPage";

export function Pages({
  currentPage,
  onPageChange,
}: {
  currentPage: string;
  onPageChange: (page: string) => void;
}) {
  useEffect(() => {
    const pages = document.querySelectorAll(
      ".pages [data-section-type='page']",
    ) as NodeListOf<HTMLElement>;

    pages.forEach((page) => {
      if (page.id === currentPage) {
        page.style.opacity = "1";
        page.style.pointerEvents = "auto";
      } else {
        page.style.opacity = "0";
        page.style.pointerEvents = "none";
      }
    });
  }, [currentPage]);

  return (
    <div className="grid-container pages">
      <HomePage onPageChange={onPageChange} />
      <AboutPage />
      <CareerPage />
    </div>
  );
}
