import CVLayout from '@/components/home-page/CVLayout';
import FlickeringGrid from '@/components/ui/flickering-grid';
import { Text } from '@/components/ui/text';

export default function CareerObjectives() {
	return (
		<CVLayout title='Career Objectives'>
			<Text>
				A dedicated web developer with over 4 years of experience is seeking a position in a dynamic and innovative
				organization.
			</Text>
			<Text>
				I am passionate about creating user-friendly websites and contributing to the success of forward-thinking
				projects.
			</Text>
			<Text className='font-medium'>Now I&apos;m asking myself:</Text>
			<div className='relative'>
				<div className='relative z-30 flex flex-col gap-y-2 rounded-md px-4 py-6'>
					<blockquote className='text-pretty font-medium italic !leading-normal ~text-2xl/4xl'>
						What career would challenge me and render me productive and helpful, so that I could shoulder my share of
						the load, and enjoy the consequences?
					</blockquote>
					<Text className='!~text-sm/lg'>― Jordan B. Peterson, 12 Rules for Life</Text>
				</div>
				{/*  */}
				<FlickeringGrid
					className='absolute inset-0 z-10 opacity-70 [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(240px_circle_at_center,white,transparent)]'
					squareSize={4}
					gridGap={6}
					color='#60A5FA'
					maxOpacity={0.7}
					flickerChance={0.15}
					height={800}
					width={800}
				/>
			</div>
		</CVLayout>
	);
}
