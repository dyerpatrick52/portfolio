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

const cardStyle = {
	border: '2px solid var(--border)',
	borderRadius: '16px',
	backgroundColor: 'var(--bg)',
	margin: '20px',
	boxShadow: '0 6px 16px var(--shadow)',
};

const badgeStyle = {
	backgroundColor: 'var(--text-muted)',
	border: '1px solid var(--border)',
	borderRadius: '8px',
	color: '#fff',
	display: 'block',
	textAlign: 'center',
	margin: '4px 0',
	whiteSpace: 'normal',
};

function Timeline() {
	return (
		<div id='timeline' className='timeline-container'>
			<div className='timeline-education'>
				{educations.map((education) => (
					<div key={education.school} className='timeline-education-item'>
						<div className='card' style={cardStyle}>
							<div className='card-body'>
								<h5 className='card-title' style={{ color: 'var(--text)', textDecoration: 'underline' }}>
									{education.school}
								</h5>
								<span className='badge' style={badgeStyle}>
									{education.degree} in {education.program}
								</span>
								<span className='badge' style={badgeStyle}>
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
						<div className='card' style={cardStyle}>
							<div className='card-body'>
								<h5 className='card-title' style={{ color: 'var(--text)', textDecoration: 'underline' }}>
									{experience.organization}
								</h5>
								<span className='badge' style={badgeStyle}>
									{experience.title}
								</span>
								<span className='badge' style={badgeStyle}>
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
