import comingSoon from '../assets/coming-soon.jpg';
import centretownCycles from '../assets/centretowncycles.png';
import memgame from '../assets/memgame.png';
import pageturn from '../assets/pageturn.png';
import enrolLens from '../assets/enrollens.png';

const studies = [
	{
		title: 'Centretown Cycles',
		desc: 'A service-oriented website designed for clear information hierarchy and ease of navigation.',
		tags: ['UX Design', 'React', 'JSX'],
		image: centretownCycles,
		link: 'https://centretowncycles.netlify.app/',
	},
	{
		title: 'Memory Game',
		desc: 'An interactive memory card game focused on responsive layout and smooth animations.',
		tags: ['React', 'CSS Animations', 'Game Design'],
		image: memgame,
		link: 'https://pairplaymemorygame.netlify.app/',
	},
	{
		title: 'Page Turn',
		desc: 'A product browsing and checkout experience built around user trust and conversion.',
		tags: ['UX Research', 'React', 'Figma'],
		image: pageturn,
		link: 'https://patrickspageturn.netlify.app/',
	},
	{
		title: 'Analytics Site',
		desc: 'A data dashboard interface designed for readability and effective data visualization.',
		tags: ['Data Viz', 'React', 'Dashboard'],
		image: enrolLens,
		link: 'https://enrol-lens.netlify.app/',
	},
];

function CaseStudies() {
	return (
		<div id='case-studies' className='case-studies-container'>
			<h2 className='case-studies-title'>Case Studies</h2>
			<div className='case-studies-grid'>
				{studies.map((study) => {
					const cardContent = (
						<>
							<img
								src={study.image ?? comingSoon}
								alt=''
								className={`media-card-img${study.image ? '' : ' media-card-img--dim'}`}
							/>
							<div className='media-card-overlay'>
								{!study.link && (
									<span className='badge rounded-pill media-card-badge-soon'>
										Coming Soon
									</span>
								)}
								<h5 className='media-card-title'>{study.title}</h5>
								<div className='media-card-details'>
									<p className='media-card-desc'>{study.desc}</p>
									<div className='media-card-tags'>
										{study.tags.map((tag) => (
											<span key={tag} className='badge rounded-pill media-card-tag'>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</>
					);

					return study.link ? (
						<a
							key={study.title}
							href={study.link}
							target='_blank'
							rel='noopener noreferrer'
							className='media-card'
						>
							{cardContent}
						</a>
					) : (
						<div key={study.title} className='media-card'>
							{cardContent}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CaseStudies;
