import CVLayout from './CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import ProjectCard from '@/components/home-page/ProjectCard';
import styles from '@/styles/content-layout.module.css';
import ProjectLinkPreview from '@/components/home-page/ProjectLinkPreview';
import { data } from '@/lib/projects-data';

export default function Projects() {
	return (
		<CVLayout title='Projects' id='projects'>
			<Title className={styles.title3} level={3}>
				From design to working site
			</Title>
			<Text>
				I&apos;m out the gate, I&apos;m two tons, tunnel vision, I go get &apos;em Atittude like a black rhino, I&apos;m
				building my momentum
			</Text>
			<ul className='mb-12 mt-4 flex flex-col gap-y-12'>
				{data
					.filter((item) => item.src)
					.map((item) => (
						<ProjectCard key={item.name} project={item} />
					))}
			</ul>
			<Title className={styles.title3} level={4}>
				And many more...
			</Title>
			<ul className='flex flex-col'>
				{data
					.filter((item) => !item.src)
					.map((item) => (
						<ProjectLinkPreview key={item.name} fullUrl={item.fullUrl} showName={item.showName} />
					))}
			</ul>
		</CVLayout>
	);
}
