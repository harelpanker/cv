import CVLayout from '@/components/home-page/CVLayout';
import ContactButton from '@/components/home-page/ContactButton';

// https://ui.aceternity.com/components/floating-dock

export default function Contact() {
	return (
		<CVLayout title='Contact'>
			<div className='flex flex-col gap-y-16'>
				{/* deck */}
				<div></div>
				<ContactButton />
			</div>
		</CVLayout>
	);
}
