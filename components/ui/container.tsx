import React from 'react';
import styles from '@/styles/container.module.css';
import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'div'> & { children: React.ReactNode };

export default function Container({ children, className, ...props }: Props) {
	return (
		<div className={cn(styles.container, className)} {...props}>
			{children}
		</div>
	);
}
