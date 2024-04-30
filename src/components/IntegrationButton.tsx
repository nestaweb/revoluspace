"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface IButtonProps {
	text: string;
	integration: 'Slack' | 'MS Teams' | 'Teams';
	primary?: boolean;
	className?: string;
	link?: {
		slack: string;
		msteams: string;
	};
	green?: boolean;
}

const Button: React.FC<IButtonProps> = ({ text, integration, primary, className, link, green }) => {

	const msteamsLink = link?.msteams || "";
	const slackLink = link?.slack || "https://slack.com/oauth/v2/authorize?client_id=2459980417906.3661141926850&scope=chat:write,im:read,im:write,users:read,users:read.email,channels:read&user_scope=email,openid,profile";

	const purplecolors = primary ? "bg-brand-violet-700 text-brand-white hover:bg-brand-violet-700/90 dark:hover:bg-brand-violet-700/70 border-brand-violet-700" : "bg-brand-white text-brand-violet-700 dark:bg-gray-800 dark:text-brand-white dark:hover:bg-gray-700 hover:bg-gray-100 border-brand-violet-700"
	const greencolors = primary ? "bg-brand-green-600 text-brand-white hover:bg-brand-green-600/90 dark:hover:bg-brand-green-600/70 border-brand-green-600" : "bg-brand-white text-brand-green-600 dark:bg-gray-800 dark:text-brand-white dark:hover:bg-gray-700 hover:bg-gray-100 border-brand-green-600"

	return (
		<Link href={integration == 'Slack' ? slackLink : msteamsLink}>
			<button type="button" className={`${green ? greencolors : purplecolors} flex items-center gap-2 border-2 focus:outline-none font-medium text-base px-6 py-3 text-center  rounded-full ease-in-out duration-200 ${className ? className : ""}`}>
				<Image
					src={integration == 'Slack' ? "/slackLogo.png" : "/msteamLogo.png"}
					width={20}
					height={20}
					className={`h-6 w-6 ${primary && integration == 'Teams' ? "bg-brand-white p-1 rounded-full" : ""}`}
					alt={integration == 'Slack' ? "Slack Logo" : "MSteam logo"}
				/>
				<p>{text} <span className='font-semibold'>{integration ? integration : ""}</span></p>
			</button>
		</Link>
	)
}

export default Button;