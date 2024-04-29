"use client"
import { useEffect } from 'react';

export default function HubSpotForm({locale}: {locale: string}){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if(window && (window as any).hbspt){
                (window as any).hbspt.forms.create({
                    portalId: '25331240',
                    formId: locale == 'en' ? "b994f17b-5539-4642-af26-42e025cd2c86" : "aa99fa65-8b56-4d64-94e6-993a3f44eeb0",
                    target: '#hubspotForm'
                });
            }
        });
    }, []);

    return(
        <div id="hubspotForm" className="hubspotForm"></div>
    );
}