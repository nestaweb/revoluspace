import Slack from "@/app/[locale]/slack/Slack";
import type { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
	title: "Revoluspace | Desk booking app integrated in Slack",
	description: "Boost collaboration and simplify office management with our Slack Desk Booking integration. Optimize workspace usage, decrease real estate costs, and enhance productivity in your hybrid workplace.",
};

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {

	unstable_setRequestLocale(locale);

	return (
		<>
			<Slack locale={locale} />
		</>
	)
}