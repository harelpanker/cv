import Image from 'next/image';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Title } from '@/components/ui/title';
import { Cover } from '@/components/ui/cover';
import { Text } from '@/components/ui/text';
import { HeroLinkProps } from '@/types/contact-links';
import { linksData } from './hero-section-data';

const HeroLink = ({ href, src, alt, width, height, text }: HeroLinkProps) => {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer' className='flex items-center gap-x-2'>
			<Image src={src} alt={alt} width={width} height={height} priority />
			<Text element='span' className='~text-xs/sm'>
				{text}
			</Text>
		</a>
	);
};

export default function HeroSection() {
	return (
		<Section>
			<Container className='flex-col gap-y-12 py-12 text-center lg:py-24 lg:text-left'>
				<div className='flex flex-col items-center gap-x-9 gap-y-3 lg:flex-row'>
					<figure className='max-w-[32svw] shrink-0 rounded-full border border-foreground/20 p-[2px] lg:max-w-none'>
						<Image
							src='/images/profile1.png'
							alt='Harel Panker front end web developer'
							width={200}
							height={200}
							priority
						/>
					</figure>
					<div className='flex flex-col gap-y-2'>
						<Title level={1} className='font-medium ~text-3xl/6xl'>
							<span className='block lg:inline'>
								<span className='lg:block'>Hi, I'm Harel</span> a Front End
							</span>{' '}
							<Cover>Web Developer</Cover>
						</Title>

						<div className='flex justify-center gap-x-4 lg:justify-start'>
							{linksData.map((link) => (
								<HeroLink key={link.href} {...link} />
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}