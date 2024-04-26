import MSteams from "@/app/[locale]/msteams/MSteams";
import type { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';

export const metadata: Metadata = {
	title: "MS Teams App | Revoluspace",
	description: "Build stronger connections and improve office experience with a solution entirely integrated within Slack and Microsoft Teams",
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