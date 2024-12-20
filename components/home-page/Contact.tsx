import CVLayout from '@/components/home-page/CVLayout';
import ContactButton from '@/components/home-page/ContactButton';
import ContactDock from '@/components/home-page/ContactDock';

export default function Contact() {
	return (
		<CVLayout title='Contact'>
			<div className='mt-12 flex flex-col gap-y-4 lg:mt-0 lg:gap-y-16'>
				<ContactDock />
				<ContactButton />
			</div>
		</CVLayout>
	);
}
