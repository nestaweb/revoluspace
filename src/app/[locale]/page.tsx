import Home from "@/app/[locale]/Home";
import type { Metadata } from "next";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}: Props) {
	const t = await getTranslations({locale, namespace: 'landing.home.seo'});
   
	return {
	  title: t('title'),
	  description: t('description')
	};
}

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