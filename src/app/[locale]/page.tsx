import Home from "@/app/[locale]/Home";
import type { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
	title: "Revoluspace | Simplify hybrid work",
	description: "Enhance workplace connections and streamline flexible office management with our fully integrated solution within Slack and Microsoft Teams",
};

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {

	unstable_setRequestLocale(locale);

	return (
		<>
			<Home locale={locale} />
		</>
	)
}