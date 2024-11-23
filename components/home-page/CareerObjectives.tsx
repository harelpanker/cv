import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Title } from '@/components/ui/title';
import { Text } from '@/components/ui/text';
import FlickeringGrid from '@/components/ui/flickering-grid';

export default function CareerObjectives() {
	return (
		<Section>
			<Container className='flex flex-col gap-y-6 pl-6 lg:grid lg:grid-cols-3'>
				<div>
					<Title level={2}>Career Objectives</Title>
				</div>
				<div className='flex flex-col gap-y-4 lg:col-span-2'>
					<Text>
						A dedicated web developer with over 4 years of experience is seeking a position in a dynamic and innovative
						organization.
					</Text>
					<Text>
						I am passionate about creating user-friendly websites and contributing to the success of forward-thinking
						projects.
					</Text>
					<Text>Now I'm asking myself:</Text>
					<div className='relative'>
						<div className='relative z-30 flex flex-col gap-y-2 rounded-md px-4 py-6'>
							<blockquote className='text-pretty text-2xl font-medium italic leading-relaxed'>
								What career would challenge me and render me productive and helpful, so that I could shoulder my share
								of the load, and enjoy the consequences?
							</blockquote>
							<Text className='~text-sm/base'>― Jordan B. Peterson, 12 Rules for Life</Text>
						</div>
						{/*  */}
						<FlickeringGrid
							className='absolute inset-0 z-10 opacity-50 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(240px_circle_at_center,white,transparent)]'
							squareSize={4}
							gridGap={6}
							color='#60A5FA'
							maxOpacity={0.5}
							flickerChance={0.05}
							height={800}
							width={800}
						/>
					</div>
				</div>
			</Container>
		</Section>
	);
}
