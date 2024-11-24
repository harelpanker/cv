import CVLayout from '@/components/home-page/CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import styles from '@/styles/content-layout.module.css';

export default function WorkExperiance() {
	return (
		<CVLayout title='Work Experiance'>
			<Title className={styles.title3} level={3}>
				Independent developer | 2019 - PRESENT
			</Title>
			<Text>
				For the past few years, I have been building and maintaining clients websites, working closely with marketing
				teams and designers.
			</Text>
			<Text>
				The projects I have worked on are a mix of static websites and dynamic web applications built with no-code
				tools, and <strong className={styles.strong}>NextJS</strong>.
			</Text>
			<Text>Clients I'm proudly working with:</Text>
		</CVLayout>
	);
}
