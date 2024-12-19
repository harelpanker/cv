import HeroSection from '@/components/home-page/HeroSection';
import ScrollContent from '@/components/home-page/scroll-content';

// https://ui.aceternity.com/components/sparkles
// https://ui.aceternity.com/components/floating-dock
// https://motion-primitives.com/docs/magnetic

export default function Home() {
	return (
		<main className='flex flex-col pb-20 lg:gap-y-12'>
			<HeroSection />
			<ScrollContent />
		</main>
	);
}
