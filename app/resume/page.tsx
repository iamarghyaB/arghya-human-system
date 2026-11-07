import type { Metadata } from 'next';
import { personalProjects, profile, skillGroups } from '../portfolio';
import { Brand, External } from '../ui';
import { PrintButton } from './print-button';

export const metadata: Metadata = { title: 'Résumé', description: 'Résumé of Arghya Biswas, full-stack developer, Makezaa co-owner, and Octetec co-lead.' };

export default function Resume() {
  return (
    <div className="resume-page light">
      <div className="resume-toolbar shell">
        <Brand href="/" />
        <PrintButton />
      </div>
      <main className="resume-sheet">
        <header>
          <p className="project-meta">FULL-STACK WEB DEVELOPMENT</p>
          <h1>{profile.name}</h1>
          <p>{profile.role} · Makezaa Co-Owner · {profile.location}</p>
          <div className="project-links">
            <External href={profile.linkedin}>LinkedIn</External>
            <External href={profile.github}>GitHub</External>
            <External href={profile.studio}>Makezaa</External>
            <External href={profile.octetec}>Octetec</External>
          </div>
        </header>
        <section>
          <h2>Profile</h2>
          <p>Full-stack developer and computer science and engineering student with hands-on experience across independent apps and client projects. I work with clients to define what their website or application needs to do. My technical work covers responsive interfaces, REST APIs, authentication, and database workflows.</p>
        </section>
        <section>
          <h2>Business ventures and client work</h2>
          <article>
            <h3>Makezaa · Co-owner</h3>
            <p>I co-own a web development studio in Dhaka. Our team’s work includes An-Noor’s online donations, Golden Touch Contractors’ business website, and CampusFlow for Bangladesh University, where my contribution focused on marketing.</p>
          </article>
          <article>
            <h3>Octetec · Co-lead</h3>
            <p>I run this UK-based digital business with my partner. Our shared development team works on websites, online stores, and custom software that supports business operations.</p>
          </article>
        </section>
        <section>
          <h2>Selected personal projects</h2>
          {personalProjects.map((project) => <article key={project.slug}>
            <h3>{project.name}</h3>
            <p>{project.summary} {project.features.join(' · ')}.</p>
            <p className="resume-stack">{project.stack.join(' · ')}</p>
            <div className="project-links">
              <External href={project.live} label={`Live demo of ${project.name}`}>Live demo</External>
              <External href={project.source} label={`${project.name} source on GitHub`}>GitHub</External>
            </div>
          </article>)}
        </section>
        <section>
          <h2>Skills</h2>
          <dl>{skillGroups.map(({ title, items }) => <div key={title}><dt>{title}</dt><dd>{items.join(', ')}</dd></div>)}</dl>
        </section>
      </main>
    </div>
  );
}
