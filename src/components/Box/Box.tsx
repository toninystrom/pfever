import React from 'react';
import styles from './Box.module.scss';

export const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={styles.Box}>{children}</div>;
};
