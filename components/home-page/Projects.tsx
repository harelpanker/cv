import CVLayout from './CVLayout';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import styles from '@/styles/content-layout.module.css';
import { data } from '@/lib/projects-data';
import Image from 'next/image';
import arrow from '@/public/icons/arrow-up.svg';

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
			<ul className='mt-4 flex flex-col gap-y-12'>
				{data
					.filter((item) => item.src)
					.map((item) => (
						<li key={item.name}>
							<a href={item.fullUrl} target='_blank' rel='noopener noreferrer'>
								<CardContainer>
									<CardBody className='flex flex-col gap-y-4'>
										{item.src ? (
											<CardItem as='figure' translateZ='50' className='overflow-hidden rounded-2xl'>
												<Image src={item.src} alt={item.name} />
											</CardItem>
										) : null}
										<div className='flex justify-between gap-x-4'>
											<CardItem translateZ='30'>
												<Title className={styles.title3} level={3}>
													{item.showName}
												</Title>
											</CardItem>
											<CardItem translateZ='20'>
												<Image className='opacity-80 invert' src={arrow} alt='arrow' />
											</CardItem>
										</div>
									</CardBody>
								</CardContainer>
							</a>
						</li>
					))}
			</ul>
		</CVLayout>
	);
}
