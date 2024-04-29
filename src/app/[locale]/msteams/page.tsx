import MSteams from "@/app/[locale]/msteams/MSteams";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}: Props) {
  const t = await getTranslations({locale, namespace: 'landing.msteams.seo'});
 
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
			<MSteams locale={locale} />
		</>
	)
}