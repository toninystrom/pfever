import cn from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Grid.module.scss';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'flex-end';
interface Props {
    children: ReactNode;
    container?: boolean;
    item?: boolean;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
}

export const Grid: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    container,
    item,
    spacing,
    justifyContent,
    alignItems,
    xs,
    sm,
    md,
    lg,
    ...props
}) => {
    const classNames = cn({
        [styles.Grid_container]: container,
        [styles.Grid_item]: item,
        [styles[`Grid_xs_${xs}`]]: xs,
        [styles[`Grid_sm_${sm}`]]: sm,
        [styles[`Grid_md_${md}`]]: md,
        [styles[`Grid_lg_${lg}`]]: lg,
        [styles[`Grid_spacing_${spacing}`]]: spacing,
        [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
        [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
    });
    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
};
