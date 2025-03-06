import Link from 'next/link';

const NavLinks = () => {
    return (
        <ul className="flex gap-16 text-xl text-[#E2AE63] mr-[184px] ml-[107px]">
            <li className="">
                <Link href="/">الرئيسة</Link>
            </li>
            <li>
                <Link href="/events">الفعاليات</Link>
            </li>
            <li>
                <Link href="/services">الخدمات v</Link>
            </li>
            <li>
                <Link href="/about-us">عن مداد</Link>
            </li>
        </ul>
    );
};

export default NavLinks;
