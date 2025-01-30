import { cn } from '../../utils/utils';


type Props = {
    className: string;
    children: React.ReactNode;
}

function Box({ className, children }: Props) {

    return (
        <>
            <div className={cn('pt-20', className)}>
                {children}
            </div>
        </>
    )
}
export default Box