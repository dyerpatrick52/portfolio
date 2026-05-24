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
		<div className='timeline-container'>
			<div className='timeline-education'>
				{educations.map((education) => (
					<div className='timeline-education-item'>
						<div className='education-timeline-card'>
							<h2>{education.school}</h2>
							<p>
								{education.degree} in {education.program}
							</p>
							<p>
								{formatDate(education.start)} -{' '}
								{formatDate(education.end)}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='timeline-experience'>
				{experiences.map((experience) => (
					<div className='timeline-experience-item'>
						<div className='experience-timeline-card'>
							<h2>{experience.organization}</h2>
							<p>{experience.title}</p>
							<p>
								{formatDate(experience.start)} -{' '}
								{formatDate(experience.end)}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Timeline;
