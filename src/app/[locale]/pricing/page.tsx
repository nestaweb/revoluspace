import Pricing from "@/app/[locale]/pricing/Pricing";
import type { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
	title: "Pricing | Revoluspace",
	description: "Build stronger connections and improve office experience with a solution entirely integrated within Slack and Microsoft Teams",
};

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {

	unstable_setRequestLocale(locale);

	return (
		<>
			<Pricing locale={locale} />
		</>
	)
}