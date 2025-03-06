import Image from 'next/image';

const HeroImages = () => {
    return (
        <div className="flex mt-3 justify-between">
            <Image src="/Rectangle11.png" alt="" width={420} height={260} />
            <Image src="/Rectangle13.png" alt="" width={420} height={260} />
        </div>
    );
};

export default HeroImages;
