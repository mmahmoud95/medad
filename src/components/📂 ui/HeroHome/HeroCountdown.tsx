const HeroCountdown = () => {
    const countdownData = [
        { value: 360, label: 'يوم' },
        { value: 24, label: 'ساعة' },
        { value: 60, label: 'دقيقة' },
        { value: 60, label: 'ثانية' },
    ];

    return (
        <div className="flex gap-4 text-center mt-8">
            {countdownData.map((item, index) => (
                <div
                    key={index}
                    className="px-7 py-4 rounded-xl bg-white text-[#E2AE63]"
                >
                    <p className="font-bold">{item.value}</p>
                    <p className="text-black text-xs">{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default HeroCountdown;
