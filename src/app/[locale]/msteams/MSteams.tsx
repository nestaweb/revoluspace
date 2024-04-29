import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, FadeInSection, Accordion } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

interface IMSteams {
	locale: string;
}

const MSteams: React.FC<IMSteams> = ({ locale }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.msteams');
	const l = useTranslations('landing');

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
		},
		{
			question: t('faqs.qa.qa_4.question'),
			answer: t('faqs.qa.qa_4.answer')
		}
	]

	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='msteams' locale={locale}/>
				<FadeInSection>
				<HeroHeader
					title={t('tagline.title')}
					enhancedWords={t('tagline.enhance')}
					description={t('details')}
					integration="msteams"
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
						/>
					</div>
				</div>
			</div>
			<div className="w-5/6 mx-auto flex flex-col gap-y-[15vh]">
				<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold">{t('advantages.title')}<span className='purple-gradient capitalize'>{t('advantages.enhance')}</span></p>
				</FadeInSection>
				<div className="flex gap-x-[5vw] flex-col lg:flex-row gap-y-8">
				<FadeInSection>
					<Card 
						title={t('hor_cards.card_0.title')}
						desc={t('hor_cards.card_0.description')}
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title={t('hor_cards.card_1.title')}
						desc={t('hor_cards.card_1.description')}
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title={t('hor_cards.card_2.title')}
						desc={t('hor_cards.card_2.description')}
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				</div>
			</div>
			<FadeInSection>
			<p className="text-3xl lg:text-5xl text-center font-semibold mt-[20vh] lg:mt-[25vh] mb-[10vh] lg:mb-[15vh] w-5/6 mx-auto">{t('allinonesolution.title')}<span className='purple-gradient capitalize'>{t('allinonesolution.enhance')}</span></p>
			</FadeInSection>
			<div className="flex flex-col gap-y-[15vh] my-10">
				<FadeInSection>
				<Card 
					title={t('ver_cards.card_0.title')}
					desc={t('ver_cards.card_0.description')}
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
				</FadeInSection>
				<FadeInSection>
				<Card 
					title={t('ver_cards.card_1.title')}
					desc={t('ver_cards.card_1.description')}
					direction="reverse"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
				</FadeInSection>
				<FadeInSection>
				<Card 
					title={t('ver_cards.card_2.title')}
					desc={t('ver_cards.card_2.description')}
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
				</FadeInSection>
			</div>
			<div className="flex justify-center w-[90vw] mx-auto flex-col">
				<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold mt-[20vh] lg:mt-[25vh] mb-[15vh] w-5/6 mx-auto">{t('manageyourflexible.title')}<span className='purple-gradient'>{t('manageyourflexible.enhance')}</span></p>
				</FadeInSection>
				<FadeInSection>
				<div className="flex flex-wrap mx-auto justify-center gap-3">
					<Card 
						title={t('gallerycards.card_0.title')}
						desc={t('gallerycards.card_0.description')}
						style='vertical'
						noImage
						className='w-full'
					/>
					<Card 
						title={t('gallerycards.card_1.title')}
						desc={t('gallerycards.card_1.description')}
						style='vertical'
						noImage
						className='w-full'
					/>
					<Card 
						title={t('gallerycards.card_2.title')}
						desc={t('gallerycards.card_2.description')}
						style='vertical'
						noImage
						className='w-full'
					/>
					<Card 
						title={t('gallerycards.card_3.title')}
						desc={t('gallerycards.card_3.description')}
						style='vertical'
						noImage
						className='w-full'
					/>
					<Card 
						title={t('gallerycards.card_4.title')}
						desc={t('gallerycards.card_4.description')}
						style='vertical'
						noImage
						className='w-full'
					/>
					<Card 
						title={t('gallerycards.card_5.title')}
						desc={t('gallerycards.card_5.description')}
						style='vertical'
						noImage
						className='w-full'
					/>
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
				title={l('home.getstarted.title')}
				enhancedWords={l('home.getstarted.enhance')}
				locale={locale}
			/>
			</FadeInSection>
			<Footer/>
		</div>
	)
}

export default MSteams;