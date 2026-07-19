const educations = [
	{
		school: 'University of Ottawa',
		program: 'Software Engineering',
		degree: 'Bachelors of Applied Science',
		start: '2024-09-04',
		end: '2029-05-01',
	},
];

const experiences = [
	{
		organization: 'Transportation Safety Board of Canada',
		title: 'Data Solutions and Development Intern',
		start: '2026-01-05',
		end: '2026-04-24',
	},
];

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'short',
		timeZone: 'UTC',
	});
}

function Timeline() {
	return (
		<div id='timeline' className='timeline-container'>
			<div className='timeline-education'>
				{educations.map((education) => (
					<div key={education.school} className='timeline-education-item'>
						<div className='card timeline-card'>
							<div className='card-body'>
								<h5 className='card-title timeline-card-title'>
									{education.school}
								</h5>
								<span className='badge timeline-badge'>
									{education.degree} in {education.program}
								</span>
								<span className='badge timeline-badge'>
									{formatDate(education.start)} – {formatDate(education.end)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='timeline-experience'>
				{experiences.map((experience) => (
					<div key={experience.organization} className='timeline-experience-item'>
						<div className='card timeline-card'>
							<div className='card-body'>
								<h5 className='card-title timeline-card-title'>
									{experience.organization}
								</h5>
								<span className='badge timeline-badge'>
									{experience.title}
								</span>
								<span className='badge timeline-badge'>
									{formatDate(experience.start)} – {formatDate(experience.end)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Timeline;
