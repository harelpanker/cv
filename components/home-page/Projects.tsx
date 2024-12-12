import CVLayout from './CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import styles from '@/styles/content-layout.module.css';

export default function Projects() {
	return (
		<CVLayout title='Projects'>
			<Title className={styles.title3} level={3}>
				Design to working site
			</Title>
			<Text>My recent projects all built with best practice in mind.</Text>
			{/* <ul></ul> */}
		</CVLayout>
	);
}
