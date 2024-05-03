import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, FadeInSection } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

interface IPricing {
	locale: string;
}

const Pricing: React.FC<IPricing> = ({ locale }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.pricing');
	const l = useTranslations('landing');

	const premiumFeature = [
		t('plans.plan_0.features.feature_0'),
		t('plans.plan_0.features.feature_1'),
		t('plans.plan_0.features.feature_2'),
		t('plans.plan_0.features.feature_3'),
		t('plans.plan_0.features.feature_4'),
		t('plans.plan_0.features.feature_5'),
		t('plans.plan_0.features.feature_6'),
	]

	const premiumNonFeature = [
		t('plans.plan_0.notIncluded.feature_0'),
		t('plans.plan_0.notIncluded.feature_1'),
		t('plans.plan_0.notIncluded.feature_2'),
	]

	const entrepriseFeature = [
		t('plans.plan_1.features.feature_0'),
		t('plans.plan_1.features.feature_1'),
		t('plans.plan_1.features.feature_2'),
		t('plans.plan_1.features.feature_3'),
		t('plans.plan_1.features.feature_4'),
		t('plans.plan_1.features.feature_5'),
		t('plans.plan_1.features.feature_6'),
		t('plans.plan_1.features.feature_7'),
		t('plans.plan_1.features.feature_8'),
		t('plans.plan_1.features.feature_9')
	]

	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='pricing' locale={locale} />
				<FadeInSection>
				<HeroHeader
					title={t('tagline.title')}
					enhancedWords={t('tagline.enhance')}
					description=""
					integration="msteams"
					noButtons
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
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center -translate-y-[25vh] lg:gap-x-[5vw] lg:flex-row flex-col gap-y-8 items-center lg:items-start">
				<FadeInSection>
				<Card 
					title={t('plans.plan_0.title')}
					desc={t('plans.plan_0.description')}
					style="pricing"
					price={t('plans.plan_0.price')}
					planFrequancy={t('plans.plan_0.planFrequency')}
					features={premiumFeature}
					pricingCTAtext={t('startfree')}
					nonFeatures={premiumNonFeature}
					seeSymbol
					locale={locale}
					IntegrationButtonText={t('add')}
					IntegrationButtonLink={{ slack: ``, msteams: `/${locale}/contact` }}
				/>
				</FadeInSection>
				<FadeInSection>
				<Card 
					title={t('plans.plan_1.title')}
					desc={t('plans.plan_1.description')}
					style="pricing"
					price={t('plans.plan_1.price')}
					features={entrepriseFeature}
					pricingCTAtext={t('contact')}
					locale={locale}
					noButtons
				/>
				</FadeInSection>
			</div>
			<FadeInSection>
			<Bottom 
				title={l('home.getstarted.title')}
				enhancedWords={l('home.getstarted.enhance')}
				locale={locale}
				className="-translate-y-[15vh]"
			/>
			</FadeInSection>
			<Footer locale={locale}/>
		</div>
	)
}

export default Pricing;