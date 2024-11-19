import React from 'react';
import styles from '@/styles/section.module.css';
import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'section'> & { children: React.ReactNode };

export default function Section({ children, className, ...props }: Props) {
	return (
		<section className={cn(styles.section, className)} {...props}>
			{children}
		</section>
	);
}
