const demoUrl = "https://calendly.com/akinsanyaowolabi33/30min";

export default function CTASection() {
    return (
        <section className="bg-white pt-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="bg-[#242625] rounded-[2.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none opacity-50 mix-blend-overlay"></div>
                    <div className="absolute bottom-0 right-0 w-[60%] h-[150%] bg-gradient-to-tl from-[#3a3f3b]/30 to-transparent pointer-events-none rounded-full translate-y-1/4 translate-x-1/4 blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                            Ready to Simplify<br />Compliance?
                        </h2>
                        <p className="text-[#a3a6a4] text-lg mb-10 max-w-lg leading-relaxed">
                            Join financial companies using UnifyComply to onboard customers faster while staying fully compliant.
                        </p>
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#242625] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)] active:scale-[0.98]"
                        >
                            Request a Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}