import { LucideIcon } from 'lucide-react';

interface HeroInfoItemProps {
    icon: LucideIcon;
    text: string;
}

const HeroInfoItem = ({ icon: Icon, text }: HeroInfoItemProps) => {
    return (
        <div className="mt-3 flex gap-2 items-center">
            <Icon color="#E2AE63" size={20} absoluteStrokeWidth />
            <span className="text-lg font-bold tracking-wider">{text}</span>
        </div>
    );
};

export default HeroInfoItem;
