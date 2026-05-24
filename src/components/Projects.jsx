import uoscheduler from '../assets/uoscheduler.png';

const projects = [
	{
		title: 'UOScheduler',
		desc: 'Scheduler Generation/Planner for uOttawa Students',
		tags: ['TypeScript', 'React', 'Algorithms'],
		url: 'https://uoscheduler.ca/',
		img: uoscheduler,
	},
];

const tagStyle = {
	backgroundColor: 'rgba(255,255,255,0.15)',
	border: '1px solid rgba(255,255,255,0.3)',
	color: '#fff',
	fontSize: '8pt',
	fontFamily: 'var(--font-body)',
};

function Projects() {
	return (
		<div id='projects' className='projects-container'>
			<h2 className='projects-title'>My Projects</h2>
			<p className='projects-subtitle'>
				Here is a list of all my past or present projects that I have
				worked on.
			</p>
			<div className='projects-grid'>
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.url}
						className='text-decoration-none'
					>
						<div
							className='card'
							style={{
								height: '220px',
								border: '1px solid var(--border)',
								borderRadius: '10px',
								overflow: 'hidden',
							}}
						>
							<img
								src={project.img}
								alt={project.title}
								style={{
									position: 'absolute',
									inset: 0,
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									opacity: 0.4,
								}}
							/>
							<div
								className='card-img-overlay d-flex flex-column justify-content-end p-3'
								style={{
									background:
										'linear-gradient(transparent, rgba(28, 40, 32, 0.85))',
								}}
							>
								<h5 className='card-title text-white mb-1'>
									{project.title}
								</h5>
								<p
									className='card-text mb-2'
									style={{
										color: 'rgba(255,255,255,0.85)',
										fontFamily: 'var(--font-body)',
										fontSize: '9pt',
									}}
								>
									{project.desc}
								</p>
								<div className='d-flex flex-wrap gap-1'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='badge rounded-pill'
											style={tagStyle}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

export default Projects;
