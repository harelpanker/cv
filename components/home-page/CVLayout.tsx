import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Title } from '@/components/ui/title';
import styles from '@/styles/content-layout.module.css';

export default function CVLayout({ children, title }: { children: React.ReactNode; title: string }) {
	return (
		<Section>
			<Container className='flex flex-col gap-y-6 pl-6 lg:grid lg:grid-cols-3 lg:gap-x-6'>
				<div>
					<div className='lg:sticky lg:top-12'>
						<Title level={2}>{title}</Title>
					</div>
				</div>
				<div className={styles.flexContent}>{children}</div>
			</Container>
		</Section>
	);
}
