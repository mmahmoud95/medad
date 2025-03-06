import Link from 'next/link';

const AuthButtons = () => {
    return (
        <div className="flex gap-4 absolute left-16 items-center">
            <Link
                href="/register"
                className="px-11 py-2 border rounded-lg bg-[#E2AE63] text-white cursor-pointer"
            >
                التسجيل
            </Link>
            <Link
                href="/login"
                className="px-4 py-2 text-[#E2AE63] rounded-lg cursor-pointer"
            >
                تسجيل الدخول
            </Link>
        </div>
    );
};

export default AuthButtons;
