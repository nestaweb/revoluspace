import { NavBar, SectionLegal, Footer } from "@/components/components";
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {
	unstable_setRequestLocale(locale);
	const sections = [
		{
			title: "Data security",
			paragraphs: [
				"We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so."
			]
		},
		{
			title: "Origin and purpose of the Personal Data collected",
			paragraphs: [
				'We will only use your personal data where we are legally permitted to do so. Most commonly, we will use your personal data in the following circumstances:',
				'-	Where we need to perform a contract that we are about to enter into or have entered into with you.',
				'-	Where is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.',
				'-	Where we have to comply with a legal obligation.',
				'Generally, we do not rely on consent as a legal basis for processing your personal data, although when required by law we will get your consent before sending direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.',
				'The collection, storage and processing of this information and Personal Data have the following purposes:',
				'-	Use of the Solution by the User which may include:',
				'(a) Verification, identification and authentication of data transmitted by the User;',
				'(b) Providing you with our services;',
				'(c) Managing our relationship with you which may include notifying you about changes to our terms or privacy policy;',
				'-	Organisation of the conditions of use of the payment services;',
				'-	To manage our relationship with you which may include:',
				'(a) Notifying you about updates to our projects, products and services;',
				'(b) Contacting you in relation to your user account and use of our services;',
				'-	Management of possible disputes with Clients and/or Users.',
				'-	Use data analytics to improve our website, products/services, marketing, customer relationships and experiences',
				'-	To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)',
			]
		},
		{
			title: "Rights of data subjects",
			paragraphs: [
				'Pursuant to the Applicable Regulations, data subjects are reminded that they have the following rights:',
				'-	Right of access, including the right to obtain copies of all of their Personal Data, as well as essential details of how Personal Data is processed;',
				'-	Right to obtain the rectification of their Personal Data, as soon as possible, and the right to have any incomplete, inaccurate, ambiguous or outdated personal data completed;',
				'-	Right to the erasure of their Personal Data, as soon as their processing is no longer necessary, or that the Customer or user has withdrawn their consent or has opposed their processing; or when their collection, use, communication or storage is prohibited;',
				'-	Right to restriction of processing of Personal Data;',
				'-	Right to portability of Personal Data; and',
				'-	Right to object to the processing of their Personal Data.',
				'If the data subject wishes to know how Revoluspace uses their Personal Data, to request rectification, to object to the processing thereof, to request deletion thereof, or to request a copy of all Personal Data in possession of Revoluspace, he or she should send his or her request to Revoluspace by mail : contact@revoluspace.com and the request to be accompanied by a copy of valid ID documents, to the following address: Revoluspace, 64, rue Vergniaud, 75013 Paris, France',
				'In addition, the data subjects may lodge a complaint with the supervisory authorities, and in particular with the CNIL (https://www.cnil.fr/fr/plaintes).',
			]
		},
		{
			title: "Duration of Data retention",
			paragraphs: [
				`Revoluspace shall keep the Personal Data of data subjects for the period strictly necessary for the purposes pursued, and in particular for the provision of its Services, in accordance with legal and regulatory requirements.`,
				'Personal Data is retained three (3) years from the last incoming contact from the data subject with Revoluspace.',
				'Regarding Clients, for the duration of the subscription, plus three (3) years.',
				`This information may also be kept for an additional period of two (2) years, under restricted and exceptional access, for the purposes of proof in compliance with the Company's legal and regulatory obligations.`,
				'Accounting documents and records shall be retained for ten (10) years as accounting evidence.',
			]
		},
		{
			title: "Third-party links",
			paragraphs: [
				'This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.',
			]
		},
	];
	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800 min-h-screen">
			<NavBar current='legal' locale={locale} />
			<div className="w-[90vw] mx-auto">
				<h1 className="xl:p-0 px-8 text-left text-landing-gray text-3xl pt-10 font-bold mt-[20vh]">
					Privacy Policy
				</h1>
				{sections.map((section, idx) => (
					<SectionLegal key={idx} title={section.title} paragraphs={section.paragraphs} />
				))
				}
			</div>
			<Footer />
		</div>
	)
}