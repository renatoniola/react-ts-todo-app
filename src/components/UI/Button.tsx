import { cn } from '../../utils/utils';

type Props = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button" | undefined;
}

function Button({ children, className, onClick, type }: Props) {

    const btnStyle = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'; 

    return (
        <>
            <button onClick={onClick} type={type} className={cn(btnStyle, className)}>
                {children}
            </button>
        </>
    )
}
export default Button