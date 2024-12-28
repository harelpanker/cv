'use client';

import { useWindowScroll, useViewportSize } from '@mantine/hooks';
import Logo from '@/components/layout/Logo';
import DesktopMenu from './DesktopMenu';
import MainLink from '@/components/ui/MainLink';

export default function Navbar() {
	const desktopWidth = 1024;
	const [scroll] = useWindowScroll();
	const { width } = useViewportSize();

	return (
		<div className='sticky top-0 z-30 flex w-full items-center justify-between border-b border-b-foreground/20 bg-background/60 px-5 text-foreground backdrop-blur backdrop-filter ~py-2/4 lg:px-10'>
			<Logo />
			{width > desktopWidth ? <DesktopMenu /> : <MainLink />}
		</div>
	);
}
