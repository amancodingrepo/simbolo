interface AwardItem {
  image: string;
  title: string;
  text: string;
  year: string;
}

interface AwardsSectionProps {
  headingSubtitle?: string;
  awards?: AwardItem[];
}

const defaultAwards: AwardItem[] = [
  {
    image: '/assets/images/partner/partner-7.svg',
    title: 'Excellence in Brand Storytelling',
    text: 'Global E-Commerce Ad Campaign',
    year: '/ 2025',
  },
  {
    image: '/assets/images/partner/partner-8.svg',
    title: 'Best Real Estate Media Production',
    text: 'Real Estate Portfolio Launch',
    year: '/ 2025',
  },
  {
    image: '/assets/images/partner/partner-9.svg',
    title: 'Innovation in Digital Experiences',
    text: 'Food & Beverage Web Ecosystem',
    year: '/ 2024',
  },
  {
    image: '/assets/images/partner/partner-10.svg',
    title: 'Corporate Authority Build Award',
    text: 'SaaS Brand Film Series',
    year: '/ 2024',
  },
];

export default function AwardsSection({
  headingSubtitle = 'Recognition',
  awards = defaultAwards,
}: AwardsSectionProps) {
  return (
    <div className="section-awards flat-spacing">
      <div className="container">
        <div className="heading-section center mb-48">
          <div className="heading-sub fw-semibold style-1 mb-0 effectFade fadeUp">{headingSubtitle}</div>
        </div>
        <div className="d-grid gap-16">
          {awards.map((award, i) => (
            <div
              key={i}
              className="awards-item effectFade fadeUp"
              {...(i > 0 ? { 'data-delay': `${i * 0.1}` } : {})}
            >
              <div className="image">
                <img src={award.image} alt="" />
              </div>
              <div className="title text-body-1 text-white">{award.title}</div>
              <div className="text text-body-1 text-white">{award.text}</div>
              <div className="year text-body-1 text-neutral-400">{award.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
