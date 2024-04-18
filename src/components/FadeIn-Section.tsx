"use client"
import React, { useRef, useEffect, useState } from 'react';

interface IFadeInSectionProps {
	children?: React.ReactNode;
}

const FadeInSection: React.FC<IFadeInSectionProps> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);
  
	useEffect(() => {
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			setIsVisible(true);
			observer.unobserve(domRef.current!);
		  }
		}, { threshold: 0.1 });
	  });
  
	  observer.observe(domRef.current!);
  
	  return () => observer.disconnect();
	}, [isVisible]);
  
	return (
	  <div
		ref= {domRef}
		className={` ${isVisible ? 'animate-fadeIn ' : 'opacity-0'}`}
	  >
		{children as React.ReactElement<any, string>}
	  </div>
	);
  };
  
  export default FadeInSection;