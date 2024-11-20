import React from 'react';
import styles from '@/styles/container-styles.module.css';
import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'div'> & { children: React.ReactNode };

export default function Container({ children, className, ...props }: Props) {
	return (
		<div className={cn(styles.container_styles, className)} {...props}>
			{children}
		</div>
	);
}
