import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, HubSpotForm } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
// import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
// import { HubspotProvider } from 'next-hubspot';

interface IContact {
	locale: string;
}

const Contact: React.FC<IContact> = ({ locale }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations('landing');
	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='contact' locale={locale} />
				<HeroHeader
					title={t('contact.tagline.title')}
					enhancedWords={t('contact.tagline.enhance')}
					description={t('contact.details')}
					noButtons
					locale={locale}
				/>
			</div>
			<div className="w-[30vh] h-[30vh] lg:w-[60vh] lg:h-[60vh] rounded-full bg-brand-violet-100 dark:bg-violet-700/50 lg:dark:bg-violet-700 absolute top-[10vh] -left-[15vh] lg:-left-[30vh] flex items-center justify-center shadow-[0_0px_100px] shadow-violet-600/40">
				<div className="w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] bg-brand-white dark:bg-gray-800 rounded-full">
					<div className="w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] bg-brand-white dark:bg-gray-800 rounded-full flex items-center justify-center">
						<Image
							src="/msteamLogo.png"
							width={500}
							height={500}
							className="w-[12vh] lg:w-[20vh] h-auto"
							alt="Revoluspace MS Teams Logo"
						/>
					</div>
				</div>
			</div>
			<div className={`w-[30vh] h-[30vh] lg:w-[60vh] lg:h-[60vh] rounded-full bg-brand-green-50 dark:bg-brand-green-600/40 absolute top-[30vh] -right-[15vh] lg:-right-[30vh] flex items-center justify-center shadow-[0_0px_100px] shadow-brand-green-600`}>
				<div className="w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] bg-brand-white dark:bg-gray-800 rounded-full">
					<div className="w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] bg-brand-white dark:bg-gray-800 rounded-full flex items-center justify-center">
						<Image
							src="/slackLogo.png"
							width={500}
							height={500}
							className="w-[12vh] lg:w-[20vh] h-auto -scale-100"
							alt="Revoluspace Slack Logo"
						/>
					</div>
				</div>
			</div>
			<div className='w-[90vw] lg:w-3/6 mx-auto -translate-y-[17.5vh] z-20 relative'>
				<HubSpotForm locale={locale}  />
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

export default Contact;