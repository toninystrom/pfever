import cn from 'classnames';
import React from 'react';
import styles from './GridRuler.module.scss';

type Spacing = 'sm' | 'md' | 'lg';

export const GridRuler: React.FC<{ spacing: Spacing }> = ({ spacing }) => {
    const classNames = cn(styles.GridRuler, {
        [styles[`GridRuler_spacing_${spacing}`]]: spacing,
    });
    return (
        <div className={classNames}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
                <div className={styles.GridRuler_item} key={number} />
            ))}
        </div>
    );
};
