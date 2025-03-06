import Image from 'next/image';
import React from 'react';
const Logo = () => {
    return (
        <Image
            src="/logo.png"
            alt="Picture of the author"
            width={223}
            height={87}
        />
    );
};

export default Logo;
