import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, FadeInSection } from '@/components/components';


export default function Slack() {
	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800">
			<div className="relative z-20">
				<NavBar current='slack' />
				<FadeInSection>
				<HeroHeader
					title="Desk booking app integrated in"
					enhancedWords='Slack'
					description="Encourage your teams to connect and optimize your spaces, all inside Slack"
					integration="slack"
				/>
				</FadeInSection>
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
			<div className="w-5/6 mx-auto flex flex-col gap-y-[15vh]">
				<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold">Easy-to-use solution for <span className='purple-gradient'>hybrid work</span></p>
				</FadeInSection>
				<div className="flex gap-x-[5vw] flex-col lg:flex-row gap-y-8">
				<FadeInSection>
					<Card 
						title="Get together in the office"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title="Simplify office management"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				<FadeInSection>
					<Card 
						title="Downsize your office with confidence"
						desc="No more commute regrets, by allowing people to schedule their week and see when their colleagues are coming in (deskbird)."
						imgUrl="/Demo MS Teams.svg"
						style='vertical'
					/>
				</FadeInSection>
				</div>
			</div>
			<FadeInSection>
			<p className="text-3xl lg:text-5xl text-center font-semibold mt-[25vh] mb-[15vh] w-5/6 mx-auto">Easy-to-use solution for <span className='purple-gradient'>Hybrid Work</span></p>
			</FadeInSection>
			<div className="flex flex-col gap-y-[15vh] my-10 w-[90vw] mx-auto">
			<FadeInSection>
				<Card 
					title="Faster weekly planning"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			<FadeInSection>
				<Card 
					title="Desk booking in just 2 clicks"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					direction="reverse"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			<FadeInSection>
				<Card 
					title="Rich Analytics"
					desc="Visualize, for each day of the week, which teammates and favorite co-workers are coming into the office"
					imgUrl="/Demo MS Teams.svg"
					IntegrationButtonText='Learn More'
					IntegrationButtonLink={{ slack: '/slack', msteams: '/msteams' }}
				/>
			</FadeInSection>
			</div>
			<div className="flex justify-center w-[90vw] mx-auto flex-col">
				<FadeInSection>
				<p className="text-3xl lg:text-5xl text-center font-semibold mt-[25vh] mb-[15vh] w-5/6 mx-auto">Easy-to-use solution for <span className='purple-gradient'>Hybrid Work</span></p>
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