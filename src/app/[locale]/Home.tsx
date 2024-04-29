import Image from 'next/image';
import { NavBar, HeroHeader, Card, Accordion, Bottom, Footer, IntegrationButton, FadeInSection, Demo } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

interface IHome {
	locale: string;
}

const Home: React.FC<IHome> = ({ locale }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.home');

	const faqs = [
		{
			question: t('faqs.qa.qa_0.question'),
			answer: t('faqs.qa.qa_0.answer')
		},
		{
			question: t('faqs.qa.qa_1.question'),
			answer: t('faqs.qa.qa_1.answer')
		},
		{
			question: t('faqs.qa.qa_2.question'),
			answer: t('faqs.qa.qa_2.answer')
		},
		{
			question: t('faqs.qa.qa_3.question'),
			answer: t('faqs.qa.qa_3.answer')
		}
	]

	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative min-h-screen z-20">
				<NavBar current='home' locale={locale} />
				<FadeInSection>
					<HeroHeader
						title={t('tagline.title')}
						enhancedWords={t('tagline.enhance')}
						description={t('seo.description')}
						locale={locale}
					/>
				</FadeInSection>
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
							priority
						/>
					</div>
				</div>
			</div>
			<div className='w-[100vw] h-[100vh] absolute top-0 overflow-hidden'>	
				<div className={`w-[30vh] h-[30vh] lg:w-[60vh] lg:h-[60vh] rounded-full bg-brand-green-50 dark:bg-brand-green-600/40 absolute top-[30vh] -right-[15vh] lg:-right-[30vh] flex items-center justify-center shadow-[0_0px_100px] shadow-brand-green-600`}>
					<div className="w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] bg-brand-white dark:bg-gray-800 rounded-full">
						<div className="w-[20vh] h-[20vh] lg:w-[40vh] lg:h-[40vh] bg-brand-white dark:bg-gray-800 rounded-full flex items-center justify-center">
							<Image
								src="/slackLogo.png"
								width={500}
								height={500}
								className="w-[12vh] lg:w-[20vh] h-auto -scale-100"
								alt="Revoluspace Slack Logo"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
			<FadeInSection>
				{/* <video className='lg:w-4/6 w-5/6 h-auto mx-auto -translate-y-[15vh]' src="/Revoluspace_Scheduling.mp4" loop muted autoPlay></video> */}
			<Image 
				src="/Demo MS Teams.svg"
				width={500}
				height={500}
				className="lg:w-4/6 w-5/6 h-auto mx-auto -translate-y-[15vh]"
				alt="Revoluspace MSteams Demo"
				priority
			/>
			{/* <Demo locale={locale} /> */}
			</FadeInSection>
			<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold mt-0 lg:mt-[5vh] pb-16 lg:pb-[20vh] w-5/6 mx-auto">{t('easytouse.title')}<span className='purple-gradient capitalize'>{t('easytouse.enhance')}</span></p>
			</FadeInSection>
			<div className="flex flex-col gap-y-[15vh] my-6 lg:my-10 w-11/12 mx-auto">
			<FadeInSection>
				<Card 
					title={t('hor_cards.card_0.title')}
					desc={t('hor_cards.card_0.details')}
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText={t('about')}
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			<FadeInSection>
				<Card 
					title={t('hor_cards.card_1.title')}
					desc={t('hor_cards.card_1.details')}
					direction="reverse"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText={t('about')}
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			<FadeInSection>
				<Card
					title={t('hor_cards.card_2.title')}
					desc={t('hor_cards.card_2.details')}
					imgUrl="/Revoluspace_Analytics.png"
					IntegrationButtonText={t('about')}
					noborders
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			</div>
			<div className="w-5/6 py-[10vh] mt-[15vh] mx-auto flex flex-col gap-y-[15vh]">
				<FadeInSection>
					<p className="text-3xl lg:text-5xl text-center font-semibold">{t('smartofficesolution.title')}<span className='purple-gradient'>{t('smartofficesolution.enhance')}</span></p>
				</FadeInSection>
				<div className="flex gap-x-[5vw] flex-col lg:flex-row gap-y-8">
				<FadeInSection>
					<Card 
						title={t('ver_cards.card_2.title')}
						desc={t('ver_cards.card_2.details')}
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title={t('ver_cards.card_2.title')}
						desc={t('ver_cards.card_2.details')}
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title={t('ver_cards.card_2.title')}
						desc={t('ver_cards.card_2.details')}
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				</div>
			</div>
			<div className='w-5/6 lg:w-[90vw] mx-auto flex flex-col gap-y-[15vh] mt-[15vh]'>
				<FadeInSection>
					<p className="text-3xl lg:text-5xl text-center font-semibold">{t('smartandsecure.title')}<span className='purple-gradient'>{t('smartandsecure.enhance')}</span></p>
				</FadeInSection>
				<FadeInSection>
				<div className='w-full lg:gap-x-8 lg:w-[80vw] mx-auto flex justify-between flex-col lg:flex-row items-center lg:items-start gap-y-16'>
					<div className="flex flex-grow flex-col justify-between leading-norma w-full lg:w-[35vw] h-fit gap-y-6">
						<p className="mb-2 text-2xl lg:text-4xl font-semibold text-gray-900 dark:text-brand-white capitalize">{t('TrustRevoluspace.tagline.title')}<span className='purple-gradient capitalize'>{t('TrustRevoluspace.tagline.enhance')}</span></p>
						<p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">{t('TrustRevoluspace.details')}</p>
						<div className="flex gap-4 mt-5 flex-col items-center lg:flex-row">
							<IntegrationButton
								text={t('about')}
								integration="Slack"
								link={{ slack: '/slack', msteams: '/msteams' }}
							/>
							<IntegrationButton
								text={t('about')}
								integration="MS Teams"
								link={{ slack: '/slack', msteams: '/msteams' }}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-6 items-center">
						<Card
							title={t('TrustRevoluspace.text_cards.card_0.title')}
							desc={t('TrustRevoluspace.text_cards.card_0.details')}
							style='text'
							className='py-14 w-full'
						/>
						<Card
							title={t('TrustRevoluspace.text_cards.card_1.title')}
							desc={t('TrustRevoluspace.text_cards.card_1.details')}
							style='text'
							className='py-14 w-full'
						/>
						<Card
							title={t('TrustRevoluspace.text_cards.card_2.title')}
							desc={t('TrustRevoluspace.text_cards.card_2.details')}
							style='text'
							className='py-14 w-full'
						/>
						<Card
							title={t('TrustRevoluspace.text_cards.card_3.title')}
							desc={t('TrustRevoluspace.text_cards.card_3.details')}
							style='text'
							className='py-14 w-full'
						/>
					</div>
				</div>
				</FadeInSection>
			</div>
			<FadeInSection>
			<div className='w-5/6 lg:w-[90vw] mx-auto flex flex-col gap-y-[5vh] mt-[10vh] lg:mt-[15vh]'>
				<p className='text-3xl lg:text-5xl font-semibold text-center'>{t('faqs.tagline.title')}<span className='purple-gradient capitalize'>{t('faqs.tagline.enhance')}</span></p>
				<p className='text-center'>{t('faqs.details')}</p>
				<Accordion 
					qa={faqs}
				/>
			</div>
			</FadeInSection>
			<FadeInSection>
			<Bottom 
				title={t('getstarted.title')}
				enhancedWords={t('getstarted.enhance')}
				locale={locale}
			/>
			</FadeInSection>
			<Footer/>
		</div>
	);
}

export default Home;