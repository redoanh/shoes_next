import { Button } from "antd";
import Link from "next/link"
interface Props {
    children: React.ReactNode,
    className?: string;
    link?: string;
}

const ShopButton = ({ children, className, link }: Props) => {
    return (

        <Link href={`${link}`} className="text-white">
            <button className={`${className}`}>
                {children}
            </button>
        </Link>

    );
};

export default ShopButton;
