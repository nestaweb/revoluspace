import { NavBar, HeroHeader, Bottom, Footer } from '@/components/components';
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
				<NavBar current='contact' locale={locale} />
				<HeroHeader
					title={t('contact-msteams.tagline.title')}
					enhancedWords={t('contact-msteams.tagline.enhance')}
					description={t('contact-msteams.details')}
					noButtons
					locale={locale}
				/>
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