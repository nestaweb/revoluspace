import Pricing from "@/app/[locale]/pricing/Pricing";
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import {NextIntlClientProvider, useMessages} from 'next-intl';
 
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
	const messages = useMessages();
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<Pricing locale={locale} />
		</NextIntlClientProvider>
	)
}