import { NavBar, SectionLegal, Footer } from "@/components/components";
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
	params: {locale: string};
};

export default function Page({params: {locale}}: Props) {
	unstable_setRequestLocale(locale);

	const sections = [
		{
			paragraphs: [
				`The present general conditions of Sale and Use apply between the company Revoluspace, simplified limited company with a sole shareholder with a capital of 10000 euros, registered under the number 898943774 the terms and conditions under which the company Revoluspace, whose head office is located at 64, rue Vergniaud - 75013 Paris represented by Jonas Fredj as President (hereinafter referred to as "Revoluspace") and thecustomer (hereinafter referred to as the "Customer") have entered into a service contract (hereinafter referred to as the "Contract"). Revoluspace and the Customer are together hereinafter referred to as "the Parties". Revoluspace markets online work scheduling and space management solutions that it has designed and developed in SaaS mode. The Revoluspace solution is also accessible via the Add-in installation on Microsoft AppSource and the Slack Application.`,
				`The Customer wishes to use one or more of the SaaS services offered by Revoluspace for the exercise of its professional activity.As part of its duty to inform and advise, all services offered by Revoluspace have been presented to the Customer either by a commercialpresentation brochure and/or by means of a demonstration. Therefore, theCustomer acknowledges and declares: Having received all the documents and prerequisites necessary for the installation and the functional and technical use of the services; Having had the time to consult the documentation sent to him and having understood the presentation of the Revoluspace solutions in such a way that he commits himself with full knowledge of the facts; Having taken the necessary time and having the required skills to appreciate the relevance of the use of the Revoluspace services in accordance with his needs. The Customer acknowledges that the degree of pre-contractual information given by Revoluspace is within the limits of its knowledge of the Customer's projects and needs as stated by the Customer and within the limits of the Customer's IT infrastructure.`,
				`After ensuring that the services offered by Revoluspace are appropriate forthe Customer's needs and constraints, the Customer has decided to subscribe to the Services according to the terms and conditions of the Contract, consisting of a Subscription Agreement specifying the Scope of Services and these general conditions. The Customer has the option of saving and printing these general terms and conditions using the standard features of his browser or computer.`
			],
		},
		{
			title: "PURPOSE OF THE CONTRACT",
			paragraphs: [
				`The purpose of the Agreement is to define the technical, legal and financial terms and conditions under which Revoluspace will perform the Services for the Customer as detailed in Section VIII of the Agreement and in Appendix 1.`
			],
		},
		{
			title: "IT IS AGREED AS FOLLOWS:",
		},
		{
			title: "1. Definitions",
			paragraphs: [
				`Administrator: A member of the Customer's staff or a third party who is expressly authorized by the Customer to access the contents and settings of the Customer's Account via an Administrator account.`,
				`Activation Date: Date of delivery of the Customer's Account at the end of the Configuration mentioned in the Subscription Agreement for information purposes.`,
				`Manager Account: A member of the Customer's staff or a third party who isexpressly authorized to access the contents and settings of the Customer's Account via a Manager account.`,
				`Employee Account: An account that allows an expressly authorized user to access the Revoluspace application solution.`,
				`Customer Data: all information, exchanges, documents or any other information communicated or transferred by the Customer and/or its Usersto Revoluspace.`,
				`Contract: the contractual package agreed upon between the Parties consisting of these general terms and conditions, the possible orders placed by the Customer under this contract, and the documents mentioned, as well as the reports, studies and plans delivered by Revoluspace in execution of this contract.`,
				`Working Days and Hours: Monday through Friday, excluding holidays, from 9:00 am to 6:00 pm.`,
				`Services: all the functionalities and services offered to the Customer by Revoluspace. The Services are likely to evolve according to the present terms and conditions.`,
				`User(s): Staff members (whether or not they are employees) and external persons who may access and/or use the Services and who have a Revoluspace Account.`
			],
		},
		{
			title: "2. Purpose",
			paragraphs: [
				`The present general conditions of use and sale define the conditions applicable to the Services provided by Revoluspace to the Customer and its users.`,
				`The contractual documents constituting the Contract are the following documents: the articles of the Contract and its Appendices. In case of contradiction between one or more stipulations of the contractual documents composing the Contract, the stipulations of higher rank will prevail. It is agreed between the parties to the Agreement that no handwritten annotation added by the Customer will have any value unless expressly accepted by Revoluspace. The parties voluntarily waive the application of their respective general terms and conditions of sale or purchase, which are therefore expressly excluded.The parties declare that they have freely negotiated all the terms and conditions of the contract. The Contract therefore constitutes a private contract within the meaning of Article 1110 of the Civil Code. The execution of the Contract implies that the Customer has necessarily adhered without reservation to these general conditions.`,
				`It is specified that the Customer is deemed to have taken full knowledge of the Contract and to have accepted its terms, without reservation, at the time of signing. The parties are aware that the acceptance of the Contract by electronic means has exactly the same evidential value as an agreement on paper.Revoluspace reserves the right to unilaterally modify the present general conditions. These modifications will be opposable to the Customer after having been published by any means.Any substantial modification of the general terms and conditions will be communicated to the Customer within thirty (30) calendar days before they take effect. In the event of refusal of the new terms and conditions, the Customer shall be free to terminate the Contract under the conditions of Article 12.`,
			],
		},
		{
			title: "3. Duration",
			paragraphs: [
				`The Contract shall take effect on the date the Customer registers to use the Solution, and shall be renewed by tacit agreement for successive periods of one month (1 month) or one year (1 year) depending on the type of subscription the Customer has taken out.`,
				`The subscription to the Services will be automatically renewed under the above conditions unless the Customer gives notice at least 24 hours before the renewal anniversary date or Revoluspace gives notice of termination. If the Customer wishes to terminate the Agreement, the Customer must follow the provisions of Article 12.`,
				`In accordance with Article L221-3 of the French Consumer Code, the Customer may have a right of withdrawal provided that the following threeconditions are met: The contract was concluded off-premises; The subject of the contract does not fall within the scope of the Customer's main activity; The Customer hires a number of Employees less than or equal to five. If the Customer fulfills these cumulative conditions, the Customer may notify Revoluspace, by registered letter with acknowledgment of receipt, of its desire to exercise its right of withdrawal within fourteen daysfrom the date of conclusion of the Contract.`,
			]
		},
		{
			title: "4. Implementation of the services",
			paragraphs: [
				`The Customer must have a connection to the Internet. Customer acknowledges that it will need to keep its browser and operating systems up to date in order to fully utilize Revoluspace.`,
				`User IDs and passwords are used to access the Revoluspace Services to ensure secure access to user accounts and Customer data. User IDs and passwords should never be shared with a third party.`,
				`Customer and Users shall be responsible for taking all necessary steps to ensure the security of their Account access, including the use of unique, personal, strong passwords that are kept strictly confidential.`,
				`The Customer shall ensure that all Users ensure the security of their User Account. This requires Customer to impose strict access and identification rules, including requiring Users to use passwords that are unique, personal, strong and kept strictly confidential.`,
				`Revoluspace will not be liable for fraudulent access to the Application Solutions and Services due to a defect or breach of security resulting from the negligence, error or omission of Users or the Customer.`,
				`The Customer must inform Revoluspace without delay if it becomes aware in any way of a security breach related to a deliberate disclosure or misappropriation of login and/or password so that Revoluspace employees can take all necessary steps to remedy the breach.`
			]
		},
		{
			title: "5. Services",
			paragraphs: [
				`The Services may also be accessed from the user's Google Workspace or Microsoft business accounts. The terms of use for these accounts, and the associated logins and passwords, are applicable between Customer, Customer's Users and its service providers to which Revoluspace is not a party.`,
				`Customer will receive Workspace Planning and Management Services which do not include employment law and human resources consulting, space management consulting or office optimization consulting. Customer will also receive support through Revoluspace Customer Service. Revoluspace provides data hosting, maintenance and security of the application solutions. `,
				`In order to ensure continuous improvement of the Application Solutions, Revoluspace may install updates or new versions after prior notification to the Customer. In case of incompatibility with certain browsers resulting in a limitation of the Application Solutions, Revoluspace will have the possibility to use another operating system while waiting for a correction of the browser. The costs of corrective and evolutionary maintenance of the Application Solutions are supported by Revoluspace. `,
				`The Customer acknowledges that the Services may be temporarily unavailable, in particular for maintenance reasons. In order not to disrupt the use of the Services, Revoluspace will use its best efforts to perform maintenance operations outside of normal business hours and days.The Customer acknowledges that the license of rights does not give him any property right on the Application Solutions and the elements which compose it which are and will remain the exclusive property of Revoluspace.`,
				`Once the payment has been made by the Customer, Revoluspace grants the Customer a personal, non-exclusive, non-assignable and non-transferable right to use the Application Solutions for the duration of the Subscription Contract.`,
				`The Customer acknowledges that it may not make the Application Solutions available to a third party under any circumstances. The Customer agrees not to adapt, modify, arrange, or distribute the Application Solutions, without this list being exhaustive. The Customer alsoagrees not to modify, decompile, disassemble, identify the source code, merge, or combine said code with other software, copy, reproduce, transcode, adapt or modify any software. `,
				`The Application Solutions and the data they contain are hosted by Revoluspace on Amazon Web Services in France.`,
				`For legal or technological reasons which are at its sole discretion, Revoluspace reserves the right to freely evolve the Services to bring new functionalities or to propose improvements to those existing. Any modification of the Services already subscribed to by the Customer is enforceable against the Customer without prior notice as of the date of its release and or communication by Revoluspace.`,
				`The Customer acknowledges that the conclusion of the Agreement is not conditional upon the provision of new features and/or services in the future. `,
				`The Customer acknowledges that Revoluspace reserves the right to change any or all the components of the Price of the Services during the course of the contractual relationship, particularly due to changes in functionality.`,
				`The Applicable Prices are available on request via the "Prices" section accessible via the website www.revoluspace.comIn this case, the new pricing policy will be notified to the Customer by any means and will apply to the Services provided from the calendar month following the notification. In the event of refusal of the new prices of the Services, the Customer remains free to terminate his Contract under the conditions of article 12 below.`,
				`The Customer can benefit from a parameterization of his Account if he wishes it by Revoluspace. The Customer acknowledges that the setting of the Account is done with the assistance of the Customer who undertakes to provide Revoluspace with all the Content requested by Revoluspace within the agreed timeframe, it being specified that this Content must be accurate, up to date and complete. The Customer acknowledges that the activation date is given as an indication and that Revoluspace will not be held responsible in the event of a reasonable delay in the activation date or in all cases where the delay is attributable to the Customer. If the setup is performed by Revoluspace, the activation of the accounts does not begin until the Customer is informed by Revoluspace that the setup has been completed. Customer acknowledges and agrees that use of the Services may not commence until the effective date of activation.`
			]
		},
		{
			title: "6. Access to Revoluspace Services",
			paragraphs: [
				`Revoluspace provides application solutions that are accessible via the Internet through a secure SSL connection (https) and a dedicated url. Revoluspace will endeavor to ensure continuous access to the Solution 24 hours a day, 7 days a week, except during periods of unavailability:`,
				`- In case of maintenance as described in the article`,
				`- In case of suspension of the Services as described in the article`,
				`- In the event of unavailability caused by circumstances external to Revoluspace, including cases of Force Majeure as detailed in the Article of the Contract or failures or delays of Internet service providers.`,
				`Revoluspace endeavors to provide secure access and use of the Application Solutions in accordance with industry practice. `,
				`Customer Service is available through the "CONTACT" tab accessible from any User or Administrator Account during Business Days and hours. The Customer Service Department processes the requests it receives within a reasonable timeframe during Business Days and Hours.`
			]
		},
		{
			title: "7. Prices, Invoicing and Payment",
			paragraphs: [
				`All prices are exclusive of VAT and other taxes, duties or services payable by the Customer in accordance with the regulations in force on the date of issue of the invoice of Revoluspace, which will remain the exclusive responsibility of the Customer.`,
				`The subscription price is calculated according to the number of active Users of Revoluspace, corresponding to the number of users who have used the Services offered by Revoluspace during the month or the year according to the type of subscription. The subscription is renewable by tacit agreement. Subscriptions will be automatically renewed for an identical period if the Customer has not cancelled his subscription.Each customer has the right to a 14-day trial period during which he/she can take full advantage of Revoluspace's services. During this period, Customer and Users are subject to these terms of use. At the end of the trial period, Customer may continue to use the Revoluspace services by subscribing to one of the subscriptions.`,
				`During the subscription period, Customer may change the subscription selected. This change will take effect for the remainder of the subscription period that has been purchased and for subsequent renewals subject to subsequent modification or termination. `,
				`In this case, the amounts due will be recalculated on a pro rata basis for the remaining subscription period, it being specified that subscriptions are not refundable.`,
				`For Annual Plans, if the number of active Users is less than the number of authorized Users at the end of a calendar month, Customer will receive carryover credits. These credits will be applied to Customer's future payments.`,
				`Credits are not transferable or refundable. They have no cash or exchangevalue. If the Annual Plan is terminated, they will expire.If Customer increases the number of Authorized Users during the Annual Plan, Customer will be billed the following calendar month for those new Authorized Users as if they were Active Users for the remaining term of the Plan.`,
				`Billing is charged under the terms detailed in the Subscription Agreement. Each invoice shall be paid within a period not to exceed thirty (30) days from the date of invoice.`,
				`The following payment methods are authorized.Credit card (STRIPE)`,
				`SEPA Direct Debit (GOCARDLESS) for Customers located in the EU. When the Customer is located outside the EU, the Parties may agree on payments by bank transfer.`,
				`Invoices are issued in Euros. Payment terms are subject to change.`,
				`The Customer acknowledges and agrees that Revoluspace reserves the right to send invoices in electronic format (PDF) to the email address indicated by the Customer as the contact address in the Subscription Agreement.`,
				`The Customer acknowledges that at the end of this period or in the event of termination of the Contract, the invoices will no longer be accessible on the Customer's Account and that it is therefore the Customer's responsibility to archive the invoices by its own means as the contractual relationship with Revoluspace progresses, in accordance with the required legal time periods.`,
				`Customer shall pay the full amount of each invoice including all taxes, government fees, transfer fees and any other taxes applicable to all payments made. All bank or other intermediary fees related to the payment or any incident shall be borne solely by the Customer, without deduction of any amount such as withholding tax, which shall be borne solely by the Customer. `,
				`Depending on the location of the transaction, foreign exchange transaction fees or different prices may be applicable. `,
				`In case of total or partial non-payment, the Customer will have to pay to Revoluspace a late payment penalty equal to three (3) times the French legal interest rate, which is calculated on the basis of an inclusive of tax amount and runs from the due date of the invoice without the need for any prior formal notice. `,
				`In addition, a fixed compensation of forty (40) euros (not subject to VAT) will also be due to Revoluspace for collection costs on the occasion of any delay in payment and this, without prejudice to damages and other costs that Revoluspace reserves the right to claim, including by legal action.Interest and penalties for late payment will be payable by right, the sending of a registered letter not being required to allow Revoluspace to benefit from the right to collect them.`,
				`In the event of non-payment by the Customer of amounts due on the due date after a formal notice to pay has remained without effect for a period of sixty (60) days, Revoluspace reserves the right to suspend the Customer's access to its Accounts and the Services with immediate effect after having notified the Customer by all means. The Parties agree that the suspension of the Services will result in the immediate payment of all amounts invoiced by Revoluspace to the Customer. Only the full payment of the amounts owed by the Customer to Revoluspace will allow the Customer to regain the use of his Accounts and to benefit again from the Services.`,
				`The Customer may, upon written request sent by email to contact@revoluspace.com ask to receive his invoices in paper format.`
			]
		},
		{
			title: "8. Ownership",
			paragraphs: [
				`The Customer remains the owner of the Content it uploads or fills in on theApplication Solutions under the Agreement. They do not belong to Revoluspace and Revoluspace will not claim "ownership" of such Data and Content.`,
				`The Customer acknowledges that this Content may be transmitted in the event that an administrative or judicial authority requests it.Customer grants Revoluspace the right to host, use, display or otherwise process its Content in order to provide the Services in accordance with theterms of the Agreement.`,
				`Customer acknowledges that Customer is solely responsible for the accuracy, integrity, quality, legality, reliability and appropriateness of the Content and for obtaining all rights in the Content necessary for Revoluspace to provide the Services.`,
				`Revoluspace is and remains the owner of all intellectual propertý rights relating to the Services made available to the Customer or declares that it has obtained the intellectual property rights necessary to exploit them.Accordingly, all the elements that make up the Services, whether their structure, appearance or content (including databases, texts, graphic texts, images animated or not, sounds, drawings, graphics, logos, names, trademarks, designations, tabs, features, signs ...) belong to REVOLUSPACE. They are subject to the provisions of the Code of intellectual propertý and as such, are protected against any use not authorized by law or the Agreement. Accordingly, any use of these materials by Customer and Users is subject to the prior written consent of Revoluspace.`,
				`Any suggestions for error correction or comments on any new features or improvements to the Solution, Platform, Application or Database that Customer may make to Revoluspace shall be the sole property of Revoluspace, which shall always be free to choose in its sole discretion to develop the features and corrections suggested or requested by Customer.`,
				`Customer agrees to use the Services only in connection with its business activities. In this respect, the Customer agrees and acknowledges that he is not authorized to allow a third party, without this list being restrictive, to:`,
				`- modify, create derivative works of, disassemble, decompile, reverse engineer, reproduce, republish, download or copy any part of the Services and their associated documentation (including data structures or similar components);`,
				`- access or use the Services to build or provide support, directly or indirectly, for products or services that compete with Revoluspace;`,
				`- license, sell, transfer, assign, distribute, outsource, permit time-share or service bureau use of, or otherwise commercially exploit or make available, the Services to any third party other than as expressly permitted under the Agreement.`,
				`Customer warrants to Revoluspace that Users and Staff Members will respect Revoluspace's intellectual property rights.`,
				`Revoluspace represents that it has all legal authority and intellectual property rights granted under the Agreement without limitation or qualification and warrants to Customer that it has such authority and rights.`,
				`The Parties agree that REVOLUSPACE shall not be held liable for Content provided by the Customer or for any non-conforming use by the Customer of elements of the Services and Solutions protected by intellectual property rights.`,
				`The Customer undertakes to inform REVOLUSPACE without delay of the existence of a potential infringement of an intellectual property right by anelement of the Services or Solutions and to communicate without delay any information it may have on this subject.`,
				`In the event that an infringement action is brought by a third party againsta Party on the grounds that any of the information, concepts, features, instructions, software, data, materials or components provided by the other Party infringe the intellectual property rights of a third party the latter shall defend the other Party at its own expense and shall indemnify it against all damages, prejudice, costs and expenses of any kind awarded to the third party by an enforceable court decision or negotiated amicably by the other Party as part of a possible settlement.`,
				`REVOLUSPACE shall not be liable to compensate the Customer in the event that an infringement action is brought due to :`,
				`- non-conforming use of the Services by the Customer or Users;`,
				`- use of the Services in a modified form by the Customer or the Users;`,
				`- use of an element not supplied in full by REVOLUSPACE.`,
				`The Parties acknowledge that the provisions of this section shall constitutetheir exclusive remedy in the event of an infringement action by a third party.`
			]
		},
		{
			title: "9. Insurance",
			paragraphs: [
				`REVOLUSPACE declares that it holds an insurance policy with a solvent insurance company covering its professional civil liability and operational civil liability, and covering liability for damage of any kind that it or its employees may cause to the Customer, its employees or third parties in the performance of the Contract.`,
				`Upon request, REVOLUSPACE undertakes to provide the Customer with a copy of its insurance policy and a cover note for the insurance policy of any subcontractors.`
			]
		},
		{
			title: "10. Obligations",
			paragraphs: [
				`REVOLUSPACE undertakes to perform its contractual obligations with all possible care as is customary in its profession, in accordance with an obligation of means when the Services are provided with the Customer's assistance.`,
				`In particular, in performing the Contract, REVOLUSPACE is bound by the following obligations`,
				`- to provide the Services in accordance with its commercial proposal and the requirements explicitly stated by the Customer, in accordance with existing standards, laws and regulations in force at the time the Contract is concluded`,
				`- to use all human and technical resources to provide the Services in accordance with the conditions set forth herein;`,
				`- provide the Services in accordance with its commercial proposal;`,
				`- coordinate the activities of its various subcontractors;`,
				`- to control the good availability of the Services and to warn the Customer in good time against any difficulties in the execution of the Services of which it would have knowledge;`,
				`- to take all precautions in accordance with the rules of the current state ofthe art which are necessary with regard to the services entrusted for the protection of personal data;`,
				`- to take adequate measures to secure the SolutionsIn return, the client undertakes :`,
				`- to use the Services and the Application Solutions only in the context of itsprofessional activity and in accordance with its professional needs and not for illicit, prohibited and/or illegal purposes, to harm third parties or Revoluspace or under conditions not provided for in the Agreement and, more generally, not to disrupt the proper functioning of the Services`,
				`- not to gain unauthorized access to the Services and Application Solutionsor the systems and networks associated with them;`,
				`- to designate a primary contact for communication with Revoluspace`,
				`- to communicate to Revoluspace the information necessary for the execution of the Services and the Parameterization and, more generally, to bring all its assistance to Revoluspace in the execution of the Services. As such, the Customer agrees to perform the following general obligations:`,
				`- to collaborate in the realization of the Contract by being held during the execution of this one with an obligation of update, exactitude and completeness with regard to any Contents which it must provide within the framework of the Services,`,
				`- provide, at its own initiative, the qualified personnel necessary to ensure the performance of its obligations under the Agreement`,
				`- provide sufficiently qualified and documented information for use by Revoluspace in connection with the Services,`,
				`- verify the accuracy, completeness and integrity of the Content before any communication to Revoluspace and update it in real time,`,
				`- respect the agreed deadlines and ensure that the applicable deadlines are respected for any supply of Content for which it or its subcontractors are responsible, according to the deadlines agreed between the Parties,`,
				`- after the Commissioning, to set up its account in real time according to the evolution of its situation and that of its staff members during the Contract;`,
				`- to pay Revoluspace the Account Setup Price and the Services Price underthe conditions mentioned in article 7;`,
				`- to provide access to the Services through all required telecommunications channels;`,
				`- not to make the Application Solutions available to third parties other thanUsers;`,
				`- not to download Content containing or likely to contain viruses or programs that destroy data, or Content that is illegal or likely to offend public order and morality. The Customer acknowledges that Content considered to be in violation of applicable laws or regulations may be submitted by Revoluspace to the authorities.`,
				`Revoluspace may immediately remove any such information from the Customer's web site or any other web site that is required to comply with the law and/or may be subject to immediate removal by Revoluspace;The Customer undertakes to ensure that each User complies with this Agreement and the conditions of use of the Application Solutions mentioned in the Agreement, and undertakes to ensure that the use that itmakes and that Users make of the Content and the Application Solutions comply with the legal and regulatory provisions in force.In the event of non-compliance with its obligations by the Customer or its Users, REVOLUSPACE reserves the right to suspend access to the Services as of right and without notice and to terminate the Agreement under the conditions set forth in Article 12, without any compensation being due to the Customer.`,
				`The Customer is hereby informed that all Users must read and accept the general terms and conditions of use of the REVOLUSPACE Solution available on the REVOLUSPACE website before using the Solution for the first time (and any new version of the said General Terms and Conditions where applicable).`,
				`The Customer must ensure that its Users have understood and accepted the general terms and conditions of use of the Solution available on the REVOLUSPACE website and in particular that they must undertake :`,
				`- to use the Solution in a fair manner, in compliance with applicable laws and regulations, in particular laws relating to intellectual and industrial property;`,
				`- not to provide deliberately false or disparaging information about the REVOLUSPACE services offered or about REVOLUSPACE, failing which they will be held liable;`,
				`- not to use the Solution in conditions that could undermine the integrity, proper functioning or security of the Platform and the Application;`,
				`- not to misuse the Solution for personal advertising or product sales purposes;`,
				`- not to commit any act of counterfeiting, not to reproduce, download, represent or modify all or part of the Solution, not to use a "robot" or a "vacuum cleaner" of data;`,
				`- not to access and/or remain in the Solution understood as an automated data processing system. Any fraudulent access or maintenance to the latter is prohibited and punishable by law. The same applies to any interference with or alteration of the operation of this system, or in the event of the introduction, deletion or modification of data contained therein;`, `- not to disrupt the proper functioning of the Platform and the Application, and in particular not to introduce viruses or any other technology harmful to the Solution or the services offered therein.`,
				`- not to store, publish or disseminate Content that is offensive, obscene, threatening, abusive, violent, bloody, rude, racist, abusive, defamatory, libelous, disparaging, misleading, discriminatory, intended to harass, threaten, embarrass others, pornographic or child pornographic, presenting scenes of nudity, or of a sexual nature, constituting an apology for crimes against humanity, likely to incite racial, religious or ethnic hatred, violence or terrorism, to infringe upon the human dignity or privatelife of others, illegal or contrary to the laws in force;`,
				`- not to store, publish or disseminate Content that infringes the intellectualproperty rights of any third party;`,
				`- not to store, publish or disseminate confidential information of any third party without their permission;`,
				`- not to store, publish or disseminate Content that may be characterized as embezzlement, fraud, breach of trust or any other criminal offense;`,
				`- not to promote, sell or encourage the sale of goods and services subject to regulation (alcohol, gambling, pharmaceutical products, weapons, etc.);`,
				`- not to access, use or attempt to use the account, login and/or password of another User or impersonate another User in any way;`,
				`- not to impersonate any other person, User or REVOLUSPACE employee orrepresentative;`,
				`- not to behave or use discourteous or rude language with REVOLUSPACE staff or consultants assigned to support the Solution and more generally with regard to any other User.`,
				`The Customer shall be liable for any damage that the Data disseminated by its Users or itself may cause to REVOLUSPACE or to a third party and shall hold REVOLUSPACE harmless against any action that may be broughtagainst it as a result of such Data.`
			]
		},
		{
			title: "11. Liability",
			paragraphs: [
				`REVOLUSPACE shall perform its contractual obligations with all possible care in accordance with the practice of its profession, on a best-efforts basis, provided that the Services are supplied with the assistance of the Customer.`,
				`REVOLUSPACE shall be liable for the consequences of its faults, errors or omissions, except in the event of direct or indirect damage caused by the Customer itself or by an authorized user or third party and in the event of force majeure.`,
				`In particular, REVOLUSPACE shall not be held liable for :`,
				`- the accidental destruction of Content by the Customer or the destruction,downloading or consultation of Content by a third party having accessed the Application Solutions using the Customer's ID and password`,
				`- the consequences of the delay or failure of the Customer to send all the information required to set up the Customer's Account and to provide the Services`,
				`- the consequences of the provision of inaccurate and/or incomplete Content when setting up the Customer's Account and/or when providing the Services;`,
				`- difficulties or impossibilities of access to the Application Solutions and Services by the Customer due to its computer equipment or due to a difficulty in connecting to the Internet network of the latter, it being specified that the hardware, computer equipment as well as the connection to the Internet network or the telecommunication costs are exclusively at the expense of the Customer, which the Customer accepts and acknowledges;`,
				`- accidental destruction of data relating to the Customer by the Customer or a third party having accessed́ the Services without authorization, without any fault being imputed to REVOLUSPACE.`,
				`In addition, and in the event of fault proven by the Customer, REVOLUSPACE shall only be liable for compensation for the pecuniary consequences of direct and foreseeable damage resulting from the performance of the Services. Consequently, under no circumstances shall REVOLUSPACE be liable for any indirect or unforeseeable loss or damage suffered by the Customer or third parties, including in particular any loss of profit, loss, inaccuracy or corruption of files or data, commercial loss, loss of turnover or profit, loss of goodwill, loss of opportunity, cost of obtaining a substitute product, service or technology, in connection with orarising from the failure to perform or the faulty performance of the Services.`,
				`In any event, whatever the basis of REVOLUSPACE's liability, the damages and any compensation owed by REVOLUSPACE to the Customer, for any reason whatsoever, shall not exceed the sums paid to REVOLUSPACE by the Customer for the last twelve (12) months prior to the incident.`,
				`The Parties acknowledge that the Contract price reflects the allocation of risks arising from the Contract, as well as the economic balance desired bythe Parties, and that the Contract would not have been entered into on these terms without the limitations of liability defined in the Contract. The Parties agree that the limitations of liability shall continue to apply even in the event of termination or rescission of the Agreement for any reason whatsoever.`,
				`Customer shall use the Services under its control, direction and sole responsibility. Customer shall be responsible for compliance with the Agreement by Users.`,
				`Consequently, the Customer acknowledges that it is responsible for`,
				`- the implementation of all procedures and measures to protect the Users' computer equipment, in particular against any virus and external intrusions;`,
				`- downloading the latest updated version of the Solutions;`,
				`- the designation of a preferred contact to communicate with REVOLUSPACE and the updating of this contact;`,
				`- the use of secure identifiers and passwords by Users and the protection and confidentiality of these identifiers and passwords`,
				`- the impossibility of access to the Services by staff members or third parties not authorized by him;`,
				`- errors made by Users when using the Services and connecting to the Services;`,
				`- the quality and electronic transmission of the Content when it is transmitted via telecommunications networks and, more generally, the quality and reliability of the telecommunications links between the Client'scomputer tools and the point of access to the Services;`,
				`- the storage of Content and other data and information that are specific to it and that are derived from the Services, their storage on the Application Solutions does not constitute legal archiving and only meets the need for online consultation and / or downloading.`,
				`In particular, the Customer acknowledges that it is its sole responsibility to fill in all the Content specific to it or its Users in the Application Solutions, to set up its Account in real time according to any change in its situation or that of its Staff Members and to update it in real time, REVOLUSPACE not being responsible for verifying such Content since the processing of such Content by the Application Solutions is done automatically.`,
				`Consequently, the Customer acknowledges that any incompleteness, inaccuracy or omission may result in errors in the documents and data produced by the Services provided by REVOLUSPACE, and REVOLUSPACE shall not be held liable in this respect.`,
				`The Customer shall be solely responsible for the consequences of its actions, faults, errors or omissions, as well as those of Users, which may give rise to liability.`
			]
		},
		{
			title: "12. Termination",
			paragraphs: [""]
		},
		{
			title: "12.1 Termination at the Customer's initiative",
			paragraphs: [
				`The Customer may request to terminate the Contract by sending a request via the "CONTACT" section of the Customer's Administrator Account no later than fifteen (15) days before the end of the current contractual period or by indicating the date on which the Customer wishes to terminate the Contract if this date is later than the end of the current contractual period.`,
				`In the event of a request for termination in accordance with the above-mentioned procedure, the termination will take effect at the end of the current contractual period or on the effective date of the termination indicated by the Customer if it occurs after that date.`,
				`In the absence of termination under the above conditions, the Agreement will be tacitly renewed for contractual periods corresponding to the Term specified in the Subscription Agreement.`
			]
		},
		{
			title: "12.2 Termination for breach",
			paragraphs: [
				`In the event that one of the Parties fails to comply with any of its obligations under the Contract, the other Party may put it on notice to comply with its obligations. If it fails to perform its obligations within a period of fifteen (15) days from receipt of the formal notice, the other Party may terminate the Contract by operation of law with immediate effect without the need for it to perform any judicial formalities and without prejudice to any damages that it may be required to claim.`,
				`In the event of serious and/or repeated failure by the Customer to comply with its obligations, REVOLUSPACE may, at its sole initiative and without prejudice to any damages, terminate the Agreement automatically and at any time, by simple written notice.`
			]
		},
		{
			title: "12.3 Effect of termination",
			paragraphs: [
				`In the event of termination of the Agreement, for whatever reason, all sums owed by the Customer to REVOLUSPACE on the effective date of termination shall be paid to REVOLUSPACE and the termination shall not give rise to any reimbursement of sums paid to REVOLUSPACE by the Customer in connection with the performance of the Agreement.`,
				`On the effective date of termination, provision of the Services and access to the Solutions will be interrupted.`,
				`In the event of termination of the Agreement, REVOLUSPACE undertakes to restore the Customer's data in accordance with Article 15 hereof.`
			]
		},
		{
			title: '13. Personal data',
			paragraphs: [
				`The Parties undertake to comply, each insofar as it is concerned, with all the provisions applicable to them under the regulations relating to the protection of personal data, in particular the provisions of Law No. 78-17 relating to information technology, files and freedoms and those of Regulation (EU) 2016/679 of the European Parliament and of the Council of27 April 2016 on the protection of individuals with regard to the processingof personal data and on the free movement of such data.The Parties agree as follows: `,
				`In the context of the use of the Services and Application Solutions by the Customer and Users and in the context of their Parameterization, REVOLUSPACE acts as a subcontractor of the Customer. Such processing of personal data is carried out by REVOLUSPACE exclusively on behalf of and on the instructions of the Customer, who consequently declares that he is the "controller" within the meaning of the regulations on personal data.`,
				`The Customer instructs REVOLUSPACE to process the Customer's personal data for the purpose of providing the Services.`,
				`In the course of processing personal data, REVOLUSPACE may process the following categories of data`,
				`- Information relating to the User's identity: surname, first names, day and month of birth, telephone number, profile photo, biography, IP address;`,
				`- Information related to credit card transactions;`,
				`- Information about the User's professional activity: days worked, days off, place of work, position held;`,
				`- Information about the User's behavior on the Application;`,
				`- Registration information allowing the person to use the Services: email*, password, IP address, credit card information;`,
				`- Revoluspace undertakes to keep the personal data thus collected for the time strictly necessary to achieve the purposé of the processing in accordance with the legal provisions in force.`,
				`The Customer declares to be aware of the obligations incumbent upon himin his capacity as data controller.`,
				`The Customer undertakes to comply with these obligations. REVOLUSPACE shall in no event be held liable for any failure by the Customer to meet its obligations.`,
				`In particular, the Customer declares that it is aware that personal data may only be collected or processed in compliance with the regulations on the protection of personal data, in particular the provisions of Act No. 78-17 and Regulation (EU) 2016/679 referred to above. Accordingly, the Customer shall inform the data subjects of the processing of their data andshall ensure, under its responsibility, that the processing of such data has a legal basis and that the data subjects have, where applicable, given theirconsent to the collection and processing of their data as well as to its transfer to third parties. It is the Customer's responsibility to inform the persons concerned of their rights with respect to their data and the procedures for exercising these rights. The Customer therefore guaranteesREVOLUSPACE against any recourse by third parties concerning the processing of personal data by the Solution.`,
				`As a subcontractor, REVOLUSPACE undertakes to :`,
				`- process personal data only for the purpose of performing this Agreement.`,
				`- ensure that persons authorized to process personal data under this Agreement undertake to respect confidentiality or are subject to an appropriate legal obligation of confidentiality;`,
				`- take all measures required under Article 32 of Regulation (EU) 2016/679, including implementing appropriate technical and organizational measuresto ensure a level of security appropriate to the risk;`,
				`- in the event of recourse to one or more subcontractors other than those listed in this Agreement, inform the Customer of the planned changes regarding the addition or replacement of a subcontractor, thereby giving the Customer the opportunity to raise objections to such changes. Any objections must be notified by Customer to REVOLUSPACE in writing withineight (8) business days of receipt of the request for approval of the subcontractor. If the Customer does not respond within this period of eight(8) working days, the Customer shall be deemed to have accepted the useof the subcontractor;`,
				`- where a processor is engaged by REVOLUSPACE to carry out specific processing activities on behalf of the Customer, to impose on such processor the same data protection obligations as those stipulated in this Article, in particular as regards presenting sufficient guarantees as to the implementation of appropriate technical and organizational measures so that the processing meets the requirements of the regulations on the protection of personal data;`,
				`- taking into account the nature of the processing, assist the Customer, through appropriate technical and organizational measures, to the greatest extent possible, in fulfilling its obligation to comply with requests made to it by data subjects by virtue of exercising their rights under Chapter III of Regulation (EU) 2016/679 (right to information, right of access, rectification, erasure and objection, right to limitation of processing, right to data portability, right not to be subject to an automated individual decision, including profiling). In the event that a person concerned by the processing of personal data should contact REVOLUSPACE directly to exercise his or her rights, REVOLUSPACE will forward this request to the Customer, as soon as possible, by e-mail to thecontact address given in the Quotation, or to any other address indicated by the Customer;`,
				`- assist the Customer in ensuring compliance with the obligations set forth in Articles 32 to 36 of Regulation (EU) 2016/679, taking into account the nature of the processing and the information available to REVOLUSPACE, and in particular assist the Customer, if necessary and upon request, in ensuring compliance with its obligations relating to notification of a personal data breach and the performance of data protection impact assessments ;`,
				`- at the option of the Customer, delete all personal data or return them to the Customer at the end of the provision of services relating to the processing, and destroy existing copies, unless Union law or the law of the Member State requires the retention of personal data;`,
				`- inform the Customer immediately if, in REVOLUSPACE's opinion, an instruction from the Customer would constitute a violation of the regulations on the protection of personal data;`,
				`- In the event that REVOLUSPACE becomes aware, under the terms of the Agreement, of a personal data breach, REVOLUSPACE undertakes to notifythe Customer of this data breach as soon as possible and to provide the Customer with any information that will enable it to meet its own obligations.`,
				`The persons concerned by the processing have various rights in respect of the protection of personal data (in particular a right of access and rectification of information concerning them) which may be exercised by e-mail to contact@Revoluspace.com or by post to the attention of REVOLUSPACE, 64, rue Vergniaud 75013 Paris, accompanied by a photocopy of an identity card.`,
				`REVOLUSPACE undertakes to keep an up-to-date record of the processing of the Customer's personal data that it carries out as data controller.`
			]
		},
		{
			title: "14. Assignment, sublicense",
			paragraphs: [
				`The Customer acknowledges that the Agreement is entered into intuitu personae. Consequently, the Customer may not assign all or part of the rights and obligations under the Agreement without the prior written consent of REVOLUSPACE, whether by partial or full assignment, sublicense or any other Agreement providing for the transfer of such rightsand obligations.`,
				`REVOLUSPACE shall remain free to assign all or part of the Contract, without the prior consent of the Customer and after notifying the Customer, to any affiliate or third party of its choice, whether under a partial or full assignment, a sublicense or any other Contract providing for the transfer of such rights and obligations.`
			]
		},
		{
			title: "15. Termination of contract",
			paragraphs: [
				`In the event of termination of the contractual relationship for any reason whatsoever, REVOLUSPACE may, at the Customer's request, return all dataand information concerning the Customer. REVOLUSPACE will use its best efforts to return the data and information as soon as possible.The Customer's request must be made within a period not exceeding thirty(30) calendar days from the termination of the Agreement for any reason whatsoever.`,
				`All Customer data and information will be made available to the Customer in the form of a download or, if the volume is too great, by sending an external medium.`,
				`REVOLUSPACE may draw up an estimate in the event of a special request from the Customer that would entail additional costs in connection with the transferability of its data and information (e.g. conversion to a complex format).`,
				`In the absence of a request for return within sixty (60) days following the end of the Contract or its termination for any reason whatsoever, the Customer Content will undergo a deletion process designed to render it unusable, unless European Union or French law requires the retention of certain personal data.`
			]
		},
		{
			title: "16. Confidentiality",
			paragraphs: [
				`Subject to the provisions of Article 20, the Parties agree that the Contract, and more specifically the Subscription Contract, is confidential and consequently refrain from disclosing its terms to anyone.`,
				`The Parties further agree not to disclose any confidential information exchanged between them in the performance of the Agreement, it being specified that all documents, information and data communicated by one Party to the other Party in the performance of the Agreement in writing and/or orally, on any medium whatsoever and in any form whatsoever, including but not limited to graphics, drawings, plans, reports, customer lists, price lists, results, minutes of meetings, instructions and other items, shall be considered as confidential information.`,
				`The obligation of confidentiality under this section shall not cover documents, information and data :`,
				`- in the public domain at the date of disclosure or which became public after that date ;`,
				`- that has been provided to a Party on a non-confidential basis by a third party;`,
				`- that a Party would be required to deliver by virtue of a legislative or regulatory obligation, a court decision or at the request of a public authority.`,
				`Confidential information may also be communicated with the prior written consent of the other Party.`,
				`The Parties agree that, unless otherwise stipulated in the Subscription Contract, the existence of their contractual relationship does not constitute confidential information and may be subject to public disclosure.`,
				`Each Party agrees to disclose information of a confidential nature only to its employees, agents, subcontractors and authorized recipients and agrees to impose on them an obligation to protect such information from unauthorized disclosure in at least the same manner as agreed to in this Agreement and to indemnify the other Party against any disclosure by them.`,
				`The Parties undertake to ensure that information and data of all kinds exchanged between them under the Contract are kept confidential by their subcontractors, staff members and other third parties.`,
				`Any breach by a Party of the undertakings given in this article shall constitute a serious breach of its obligations, shall give rise to liability and shall entitle the other Party to compensation for the loss thus suffered;`,
				`The Parties undertake to comply with the obligations resulting from this Article for the entire duration of the Contract and for five (5) years following the expiration or termination of the Contract.`
			]
		},
		{
			title: "17. Other items",
			paragraphs: [
				`In the performance of the Agreement, the Parties agree that REVOLUSPACE may mention the corporate name and/or trade name of the Customer and reproduce the latter's trademarks and logos for reference purposes on all communication media, in particular on its Internet sites.`,
				`Consequently, the Customer grants REVOLUSPACE a non-exclusive license to use its trademarks, logos, company name and trade name for public referencing of its customers.`
			]
		},
		{
			title: "18. Exclusion of warranties",
			paragraphs: [
				`The Solution is provided to the Customer "as is" and REVOLUSPACE does not warrant that it will operate without interruption or error. The Customer is given no guarantee of the performance, availability or continued accessibility of the Solution. REVOLUSPACE is subject to a general obligation of care, particularly in view of the hazards inherent in Internet technologies.`,
				`In this respect, REVOLUSPACE shall not be held liable for any unavailability of the Solution due to external factors, in particular technical reasons, network congestion, external slowdowns, access speeds from Users' computers and/or servers, misuse of the Solution, Platform, Database and Application, or failure of Internet access providers.`,
				`Before confirming the Quotation, the Customer has been able to assess the compliance of the Solution and associated services offered by REVOLUSPACE with its needs, both in terms of functionality and purpose. Consequently, under no circumstances shall REVOLUSPACE be held liable for any failure to meet the Customer's needs.`,
				`Apart from the cases expressly provided for by law, in its capacity as host of Content posted by Users, REVOLUSPACE assumes no responsibility for Content posted by Users on the Platform, exercising no a priori control over such Content. It is the Customer's responsibility to ensure the accuracy and sincerity of the Content that its Users post on the Platform, as well as its lawfulness. Consequently, the Customer shall hold REVOLUSPACE harmless against any action, claim or proceeding, regardless of its form or nature, brought against REVOLUSPACE in respect of Content hosted on the Platform.`,
				`REVOLUSPACE does not guarantee the continued operation of the Solution or of each new version.`,
				`If REVOLUSPACE decides to discontinue its Solution, the Customer will be informed at least 60 days in advance. During this period, Users will be ableto export their Content from the Database. At the end of this period, Users will no longer have access to their Content. It is the responsibility of Users,as the "owner" of their Content, to ensure that they keep a copy.`,
				`The Customer shall refrain, during the term of the commercial relationship between the Parties, from directly or indirectly developing software likely to compete with the Solution, including in its corrected or modified versions.`,
				`Neither Party shall be liable to the other for the total or partial non-performance of its contractual obligations, to the extent that such non-performance is caused by a case of force majeure, as defined in Article 1218 of the Civil Code. These provisions do not apply to obligations to pay a sum of money.`,
				`In the event of a case of force majeure, the Party prevented from fulfilling its obligations undertakes to inform the other Party without delay by any means, as well as of the probable duration of the impediment. It shall make every effort to minimize the effects of this situation.Initially, any case of force majeure shall suspend the execution of the order. The debtor shall not be released from its obligations, but performance shall merely be suspended until such time as the impedimentceases. As soon as the impeding effect of the force majeure ceases, the obligations of the original order shall resume in full force for the remainingperiod.`,
				`If the case of force majeure lasts longer than fifteen (15) calendar days from the date of its occurrence, the Parties shall agree to meet in order to negotiate and set new contractual conditions adapted to the circumstances. If the impediment persists for more than three (3) months and if the negotiation has failed, the Quotation shall be automatically terminated, by operation of law (without judicial formality), without damages on either side.`,
				`In addition, certain circumstances external to REVOLUSPACE that do not necessarily meet the conditions of force majeure but that disrupt the supply of services covered by the order (e.g., failure of the Internet and telecommunications network, health crisis, epidemic, pandemic, climatic contingency of exceptional magnitude, etc.) may also constitute grounds for suspension of its obligations and for exemption from penalties and liability.`,
				`If any provision of the Contract is found to be null and void in accordance with a rule of law in force or a final court decision, it shall be deemed unwritten, without this resulting in the nullity of the Contract or any other provision of the Contract.`,
				`The fact that one of the Parties has not demanded the application of a provision of the General Conditions shall in no case be considered as a waiver of the rights that this Party has under this provision.`,
				`The Contract contains the entirety of the obligations of the Parties.`,
				`The provisions of the Contract shall supersede any proposals, agreements or protocols and shall prevail over any other communication between the Parties that may relate to the Contract.`,
				`No indication or document may give rise to obligations not included in the Contract unless it has been the subject of an amendment signed by the Parties.`,
				`The Parties agree that any subsequent appendices and riders shall form an integral part of the Contract.`
			]
		},
		{
			title: "19. Applicable law and jurisdiction",
			paragraphs: [
				`The Contract is subject to French law, to the exclusion of any other legislation.`,
				`Any difficulty relating to the interpretation or performance of the Contract shall fall under the exclusive jurisdiction of the courts of the Paris Court of Appeal, including in the event of a warranty claim, multiple defendants or summary proceeding.`
			]
		}
	];

	return (
		<div className="max-w-[100vw] overflow-hidden dark:bg-gray-800 min-h-screen">
			<NavBar current='general-terms' locale={locale} />
			<div className="w-[90vw] mx-auto">
				<h1 className="xl:p-0 px-8 text-left text-landing-gray text-3xl pt-10 font-bold mt-[20vh]">
					Privacy Policy
				</h1>
				{sections.map((section, idx) => (
					<SectionLegal key={idx} title={section.title!} paragraphs={section.paragraphs!} />
				))
				}
			</div>
			<Footer />
		</div>
	)
}