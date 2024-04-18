import Image from 'next/image';
import { NavBar, HeroHeader, Card, Accordion, Bottom, Footer, IntegrationButton, FadeInSection } from '@/components/components';

export default function Home() {

	const faqs = [
		{
			question: 'Is there a setup fee?',
			answer: 'There is no setup fee for Revoluspace. You can get started with Revoluspace by signing up on our website and inviting your team members in less than 5 minutes. You can try Revoluspace for free for 14 days.'
		},
		{
			question: 'Will I be charged once I start the free trial?',
			answer: 'No. You can start a free trial without needing a payment method. If you choose to continue with paid features after the free trial, you will securely set up your payment method then (SKEDDA).'
		},
		{
			question: 'How does the free trial work?',
			answer: 'Try Revoluspace for free for 14 days. You can invite your team members and start using Revoluspace in less than 5 minutes. You can cancel your free trial at any time.'
		},
		{
			question: 'How is my monthly bill calculated?',
			answer: 'You will only for each active Revoluspace user, i.e. for users who have used the calendar during the month being billed. You can add or remove users at any time.'
		}
	]

	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative min-h-screen z-20">
				<NavBar current='home' />
				<FadeInSection>
					<HeroHeader
						title="Simplify"
						enhancedWords='Hybrid Work'
						description="Build stronger connection and improve office experience with a solution entirely integrated within slack and Microsoft Teams"
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
			<Image 
				src="/Demo MS Teams.svg"
				width={500}
				height={500}
				className="lg:w-4/6 w-5/6 h-auto mx-auto -translate-y-[15vh]"
				alt="Revoluspace MSteams Demo"
				priority
			/>
			</FadeInSection>
			<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold mt-0 lg:mt-[5vh] pb-16 lg:pb-[20vh] w-5/6 mx-auto">Easy-to-use solution for <span className='purple-gradient'>Hybrid Work</span></p>
			</FadeInSection>
			<div className="flex flex-col gap-y-[15vh] my-6 lg:my-10 w-11/12 mx-auto">
			<FadeInSection>
				<Card 
					title="Team coordination"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='About'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			<FadeInSection>
				<Card 
					title="Desks Booking"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					direction="reverse"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='About'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			<FadeInSection>
				<Card
					title="Workplace Analytics"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='About'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			</div>
			<div className="w-5/6 py-[10vh] mt-[15vh] mx-auto flex flex-col gap-y-[15vh]">
				<FadeInSection>
					<p className="text-3xl lg:text-5xl text-center font-semibold">Revoluspace is entirely integrated with <span className='purple-gradient'>your favorite tools</span></p>
				</FadeInSection>
				<div className="flex gap-x-[5vw] flex-col lg:flex-row gap-y-8">
				<FadeInSection>
					<Card 
						title="Official partner"
						desc="Revoluspace is an official partner of Microsoft and Slack"
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title="Secure authentification"
						desc="Simplify user access and enhance security with single sign-on (SSO) on Microsoft Teams and Slack"
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title="Fast set-up"
						desc="Invite your team members in a few clicks and start using Revoluspace in less than 5 minutes"
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				</div>
			</div>
			<div className='w-5/6 lg:w-[90vw] mx-auto flex flex-col gap-y-[15vh] mt-[15vh]'>
				<FadeInSection>
					<p className="text-3xl lg:text-5xl text-center font-semibold">Revoluspace ensure security for your <span className='purple-gradient'>hybrid teams</span></p>
				</FadeInSection>
				<FadeInSection>
				<div className='w-full lg:gap-x-8 lg:w-[80vw] mx-auto flex justify-between flex-col lg:flex-row items-center lg:items-start gap-y-16'>
					<div className="flex flex-grow flex-col justify-between leading-norma w-full lg:w-[35vw] h-fit gap-y-6">
						<p className="mb-2 text-2xl lg:text-4xl font-semibold text-gray-900 dark:text-brand-white capitalize">Trust Revoluspace with your <span className='purple-gradient'>Security and privacy</span></p>
						<p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">A simple, robust and powerful solution for achieving success at the entreprise level. We protect your data and offer the necessary informations and tools to fulfill your privacy obligations.</p>
						<div className="flex gap-4 mt-5 flex-col items-center lg:flex-row">
							<IntegrationButton
								text='About Slack'
								integration="Slack"
								link={{ slack: '/slack', msteams: '/msteams' }}
							/>
							<IntegrationButton
								text='About MS Teams'
								integration="MS Teams"
								link={{ slack: '/slack', msteams: '/msteams' }}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-6 items-center">
						<Card
							title="🔒 GDPR"
							desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							style='text'
							className='py-14 w-full'
						/>
						<Card
							title="⚖️ Access with single sign-on"
							desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							style='text'
							className='py-14 w-full'
						/>
						<Card
							title="🔑 Encrypted data"
							desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							style='text'
							className='py-14 w-full'
						/>
						<Card
							title="📞 24/7 support"
							desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
							style='text'
							className='py-14 w-full'
						/>
					</div>
				</div>
				</FadeInSection>
			</div>
			<FadeInSection>
			<div className='w-5/§ lg:w-[90vw] mx-auto flex flex-col gap-y-[5vh] mt-[10vh] lg:mt-[15vh]'>
				<p className='text-3xl lg:text-5xl font-semibold text-center purple-gradient uppercase'>faq</p>
				<Accordion 
					qa={faqs}
				/>
			</div>
			</FadeInSection>
			<FadeInSection>
			<Bottom 
				title="Get Started with"
				enhancedWords='Revoluspace'
			/>
			</FadeInSection>
			<Footer/>
		</div>
	);
}
