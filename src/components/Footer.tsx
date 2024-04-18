import Link from 'next/link';

interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = () => {
	return (

		<footer className="bg-brand-gray-500 text-brand-white rounded-lg border-2 border-brand-gray-500 m-4 dark:bg-brand-gray-500">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
			<span className="text-sm sm:text-center ">© 2024 <Link href="https://revoluspace.com/" className="hover:underline">Revoluspace</Link>. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
				<li>
					<Link href="/pricing" className="hover:underline me-4 md:me-6">Pricing</Link>
				</li>
				<li>
					<Link href="/legal" className="hover:underline me-4 md:me-6">Legal</Link>
				</li>
				<li>
					<Link href="/general-terms" className="hover:underline me-4 md:me-6">General Terms</Link>
				</li>
				<li>
					<Link href="/contact" className="hover:underline me-4 md:me-6">Contact</Link>
				</li>
			</ul>
			</div>
		</footer>

	)
}

export default Footer;