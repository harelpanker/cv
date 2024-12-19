import HeroSection from '@/components/home-page/HeroSection';
import ScrollContent from '@/components/home-page/scroll-content';

export default function Home() {
	return (
		<main className='flex flex-col pb-20 lg:gap-y-12'>
			<HeroSection />
			<ScrollContent />
		</main>
	);
}
