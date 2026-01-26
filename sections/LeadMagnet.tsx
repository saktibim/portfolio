import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import { ClipboardCheck, ArrowRight, ShieldAlert, TrendingDown, Layers, BellOff, Ghost } from 'lucide-react';
import { CALENDLY_URL } from '../constants';

const LeadMagnet: React.FC = () => {
    const signals = [
        {
            icon: <TrendingDown className="w-5 h-5" />,
            text: "Average Days On Hand > 90",
            description: "Your capital is literal dust on the shelf."
        },
        {
            icon: <ShieldAlert className="w-5 h-5" />,
            text: "Inconsistent Lead Times",
            description: "Stockouts and overstocking are two sides of the same coin."
        },
        {
            icon: <Layers className="w-5 h-5" />,
            text: "Fragmented Marketplace Silos",
            description: "Amazon vs. Shopify data doesn't talk to each other."
        },
        {
            icon: <BellOff className="w-5 h-5" />,
            text: "Missing Reorder Alerts",
            description: "Ordering based on 'gut feeling' rather than velocity logic."
        },
        {
            icon: <Ghost className="w-5 h-5" />,
            text: "Dead Capital 'Ghosts'",
            description: "SKUs that haven't moved in 6 months but keep racking up storage fees."
        }
    ];

    return (
        <Section id="lead-magnet" className="bg-off-black py-24 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-matrix-green/5 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-matrix-green/20 font-mono text-[10px] font-bold tracking-[0.2em] bg-matrix-green/5 text-matrix-green uppercase">
                            <ClipboardCheck className="w-3 h-3" /> Free Resource
                        </div>

                        <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                            Is your warehouse holding your <span className="text-matrix-green">cash hostage?</span>
                        </h2>

                        <p className="font-sans text-xl text-gray-400 mb-10 leading-relaxed font-light">
                            Don't let "Dead Capital" drain your margins. Download my <span className="text-white font-medium">Inventory Velocity Checklist</span> to identify the 5 critical signals of operational inefficiency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button
                                variant="primary"
                                href="https://docs.google.com/spreadsheets/d/1K0Ocy4Hpmkc0mjTSYuBG0wIxeFVRTBn9jE6ph25fIrE/edit?usp=sharing" // Placeholder link to his project
                                className="px-8 py-4 text-sm font-bold tracking-wide shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] border-matrix-green bg-matrix-green"
                            >
                                DOWNLOAD CHECKLIST (PDF)
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    if (window.Calendly) {
                                        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
                                    } else {
                                        window.open(CALENDLY_URL, '_blank');
                                    }
                                }}
                                className="px-8 py-4 text-sm font-bold tracking-wide border-white/20 text-white hover:bg-white hover:text-off-black"
                            >
                                BOOK A DIAGNOSTIC
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side: The 5 Signals List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm"
                    >
                        <h3 className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-10 pb-6 border-b border-white/10">
                            The "Dead Capital" Signals:
                        </h3>

                        <div className="space-y-8">
                            {signals.map((signal, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-matrix-green/10 flex items-center justify-center text-matrix-green group-hover:bg-matrix-green group-hover:text-off-black transition-all">
                                        {signal.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-mono text-sm font-bold text-white mb-1 tracking-tight">
                                            {signal.text}
                                        </h4>
                                        <p className="font-sans text-sm text-gray-500 font-light">
                                            {signal.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between group cursor-pointer"
                            onClick={() => window.open('https://linkedin.com/in/saktibima', '_blank')}>
                            <span className="font-mono text-[10px] text-matrix-green font-bold uppercase tracking-widest">
                                Follow for weekly ops insights
                            </span>
                            <ArrowRight className="w-4 h-4 text-matrix-green group-hover:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
};

export default LeadMagnet;
