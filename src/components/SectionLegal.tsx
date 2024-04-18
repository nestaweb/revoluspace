interface ISectionLegalProps {
	title: string;
	paragraphs: string[];
}

const SectionLegal: React.FC<ISectionLegalProps> = ({ title, paragraphs }) => {
	return (
		<section className="flex my-3 xl:p-0 px-8">
			<div className="">
				{title && <h2 className="my-4 text-landing-gray text-xl font-bold">{title}</h2>}
				{paragraphs &&
					paragraphs.map((paragraph, idx) => (
						<p key={idx} className="my-4 text-landing-gray text-sm">
							{paragraph}
						</p>
					))}
			</div>
		</section>
	);
};

export default SectionLegal;