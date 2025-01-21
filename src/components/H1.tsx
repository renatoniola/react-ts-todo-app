import { cn } from '../lib/utils';

type Props = {
    className: string;
    children: React.ReactNode;
}

function H1({ className, children }: Props) {

    return (
        <>
            <h1 className={cn('text-3xl mb-10', className)}>
                {children}
            </h1>
        </>
    )
}
export default H1