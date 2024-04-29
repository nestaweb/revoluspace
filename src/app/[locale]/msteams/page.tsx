import MSteams from "@/app/[locale]/msteams/MSteams";
import type { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
	title: "Revoluspace | Desk booking app integrated in MS Teams",
	description: "Boost collaboration and simplify office management with our MS Teams Desk Booking integration. Optimize workspace usage, decrease real estate costs, and enhance productivity in your hybrid workplace.",
};

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {

	unstable_setRequestLocale(locale);

	return (
		<>
			<MSteams locale={locale} />
		</>
	)
}