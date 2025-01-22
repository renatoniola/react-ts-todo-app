import { cn } from '../lib/utils';
import { Tooltip } from 'flowbite-react';

type Props = {
    url: string;
    children: React.ReactNode;
    className?: string
    name?: string
}

function LinkIcon({ url, children, className, name }: Props) {

    return (
        <>
            <Tooltip content={name}>
                <a href={url} className={cn('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group', className)}>
                    {children}
                </a>
            </Tooltip>
        </>
    )
}
export default LinkIcon