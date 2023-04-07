
import Image from "next/image";
import logo from '../../public/no-forks-given.png'
import Link from "next/link";
/**
 * 
 * @param {width} Set the max width of the logo
 * @param {height} Set the max height of the logo
 * @returns 
 */
export default function LogoNFG({ width, height }) {
    return (
        <Link href='/'>
        <Image
            src={logo}
            alt='No Forks Given logo'
            width={width}
            height={height}
        />
        </Link>
    )

}