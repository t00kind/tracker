import Link from 'next/link';
import localFont from 'next/font/local'

const tred = localFont({src: "./tran.woff2"})

function Logo() {
    return (
        <Link href="/" className='logo'><h1 className={tred.className}>TRCKR</h1></Link>
    );
}

export default Logo;