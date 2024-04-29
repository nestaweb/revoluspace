import Image from 'next/image';
import Link from 'next/link';
import IntegrationButton from '@/components/IntegrationButton';

interface ICardProps {
	  title: string;
	  desc: string;
	  imgUrl?: string;
	  direction?: 'row' | 'reverse';
	  className?: string;
	  style?: string;
	  IntegrationButtonText?: string;
	  IntegrationButtonLink?: {
		  slack: string;
		  msteams: string;
	  };
	price?: string;
	features?: string[];
	planFrequancy?: string;
	nonFeatures?: string[];
	pricingCTAtext?: string;
	seeSymbol?: boolean;
	noImage?: boolean;
	noborders?: boolean;
}

const PricingCard: React.FC<ICardProps> = ({ title, desc, className, price, features, nonFeatures, planFrequancy, pricingCTAtext, seeSymbol, noborders }) => {
	return (
		<div className={`w-full max-w-sm p-4 bg-brand-white ${!noborders ? "border border-gray-200" : ""} rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${className ? className : ""}`}>
			<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{title ? title : "Standard Plan"}</h5>
			<div className="flex items-baseline text-gray-900 dark:text-brand-white">
				<span className="text-3xl font-semibold">{!seeSymbol ? "" : "€"}</span>
				<span className="text-5xl font-extrabold tracking-tight">{price ? price : 0}</span>
				<span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">{planFrequancy ? planFrequancy : ""}</span>
			</div>
			<p className='mt-[2vh] text-brand-gray-500 dark:text-brand-gray-200'>{desc}</p>
			<ul role="list" className="space-y-5 my-7">
				{
					features && features.map((feature, index) => (
						<li className="flex items-center" key={`feature-${index}`}>
							<svg className="flex-shrink-0 w-4 h-4 text-brand-violet-700 dark:text-brand-violet-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{feature}</span>
						</li>
					))
				}
				
				{
					nonFeatures && nonFeatures.map((nonfeature, index) => (
						<li className="flex line-through decoration-gray-500" key={`nonfeature-${index}`}>
							<svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
							</svg>
							<span className="text-base font-normal leading-tight text-gray-500 ms-3">{nonfeature}</span>
						</li>
					))
				}
			</ul>
			<Link href="/contact">
				<button type="button" className="text-brand-white bg-brand-violet-700 hover:bg-brand-violet-700 focus:outline-none dark:bg-blue-brand-violet-700 dark:hover:bg-brand-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">{pricingCTAtext ? pricingCTAtext : "Choose plan"}</button>
			</Link>
		</div>

	)
}

const TextCard: React.FC<ICardProps> = ({ title, desc, className }) => {
	return (
		<div className={`w-5/6 lg:w-[35vw] block p-6 bg-brand-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${className ? className : ""}`}>
			<p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-brand-white">{title}</p>
			<p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
		</div>
	)
}

const VerCard: React.FC<ICardProps> = ({ title, desc, imgUrl, className, noImage, noborders }) => {
	
	const splittedTitle = title.split(' ');
	const firstWord = splittedTitle.shift();
	title = splittedTitle.join(' ');

	return (
		<div className={`max-w-sm bg-brand-white ${!noborders ? "border border-gray-200" : ""} rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className ? className : ""}`}>
			<div>
				{
				imgUrl && !noImage ?
					<Image
						src={imgUrl}
						width={300}
						height={300}
						className="w-full h-auto rounded-t-lg"
						alt={title}
					/>
				:
				!noImage &&
					<div className='min-h-[30vh] min-w-full rounded-t-lg bg-gradient-to-b from-brand-violet-700 to-brand-violet-100'></div>
			}
			</div>
			<div className="p-5">
				<div>
					<p className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-brand-white capitalize"><span className='purple-gradient capitalize'>{firstWord}</span> {title}</p>
				</div>
				<p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
			</div>
		</div>
	)
}

const SoftCard: React.FC<ICardProps> = ({ title, desc, imgUrl, direction, className, IntegrationButtonText, IntegrationButtonLink, noborders }) => {

	const splittedTitle = title.split(' ');
	const lastWord = splittedTitle.pop();
	title = splittedTitle.join(' ');

	return (
		<div className={`flex ${direction == 'row' ? 'md:flex-row' : direction == 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-center justify-between gap-y-8 rounded-lg mx-[5vw] dark:bg-gray-800 ${className ? className : ""}`}>
			{
				imgUrl ?
					<Image
						src={imgUrl}
						width={300}
						height={300}
						className={`w-5/6 lg:w-[35vw] md:h-auto md:rounded-lg ${!noborders ? "border border-gray-200" : ""}`}
						alt={title}
					/>
				:
				<div className='min-h-[50vh] min-w-[50vh] md:rounded-lg bg-gradient-to-b from-brand-violet-700 to-indigo-400'></div>
			}
			<div className="flex flex-col justify-between leading-normal w-5/6 lg:w-[35vw] md:h-auto">
				<p className="mb-2 text-2xl lg:text-4xl font-semibold text-gray-900 dark:text-brand-white">{title} <span className='purple-gradient'>{lastWord}</span></p>
				<p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">{desc}</p>
				<div className="flex flex-col items-center lg:flex-row gap-4 mt-5">
					<IntegrationButton
						text={IntegrationButtonText ? IntegrationButtonText : "Add to"}
						integration="Slack"
						link={IntegrationButtonLink}
					/>
					<IntegrationButton
						text={IntegrationButtonText ? IntegrationButtonText : "Add to"}
						integration="MS Teams"
						link={IntegrationButtonLink}
					/>
				</div>
			</div>
		</div>
	)
}

const Card: React.FC<ICardProps> = ({ title, desc, imgUrl, direction, className, style, IntegrationButtonText, IntegrationButtonLink, price, features, nonFeatures, planFrequancy, pricingCTAtext, seeSymbol, noImage,noborders }) => {
	return (
		style && style == 'text' ?
			<TextCard
				title={title}
				desc={desc}
				imgUrl={imgUrl}
				direction={direction}
				className={className}
				noborders={noborders}
			/>
		:
		style && style == 'vertical' ?
			<VerCard
				title={title}
				desc={desc}
				imgUrl={imgUrl}
				className={className}
				noImage={noImage}
				noborders={noborders}
			/>
		:
		style && style == 'pricing' ?
			<PricingCard
				title={title}
				desc={desc}
				price={price}
				className={className}
				features={features}
				planFrequancy={planFrequancy}
				nonFeatures={nonFeatures}
				pricingCTAtext={pricingCTAtext}
				seeSymbol={seeSymbol}
				noborders={noborders}
			/>
		:
			<SoftCard
				title={title}
				desc={desc}
				imgUrl={imgUrl}
				direction={direction}
				className={className}
				IntegrationButtonText={IntegrationButtonText}
				IntegrationButtonLink={IntegrationButtonLink}
				noborders={noborders}
			/>
	)
}

export default Card;