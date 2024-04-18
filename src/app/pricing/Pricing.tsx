import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, FadeInSection } from '@/components/components';

export default function Pricing() {

	const premiumFeature = [
		"Secure Singke Sign-On (SSO)",
		"Unlimited users",
		"Weekly planning",
		"Desk booking",
		"Interactive floorplans",
		"Full Office analytics",
		"Support assistance",
	]

	const premiumNonFeature = [
		"Custom integrations",
		"Custom data privacy configuration",
		"Check-in options",
	]

	const entrepriseFeature = [
		"Secure Singke Sign-On (SSO)",
		"Unlimited users",
		"Weekly planning",
		"Desk booking",
		"Interactive floorplans",
		"Full Office analytics",
		"Support assistance",
		"Custom integrations",
		"Custom data privacy configuration",
		"Check-in options",
	]

	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='pricing' />
				<FadeInSection>
				<HeroHeader
					title="Eliminate the back and forth, bring your team"
					enhancedWords='Together'
					description=""
					integration="msteams"
					noButtons
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
					title="Standard"
					desc="Hybrid work solution for growing buisnesses"
					style="pricing"
					price="2"
					planFrequancy="per user /month"
					features={premiumFeature}
					pricingCTAtext="Start Free Trial"
					nonFeatures={premiumNonFeature}
					seeSymbol
				/>
				</FadeInSection>
				<FadeInSection>
				<Card 
					title="Entreprise"
					desc="Comprehensive, fully-customizable space management"
					style="pricing"
					price="On Request"
					features={entrepriseFeature}
					pricingCTAtext="Contact Us"
				/>
				</FadeInSection>
			</div>
			<FadeInSection>
			<Bottom 
				title="Get Started with"
				enhancedWords='Revoluspace'
				noButtons
				newsletter
			/>
			</FadeInSection>
			<Footer/>
		</div>
	)
}