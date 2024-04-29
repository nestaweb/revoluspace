"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { useWindowDimensions } from '@/hooks/useWindowsDimensions';
import {useTranslations} from 'next-intl';

interface INavBarProps {
	locale: string;
	current?: 'home' | 'slack' | 'msteams' | 'pricing' | 'contact' | 'legal' | 'general-terms' ;
}

const NavBar: React.FC<INavBarProps> = ({ current, locale }) => {

	const currentColor = "block py-2 px-3 md:p-0 text-brand-violet-700 md:dark:text-violet-500 ease-in-out duration-200";
	const linkColor = "block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-brand-violet-700 md:dark:hover:text-violet-500 dark:text-brand-white dark:hover:text-brand-white dark:border-gray-700 ease-in-out duration-200";

	const { isPhone } = useWindowDimensions();
	// const isPhone = false;

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	// const isMenuOpen = false;
	const t = useTranslations('landing');

	return (
		<nav className="border-gray-200 absolute w-full top-0 left-0 right-0 py-4">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center space-x-3 rtl:space-x-reverse relative z-40">
					<Image 
						src="/logo-text.svg" 
						width={500}
						height={500} 
						className="h-12 w-[20vw] dark:invert"
						alt="Revoluspace Logo" 
						priority
					/>
				</div>
				<div className="flex md:order-2 gap-x-4 w-[40vw] lg:w-[20vw] justify-end lg:justify-center items-center">
					<p className='flex gap-2 relative z-40'>
						<Link href={`/fr/${current == "home" ? "" : current}`} locale="fr">
							<button className={`${locale == "fr" ? "font-semibold" : "font-light hover:text-brand-violet-700"} ease-in-out duration-200`}>Fr</button>
						</Link>
						|
						<Link href={`/en/${current == "home" ? "" : current}`} locale="en">
							<button className={`${locale == "en" ? "font-semibold" : "font-light hover:text-brand-violet-700"} ease-in-out duration-200`}>En</button>
						</Link>
					</p>
					{
						!isPhone ?
						<Link href={`/${locale}/contact`} >
							<button type="button" className="text-brand-white bg-brand-violet-700 hover:bg-violet-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-violet-600 dark:hover:bg-brand-violet-700 ease-in-out duration-200">{t('navigation.bookademo')}</button>
						</Link>
						:
						<>
							<button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-cta" type="button" className="flex flex-col items-end gap-y-[0.55rem] w-9 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 relative z-40" >
								<div className={`${isMenuOpen ? "rotate-45" : "rotate-0"} origin-left w-full h-1 bg-brand-gray-500 dark:bg-brand-gray-200 rounded-full ease-linear duration-200`}></div>
								<div className={`${isMenuOpen ? "opacity-0 translate-x-[100%]" : "opacity-1 translate-x-0"} w-full h-1 bg-brand-gray-500 dark:bg-brand-gray-200 rounded-full ease-linear duration-200`}></div>
								<div className={`${isMenuOpen ? "-rotate-45" : "rotate-0"} origin-left w-full h-1 bg-brand-gray-500 dark:bg-brand-gray-200 rounded-full ease-linear duration-200`}></div>
							</button>
							<div className={`${isMenuOpen ? "right-0" : "-right-[100%]"} fixed max-h-screen w-screen h-screen max-w-screen top-0 bg-brand-white dark:bg-gray-800 md:hidden ease-linear duration-200 z-30`} id="navbar-cta">
								<ul className="flex absolute text-xl top-0 left-0 flex-col items-center justify-center h-full w-full m-0 font-semibold gap-y-8 z-30">
									<li>
										<Link href={`/${locale}`} locale={locale} className={current == "home" ? currentColor : linkColor}>{t('navigation.home')}</Link>
									</li>
									<li>
										<Link href={`/${locale}/slack`} locale={locale} className={current == "slack" ? currentColor : linkColor}>{t('navigation.slack')}</Link>
									</li>
									<li>
										<Link href={`/${locale}/msteams`} locale={locale}  className={current == "msteams" ? currentColor : linkColor}>{t('navigation.msteams')}</Link>
									</li>
									<li>
										<Link href={`/${locale}/pricing`} locale={locale}  className={current == "pricing" ? currentColor : linkColor}>{t('navigation.pricing')}</Link>
									</li>
								</ul>
							</div>
						</>
					}
				</div>
				<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
						<li>
							<Link href={`/${locale}`} className={current == "home" ? currentColor : linkColor}>{t('navigation.home')}</Link>
						</li>
						<li>
							<Link href={`/${locale}/slack`}  className={current == "slack" ? currentColor : linkColor}>{t('navigation.slack')}</Link>
						</li>
						<li>
							<Link href={`/${locale}/msteams`}  className={current == "msteams" ? currentColor : linkColor}>{t('navigation.msteams')}</Link>
						</li>
						<li>
							<Link href={`/${locale}/pricing`}  className={current == "pricing" ? currentColor : linkColor}>{t('navigation.pricing')}</Link>
						</li>
					</ul>
				</div>
			</div>
	 	</nav>
	  );
};

export default NavBar;