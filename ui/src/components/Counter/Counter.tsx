import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface Props {
    from: number;
    to: number;
}

const Counter: React.FC<Props> = ({ from, to }) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (node) {
            const controls = animate(from, to, {
                duration: 2,
                onUpdate(value) {
                    node.textContent = parseInt(value.toFixed(0)).toLocaleString();
                },
            });

            return () => controls.stop();
        }
    }, [from, to]);

    return <div ref={nodeRef} />;
};

export default Counter;
