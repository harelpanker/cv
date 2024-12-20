'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FloatingDock = ({
	items,
	desktopClassName,
}: {
	items: { title: string; icon: React.ReactNode; href: string }[];
	desktopClassName?: string;
}) => {
	return <FloatingDockDesktop items={items} className={desktopClassName} />;
};

const FloatingDockDesktop = ({
	items,
	className,
}: {
	items: { title: string; icon: React.ReactNode; href: string }[];
	className?: string;
}) => {
	let mouseX = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn('mx-auto flex h-16 items-end gap-4 rounded-2xl bg-background/50 px-4 pb-3', className)}>
			{items.map((item) => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	);
};

function IconContainer({
	mouseX,
	title,
	icon,
	href,
}: {
	mouseX: MotionValue;
	title: string;
	icon: React.ReactNode;
	href: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const distance = useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
	const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

	const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
	const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

	const width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	const height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	const heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const [hovered, setHovered] = useState(false);

	return (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className='relative flex aspect-square items-center justify-center rounded-full bg-foreground/20'>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 10, x: '-50%' }}
							animate={{ opacity: 1, y: 0, x: '-50%' }}
							exit={{ opacity: 0, y: 2, x: '-50%' }}
							className='absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-foreground/20 px-2 py-0.5 text-xs text-foreground'>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div style={{ width: widthIcon, height: heightIcon }} className='flex items-center justify-center'>
					{icon}
				</motion.div>
			</motion.div>
		</a>
	);
}
