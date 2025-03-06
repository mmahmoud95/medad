import HeroHeader from './HeroHeader';
import HeroDescription from './HeroDescription';
import HeroImages from './HeroImages';

const HeroHome = () => {
    return (
        <section className="relative pt-44 flex items-center text-white pr-16 pl-10 pb-11 rounded-2xl overflow-hidden">
            {/* الخلفية */}
            <div className="absolute inset-0 bg-[url('/HomeHero.png')] bg-cover bg-center rounded-2xl"></div>

            {/* الـ Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* المحتوى */}
            <div className="relative z-10 flex justify-between gap-12 w-full ">
                <HeroHeader />
                <div>
                    <HeroDescription />
                    <HeroImages/>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
