// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, RefObject } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideAlerter = (ref: RefObject<Element>, callback: () => void): void => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Element)) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};
