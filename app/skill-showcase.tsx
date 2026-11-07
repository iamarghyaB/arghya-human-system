import Image from 'next/image';
import type { toolSkillGroups } from './portfolio';
import { Tags } from './ui';

type SkillGroupId = typeof toolSkillGroups[number]['id'];
type SkillGroup = { id: SkillGroupId; title: string; items: string[] };

const skillPhotos: Record<SkillGroupId, { src: string; alt: string }> = {
  frontend: { src: '/images/skill-frontend.webp', alt: 'Arghya in a navy suit against a dark background' },
  backend: { src: '/images/skill-backend.webp', alt: 'Arghya in a navy suit in an office hallway' },
  database: { src: '/images/skill-database.webp', alt: 'Arghya wearing sunglasses and a black jacket on Saint Martin’s Island' },
  delivery: { src: '/images/skill-delivery.webp', alt: 'Arghya working alongside classmates on laptops in the lab' },
};

export function SkillShowcase({ groups }: { groups: SkillGroup[] }) {
  return (
    <fieldset className="skill-showcase">
      <legend>Skill categories</legend>
      {groups.map(({ id, title, items }, index) => (
        <div className="skill-choice" key={id}>
          <input type="radio" name="skill-category" id={`skill-${id}`} defaultChecked={index === 0} aria-controls={`skill-panel-${id}`} />
          <label htmlFor={`skill-${id}`}>{title}</label>
          <div className="skill-panel" id={`skill-panel-${id}`}>
            <div className="skill-art">
              <div className="skill-photo">
                <Image {...skillPhotos[id]} fill sizes="(max-width: 440px) 90vw, 400px" />
              </div>
              <span aria-hidden="true">( {String(index + 1).padStart(2, '0')} )</span>
            </div>
            <div className="skill-description">
              <h3>{title}</h3>
              <Tags items={items} label="Skills" />
            </div>
          </div>
        </div>
      ))}
    </fieldset>
  );
}
