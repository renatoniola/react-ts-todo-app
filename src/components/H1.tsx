import { cn } from '../lib/utils';

type Props = {
    className?: string;
    children: React.ReactNode;
}

function H1({ className, children }: Props) {

    const headerStyles = 'text-3xl mb-8';

    return (
        <>
            <h1 className={cn(headerStyles, className)}>
                {children}
            </h1>
        </>
    )
}
export default H1