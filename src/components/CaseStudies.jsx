import comingSoon from '../assets/coming-soon.jpg';
import centretownCycles from '../assets/centretowncycles.png';
import memgame from '../assets/memgame.png'

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
		title: 'E-commerce Site',
		desc: 'A product browsing and checkout experience built around user trust and conversion.',
		tags: ['UX Research', 'React', 'Figma'],
	},
	{
		title: 'Analytics Site',
		desc: 'A data dashboard interface designed for readability and effective data visualization.',
		tags: ['Data Viz', 'React', 'Dashboard'],
	},
];

const tagStyle = {
	backgroundColor: 'rgba(255,255,255,0.15)',
	border: '1px solid rgba(255,255,255,0.3)',
	color: '#fff',
	fontSize: '8pt',
	fontFamily: 'var(--font-body)',
};

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
								style={{
									position: 'absolute',
									inset: 0,
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									opacity: study.image ? 0.7 : 0.4,
								}}
							/>
							<div
								className='card-img-overlay d-flex flex-column justify-content-end p-3'
								style={{ background: 'linear-gradient(transparent, rgba(28, 40, 32, 0.85))' }}
							>
								{!study.link && (
									<span
										className='badge rounded-pill align-self-start mb-2'
										style={{ backgroundColor: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '9pt', letterSpacing: '0.04em' }}
									>
										Coming Soon
									</span>
								)}
								<h5 className='card-title text-white mb-1'>{study.title}</h5>
								<p className='card-text mb-2' style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontSize: '9pt' }}>
									{study.desc}
								</p>
								<div className='d-flex flex-wrap gap-1'>
									{study.tags.map((tag) => (
										<span key={tag} className='badge rounded-pill' style={tagStyle}>
											{tag}
										</span>
									))}
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
							className='card'
							style={{ height: '220px', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', textDecoration: 'none', cursor: 'pointer' }}
						>
							{cardContent}
						</a>
					) : (
						<div key={study.title} className='card' style={{ height: '220px', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
							{cardContent}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CaseStudies;
