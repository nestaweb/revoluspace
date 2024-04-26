import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import { CiCalendar, CiHeart, CiSettings } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

interface IDemo {
	locale: string;
}

const Demo: React.FC<IDemo> = ({ locale }) => {

	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.home');

	return (
		<div className='lg:w-4/6 w-5/6 flex h-auto mx-auto -translate-y-[15vh] bg-blue-800 mt-20'>
			<div className='bg-brand-white w-1/6 flex flex-col items-center py-6'>
				<div className='flex gap-4 mb-10'>
				<Image
					src="/slackLogo.png"
					width={40}
					height={40}
					alt="Slack logo"
				/>
				<Image
					src="/msteamLogo.png"
					width={40}
					height={40}
					alt="MS Teams logo"
				/>
				</div>
				<div className='flex flex-col items-center gap-10'>
					<div  className='flex flex-col items-center cursor-pointer'>
						<CiCalendar className='w-7 h-7' />
						<p className='font-medium'>Calendar</p>
					</div>
					<div  className='flex flex-col items-center cursor-pointer'>
						<CiHeart className='w-7 h-7' />
						<p className='font-medium'>Preferences</p>
					</div>
					<div  className='flex flex-col items-center cursor-pointer'>
						<CiSettings className='w-7 h-7' />
						<p className='font-medium'>Settings</p>
					</div>
				</div>
			</div>
			<div className='w-5/6 h-full bg-brand-gray-200 py-6'>
				<div className='flex justify-between px-6 items-center'>
					<div></div>
					<div className='w-56 h-6 bg-brand-white rounded-full border border-brand-gray-500/30'>

					</div>
					<div>
						<Image 
							src="/pp.jpeg"
							width={40}
							height={40}
							alt='profil picture'
							className='rounded-full'
						/>
					</div>
				</div>
				<div className='flex px-4 mt-8'>
					<div className='flex flex-col w-full'>
						<button className='rounded-full border-2 border-brand-gray-500/70 bg-brand-white px-4 py-2 flex items-center w-fit'>Current week <IoIosArrowForward className='ml-2 h-5 w-5'/></button>
						<div className='flex flex-col mt-16 w-full'>
							<div className='flex flex-col gap-2 border-2 border-brand-violet-100 rounded-lg p-4 bg-brand-white ease-in-out duration-200 w-4/6'>
								<p className='font-medium text-brand-violet-700'>12 Nov.</p>
								<p className='text-3xl font-semibold'>Today</p>
								<p className='font-light'>Set your status</p>
								<div className='flex gap-3'>
									<button className='text-center font-medium rounded-full border-2 border-brand-gray-500/70 bg-brand-white px-8 py-2 '>Remote</button>
									<button className='text-center font-medium rounded-full border-2 border-brand-gray-500/70 bg-brand-white px-8 py-2 '>Office</button>
									<button className='text-center font-medium rounded-full border-2 border-brand-gray-500/70 bg-brand-white px-8 py-2 '>Out</button>
								</div>
								<div className='flex'>
									<div className='flex flex-col'>
										<p><span>2</span> favorite co-workers coming</p>
										<div className='flex'>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										</div>
									</div>
									<div className='flex flex-col'>
										<p><span>8</span> teammates coming </p>
										<div className='flex'>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>
										<Image 
											src="/pp.jpeg"
											width={40}
											height={40}
											alt='profil picture'
											className='rounded-full'
										/>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Demo;