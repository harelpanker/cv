import { TracingBeam } from '@/components/ui/tracing-beam';
import CareerObjectives from '@/components/home-page/CareerObjectives';
import WorkExperiance from '@/components/home-page/WorkExperiance';
import Projects from '@/components/home-page/Projects';

export default function ScrollContent() {
	return (
		<TracingBeam>
			<div className='flex flex-col gap-y-20 pl-2 md:pl-0'>
				<CareerObjectives />
				<WorkExperiance />
				<Projects />
				<div className='min-h-[60dvh]'></div>
			</div>
		</TracingBeam>
	);
}
