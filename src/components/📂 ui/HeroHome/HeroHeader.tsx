import { Calendar, Send } from 'lucide-react';
import HeroInfoItem from './HeroInfoItem';
import HeroButtons from './HeroButtons';
import HeroCountdown from './HeroCountdown';

const HeroHeader = () => {
    return (
        <div className="max-w-[503px] pt-10">
            <p className="text-xl text-[#E2AE63] font-bold">
                {' '}
                الفعاليه القادمه{' '}
            </p>
            <h1 className="text-[52px] font-bold leading-tight">
                المؤتمر العالمي للابحاث والمعلومات والابتكار في القطاع الخيري
                (أبحاث)
            </h1>
            <HeroInfoItem icon={Calendar} text="١٧ رمضان ١٤٤٨" />
            <HeroInfoItem icon={Send} text="مركز الملك فهد الثقافي للمؤتمرات" />
            <HeroButtons /> <HeroCountdown />
        </div>
    );
};

export default HeroHeader;
