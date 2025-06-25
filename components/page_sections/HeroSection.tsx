export function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center">
            <video
                src="/video/background_pic.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            <div className="relative z-10 px-6 animate-fade-in-up">
                <p className="text-base font-semibold text-blue-300 tracking-wider">STRATEGY. EXECUTION. RESULTS.</p>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
                    FIND THAT MISSING PIECE
                </h1>
                <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                    We Can Find What's Missing In Your Business And Address Your Needs
                </p>
            </div>
        </section>
    );
}