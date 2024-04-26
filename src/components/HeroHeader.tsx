import { IntegrationButton } from '@/components/components';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

interface IHeroHeaderProps {
	title: string;
	description: string;
	locale: string;
	enhancedWords?: string;
	integration?: 'slack' | 'msteams';
	className?: string;
	green?: boolean;
	noButtons?: boolean;
}

const HeroHeader: React.FC<IHeroHeaderProps> = ({ title, description, enhancedWords, locale, integration, className, green, noButtons }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations('landing');

	return (
		<div className={`min-h-screen flex items-center ${className ? className : ""}`}>
			<div className="mx-auto p-4 lg:w-full">
				<div className="flex flex-col items-center justify-center gap-8 lg:gap-12 w-5/6 lg:w-4/6 mx-auto">
					<h1 className="text-4xl lg:text-7xl font-semibold text-brand-gray-500 text-center dark:text-brand-white">{title} <span className={`${green ? "green-gradient" : "purple-gradient"} capitalize`}>{enhancedWords}</span></h1>
					<p className="text-xl lg:text-2xl text-center text-brand-gray-500 dark:text-gray-300">{description}</p>
					<div className='flex flex-col gap-4'>
						{!noButtons &&
							<>
								<div className="flex flex-col gap-4 justify-center items-center lg:flex-row">
								{integration == 'slack' ?
									<IntegrationButton
										text={t('home.addto')}
										integration="Slack"
										primary
										green={green}
									/>
									:
									integration == 'msteams' ?
									<IntegrationButton
										text={t('home.addto')}
										integration="MS Teams"
										primary
										green={green}
									/>
									:
									<>
									<IntegrationButton
										text={t('home.addto')}
										integration="Slack"
										primary
										green={green}
									/>
									<IntegrationButton
										text={t('home.addto')}
										integration="MS Teams"
										primary
										green={green}
									/>
									</>
								}
								</div>
								<p className={`${green ? "text-brand-green-600" : "text-brand-violet-700"} text-center font-medium`}>{t('home.noConditions_2')} - {t('home.noConditions_1')}</p>
							</>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroHeader;