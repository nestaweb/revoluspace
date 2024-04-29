import Pricing from "@/app/[locale]/pricing/Pricing";
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'landing.pricing.seo'});
 
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
	const t = useTranslations('landing.pricing');

	return (
		<>
			<Pricing locale={locale} />
		</>
	)
}