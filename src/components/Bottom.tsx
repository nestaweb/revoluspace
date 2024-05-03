import IntegrationButton from "@/components/IntegrationButton";
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

interface IBottomProps {
	title: string;
	enhancedWords?: string;
	noButtons?: boolean;
	locale: string;
	newsletter?: boolean;
	className?: string;
}

const Bottom: React.FC<IBottomProps> = ({ title, enhancedWords, noButtons, newsletter, locale, className }) => {

	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.home');

	return (
		<div className={`${className ? className : ""} flex flex-col items-center justify-center gap-12 w-[90vw] lg:w-4/6 mx-auto mt-[15vh] pb-[15vh]`}>
			<h3 className='text-3xl lg:text-6xl font-semibold text-center '>{title} <br/><span className='purple-gradient'>{enhancedWords}</span></h3>
				{
					!noButtons ?
					<div className='flex flex-col gap-4'>
						<div className="flex gap-4 flex-col lg:flex-row items-center justify-center">
							<IntegrationButton
								text={t('addto')}
								integration="Slack"
								primary
							/>
							<IntegrationButton
								text={t('addto')}
								integration="Teams"
							/>
						</div>
						<p className={"text-brand-violet-700 text-center font-medium"}><span className={"font-bold"}>{t('noConditions_1')}</span> <br/> {t('noConditions_2')}</p>
					</div>
					:
					<></>
			}
				{
					newsletter ?
					<div className="p-4 my-8 bg-brand-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700" aria-label="Subscribe to the Revoluspace newsletter">
						<h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-brand-white">Get more updates...</h3>
						<p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
							Revoluspace is a platform that helps you manage your hybrid work environment. Subscribe to our newsletter to get the latest updates.
						</p>
						<form action="" className="seva-form formkit-form" method="post" min-width="400 500 600 700">
							<div className="flex items-end mb-3">
								<div className="flex items-center w-full mb-3 seva-fields formkit-fields">
									<div className="relative w-full mr-3 formkit-field">
										<label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
										<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
											<svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
												<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
												<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
											</svg>
										</div>
										<input className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-brand-violet-700 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-brand-white ease-in-out duration-200" name="email_address" aria-label="Email Address" placeholder="Your email address..." required type="email"/>
									</div>
									<button>
										<span className="px-5 py-3 text-sm font-medium text-center text-brand-white bg-brand-violet-700 rounded-lg cursor-pointer hover:bg-violet-700 dark:bg-rand-violet-700 dark:hover:bg-brand-violet-700">Subscribe</span>
									</button>
								</div>
							</div>
						</form>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">By subscribing, you agree with Revoluspace&apos;s <a rel="nofollow" className="text-brand-violet-700 hover:underline dark:text-brand-violet-700" href="/legal">Privacy Policy</a>.</div>
					</div>
					: 
					<></>
				}
		</div>
	)
}

export default Bottom;