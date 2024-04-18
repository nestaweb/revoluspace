"use client"
import { useState, useEffect } from "react";

export const getWindowDimensions = () => {
	if (typeof window === "undefined") {
		return {
		width: 0,
		height: 0,
		};
	}
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const getScreenDimensions = () => {
	if (typeof window === "undefined") {
		return getWindowDimensions();
	}
	const screen = window.screen;

	if (!screen) {
		return getWindowDimensions();
	}

	return {
		width: screen.width,
		height: screen.height,
	};
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getScreenDimensions()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getScreenDimensions());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isPhone: 768 > windowDimensions.width, isTablet: 1024 > windowDimensions.width && windowDimensions.width >= 768, width: windowDimensions.width};
}
