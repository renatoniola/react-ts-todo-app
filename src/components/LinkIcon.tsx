import { cn } from '../lib/utils';
import { Tooltip } from 'flowbite-react';

type Props = {
    children: React.ReactNode;
    className?: string;
    name?: string;
    onClick: () => void;
}

function LinkIcon({ children, className, name, onClick }: Props) {

    return (
        <>
            <Tooltip content={name}>
                <button onClick={onClick} className={cn('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group', className)}>
                    {children}
                </button>
            </Tooltip>
        </>
    )
}
export default LinkIcon