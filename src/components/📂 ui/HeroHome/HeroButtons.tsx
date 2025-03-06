import { Heart } from 'lucide-react';

const HeroButtons = () => {
    return (
        <div className="flex items-center gap-2.5 mt-6">
            <button className="text-black bg-[#E2AE63] px-8 py-2 text-xl font-bold rounded-lg">
                سجل الآن
            </button>
            <button className="bg-white p-3 rounded-lg">
                <Heart size={22} color="#E2AE63" />
            </button>
        </div>
    );
};

export default HeroButtons;
