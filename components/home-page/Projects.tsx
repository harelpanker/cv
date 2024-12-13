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
			<Text>
				I&apos;m out the gate, I&apos;m two tons, tunnel vision, I go get &apos;em Atittude like a black rhino, I&apos;m
				building my momentum
			</Text>
			{/* <ul></ul> */}
		</CVLayout>
	);
}
