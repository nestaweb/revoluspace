"use client"
import React, { useState } from 'react';

interface IAccordionProps {
	qa: {
		question: string;
		answer: string;
	}[];
	className?: string;
}

const Accordion: React.FC<IAccordionProps> = ({ qa, className }) => {
const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
	return (
		<div className={`${className} w-11/12 lg:w-full mx-auto`}>
			{
				qa.map((item, index) => (
					<div id={`accordion-collapse-${index}`} key={`accordion-collapse-${index}`}>
						<h2 id={`accordion-collapse-heading-${index}`}>
							<button onClick={() => toggleAccordion(index)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
								<span>{item.question}</span>
								<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
								</svg>
							</button>
						</h2>
						<div id={`accordion-collapse-body-${index}`} className={`${openIndex === index ? 'block' : 'hidden'}`}>
							<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-brand-gray">
								<p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Accordion;