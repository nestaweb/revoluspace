import Slack from "@/app/[locale]/slack/Slack";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'landing.slack.seo'});
 
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
			<Slack locale={locale} />
		</>
	)
}