import Image from 'next/image';
import React, { useEffect, useState, FC } from 'react';

import styles from './ArrowUp.module.scss';

const ArrowUp: FC = (): JSX.Element | null => {
    const [scrollTop, setScrollTop] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {scrollTop ? (
                <button className={styles.ArrowUp} onClick={scrollUp}>
                    <Image src='/up.svg' alt='up' width={40} height={45} />
                </button>
            ) : null}
        </>
    );
};

export default ArrowUp;
