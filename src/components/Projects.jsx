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
					<a key={project.title} href={project.url} className='media-card'>
						<img
							src={project.img}
							alt={project.title}
							className='media-card-img media-card-img--dim'
						/>
						<div className='media-card-overlay'>
							<h5 className='media-card-title'>{project.title}</h5>
							<div className='media-card-details'>
								<p className='media-card-desc'>{project.desc}</p>
								<div className='media-card-tags'>
									{project.tags.map((tag) => (
										<span key={tag} className='badge rounded-pill media-card-tag'>
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
