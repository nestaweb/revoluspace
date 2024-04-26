// import { useEffect } from 'react';
// import { useHubspotContext } from '@aaronhayes/react-use-hubspot-form';
import { useHubspotForm } from 'next-hubspot';

interface IContactForm {
	locale: string;
}

const ContactForm: React.FC<IContactForm> = ({locale}) => {
	const { loaded, error, formCreated } = useHubspotForm({
        portalId: '25331240',
		formId:
		locale === 'fr'
				? 'aa99fa65-8b56-4d64-94e6-993a3f44eeb0'
				: 'b994f17b-5539-4642-af26-42e025cd2c86',
		target: `#my-hubspot-form`,
    });

    return (
        <div id="my-hubspot-form" />
    )
};

export default ContactForm;
