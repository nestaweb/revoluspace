import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, FadeInSection } from '@/components/components';

export default function MSteams() {
	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='msteams' />
				<FadeInSection>
				<HeroHeader
					title="Desk booking app integrated in"
					enhancedWords='MS Teams'
					description="Explore the comprehensive solution for seamless office collaboration and flexible office management, entirely integrated within Microsoft Teams"
					integration="msteams"
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
				<p className="text-3xl lg:text-5xl text-center font-semibold">Easy-to-use solution for <span className='purple-gradient'>hybrid work</span></p>
				</FadeInSection>
				<div className="flex gap-x-[5vw] flex-col lg:flex-row gap-y-8">
				<FadeInSection>
					<Card 
						title="Official partner"
						desc="Get together in the office"
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
			<FadeInSection>
			<p className="text-3xl lg:text-5xl text-center font-semibold mt-[20vh] lg:mt-[25vh] mb-[10vh] lg:mb-[15vh] w-5/6 mx-auto">Easy-to-use solution for <span className='purple-gradient'>Hybrid Work</span></p>
			</FadeInSection>
			<div className="flex flex-col gap-y-[15vh] my-10">
				<FadeInSection>
				<Card 
					title="Team coordination"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
				</FadeInSection>
				<FadeInSection>
				<Card 
					title="Desks Booking"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					direction="reverse"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
				</FadeInSection>
				<FadeInSection>
				<Card 
					title="Workplace Analytics"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
				</FadeInSection>
			</div>
			<div className="flex justify-center w-[90vw] mx-auto flex-col">
				<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold mt-[20vh] lg:mt-[25vh] mb-[15vh] w-5/6 mx-auto">Easy-to-use solution for <span className='purple-gradient'>Hybrid Work</span></p>
				</FadeInSection>
				<FadeInSection>
				<div className="flex flex-wrap mx-auto justify-center gap-3">
					<Card 
						title="Single Sign-On (SSO)"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						style='vertical'
						noImage
					/>
					<Card 
						title="User provisionning"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						style='vertical'
						noImage
					/>
					<Card 
						title="Interactive floorplans editor"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						style='vertical'
						noImage
					/>
					<Card 
						title="Roles and permissions management"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						style='vertical'
						noImage
					/>
					<Card 
						title="Hybrid work policy"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						style='vertical'
						noImage
					/>
					<Card 
						title="Customer support"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						style='vertical'
						noImage
					/>
				</div>
				</FadeInSection>
			</div>
			<FadeInSection>
			<Bottom 
				title="Get Started with"
				enhancedWords='Revoluspace'
			/>
			</FadeInSection>
			<Footer/>
		</div>
	)
}