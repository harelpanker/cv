import CVLayout from './CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import { LinkPreview } from '@/components/ui/link-preview';
import ProjectCard from '@/components/home-page/ProjectCard';
import styles from '@/styles/content-layout.module.css';
import { data } from '@/lib/projects-data';

export default function Projects() {
	return (
		<CVLayout title='Projects'>
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
			<ul className='flex flex-col gap-y-12'>
				{data
					.filter((item) => !item.src)
					.map((item) => (
						<li key={item.name}>
							<LinkPreview url='https://tailwindcss.com' className='font-bold'>
								Tailwind CSS
							</LinkPreview>
						</li>
					))}
			</ul>
		</CVLayout>
	);
}
