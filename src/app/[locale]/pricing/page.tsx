import Pricing from "@/app/[locale]/pricing/Pricing";
import type { Metadata } from "next";
import Head from 'next/head'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';



type Props = {
	params: {locale: string};
};


// export function generateMetadata({ params: {locale} }: Props) {
// 	unstable_setRequestLocale(locale);
// 	const t = useTranslations('landing.pricing');
// 	return {
// 	  title: t('seo.title'),
// 	  description: t('seo.description')
// 	}
// }

export default function Page({params: {locale}}: Props) {

	unstable_setRequestLocale(locale);
	const t = useTranslations('landing.pricing');

	return (
		<>
			<Head>
				<title>{t('seo.title')}</title>
				<meta property="og:title" content={t('seo.title')} key="title" />
				<meta name="description" content={t('seo.description')} />
			</Head>
			<Pricing locale={locale} />
		</>
	)
}