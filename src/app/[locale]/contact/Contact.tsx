import Image from 'next/image';
import { NavBar, HeroHeader, Card, Bottom, Footer, HubSpotForm } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import ContactForm from './ContactForm';
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
					title="Contact us to"
					enhancedWords='Get Started'
					description="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
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
				{/* <HubspotProvider> */}
					<HubSpotForm locale={locale}  />
				{/* </HubspotProvider> */}
				
				{/* <form action="#" className="space-y-8 z-10 relative">
					<div className='flex gap-4'>
						<div className='w-1/2'>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 relative z-10">First Name</label>
							<input type="text" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative z-10" placeholder="John" required />
						</div>
						<div className='w-1/2'>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 relative z-10">Last Name</label>
							<input type="text" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative z-10" placeholder="Doe" required />
						</div>
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 relative z-10">Your email</label>
						<input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative z-10" placeholder="name@revolusapce.com" required />
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 relative z-10">Company Name</label>
						<input type="text" id="companyName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative z-10" placeholder="Revoluspace" required />
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
						<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light relative z-10" placeholder="Let us know how we can help you" required />
					</div>
					<div className="sm:col-span-2">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 relative z-10">Your message</label>
						<textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white dark:focus:ring-primary-500 dark:focus:border-primary-500 relative z-10" placeholder="Leave a comment..."></textarea>
					</div>
					
					<button type="submit" className="py-3 px-5 text-sm font-medium text-center text-brand-white rounded-lg bg-brand-violet-700 sm:w-fit hover:bg-brand-violet-700/80 focus:ring-4 focus:outline-none dark:bg-brand-violet-700/80 dark:hover:bg-brand-violet-700/60 ease-in-out duration-200">Send message</button>
				</form> */}
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