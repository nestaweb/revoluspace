import Pricing from "@/app/[locale]/pricing/Pricing";
import type { Metadata } from "next";
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
	title: "Revoluspace | Plans & Pricing",
	description: "No surprises, no setup fees, no minimum. Simply choose a plan",
};

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {

	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.pricing');

	return (
		<>
			<Pricing locale={locale} />
		</>
	)
}