import Image from 'next/image';
import { NavBar, Bottom, Footer, HubSpotForm } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

interface IContact {
	locale: string;
}

const ContactMSteams: React.FC<IContact> = ({ locale }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations('landing');
	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='contact-msteams' locale={locale} />
				<div className='grid grid-cols-2 w-full pt-[20vh] px-16 gap-8'>
					<div className='w-5/6 flex flex-col items-center gap-8'>
						<h1 className='text-3xl lg:text-4xl font-semibold text-brand-gray-500 text-center dark:text-brand-white'>{t('contact-msteams.tagline.title')} <span className='purple-gradient'>{t('contact-msteams.tagline.enhance')}</span></h1>
						<ul className='list-disc text-lg lg:text-xl text-brand-gray-500 dark:text-gray-300 w-10/12 mx-auto'>
							<li>{t('contact-msteams.l_0')}</li>
							<li>{t('contact-msteams.l_1')}</li>
							<li>{t('contact-msteams.l_2')}</li>
						</ul>
						<div className='w-4/6'>
							<Image 
								src="/RevoluspaceMSTeamsDeskBooking.jpg"
								width={1000}
								height={1000}
								alt='Revoluspace MS Teams Office management'
							/>
							<p className='text-lg lg:text-xl text-center text-brand-gray-500 dark:text-gray-300 w-10/12 mx-auto mt-4 font-medium'>{t('contact-msteams.img_0.title')}<span className='purple-gradient'>{t('contact-msteams.img_0.enhance')}</span></p>
						</div>
						<div className='w-4/6 mt-8'>
							<Image 
								src="/Revoluspace_MSTeams_Scheduling.jpg"
								width={1000}
								height={1000}
								alt='Revoluspace MS Teams Scheduling'
							/>
							<p className='text-lg lg:text-xl text-center text-brand-gray-500 dark:text-gray-300 w-10/12 mx-auto mt-4 font-medium'>{t('contact-msteams.img_1.title')}<span className='purple-gradient'>{t('contact-msteams.img_1.enhance')}</span></p>
						</div>
					</div>
					<div className='p-8 px-12 shadow-xl rounded-xl border h-fit'>
						<h2 className='text-lg lg:text-xl font-semibold text-center text-brand-violet-700 dark:text-gray-300 mb-4'>{t('contact-msteams.startfree')}</h2>
						<HubSpotForm locale={locale} msteams/>
						<div className='flex mx-auto w-full justify-center'>
							<div className='flex items-center flex-col justify-center'>
								<div className="flex items-center mb-2">
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
								</div>
								<Image
									src="/logo-capterra.svg"
									width={150}
									height={50}
									className="mx-auto h-12 flex items-center"
									alt='Capterra Logo'
								/>
							</div>
							<div className='flex items-center flex-col justify-center'>
								<div className="flex items-center mb-2">
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
									<svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
										<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
									</svg>
								</div>
								<Image
									src="/get-app.svg"
									width={150}
									height={50}
									className="mx-auto h-12 flex items-center"
									alt='GetApp Logo'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Bottom
				title={t('home.getstarted.title')}
				enhancedWords={t('home.getstarted.enhance')}
				locale={locale}
			/>
			<Footer/>
		</div>
	)
}

export default ContactMSteams;