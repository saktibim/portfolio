import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import Section from '../components/Section';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import Button from '../components/Button';
import { CALENDLY_URL } from '../constants';

declare global {
    interface Window {
        Calendly: any;
    }
}

interface ServiceDetailProps {
    service: Service;
    onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
    if (!service.content) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white"
        >
            {/* Detail Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
                    <motion.button
                        whileHover={{ x: -5 }}
                        onClick={onBack}
                        className="flex items-center text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:text-matrix-green transition-colors group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 mr-3 group-hover:text-matrix-green" />
                        BACK_TO_HQ
                    </motion.button>
                    <div className="font-mono text-[9px] font-bold text-gray-300 hidden md:block tracking-widest uppercase">
                        SERVICE_TYPE: {service.id.toUpperCase()} // STATUS: ACTIVE
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-32">
                <Section borderTop={false} className="py-0">
                    <div className="max-w-4xl mx-auto">
                        {/* Service Hero */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-20"
                        >
                            <div className="flex items-center gap-6 mb-10">
                                <div className="text-matrix-green p-3 bg-gray-50 rounded-lg">
                                    {service.icon ? React.cloneElement(service.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 }) : <Zap size={40} />}
                                </div>
                                <div className="h-px bg-gray-100 flex-grow"></div>
                            </div>

                            <h1 className="font-mono text-3xl md:text-5xl font-bold mb-8 text-off-black leading-tight tracking-tight">
                                {service.content.headline}
                            </h1>
                        </motion.div>

                        {/* Problem & Pivot */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green">
                                    01 // THE_PROBLEM
                                </h3>
                                <p className="font-sans text-lg text-gray-600 leading-relaxed font-light">
                                    {service.content.problem}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green">
                                    02 // THE_PIVOT
                                </h3>
                                <p className="font-sans text-lg text-gray-900 leading-relaxed font-medium">
                                    {service.content.pivot}
                                </p>
                            </motion.div>
                        </div>

                        {/* Tiers / Plans */}
                        <div className="mb-32">
                            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-matrix-green mb-12 text-center">
                                03 // OPERATIONAL_TIERS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {service.content.tiers.map((tier, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`border ${tier.isPopular ? 'border-matrix-green shadow-[0_0_20px_rgba(0,255,65,0.1)]' : 'border-gray-100'} p-10 bg-gray-50/30 hover:border-matrix-green transition-all group relative`}
                                    >
                                        {tier.isPopular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-matrix-green text-black font-mono text-[9px] font-bold px-3 py-1 tracking-[0.2em] shadow-lg">
                                                MOST_POPULAR
                                            </div>
                                        )}
                                        <div className="flex justify-between items-start mb-8">
                                            <h4 className="font-mono text-xl font-bold text-off-black group-hover:text-matrix-green transition-all">
                                                {tier.title}
                                            </h4>
                                        </div>

                                        <div className="mb-8">
                                            <p className="font-mono text-2xl font-bold text-off-black mb-2">{tier.price}</p>
                                            <p className="font-sans text-xs text-gray-400 uppercase tracking-widest font-bold">{tier.focus}</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div>
                                                <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-3">Service Scope</p>
                                                <p className="font-sans text-sm text-gray-600 leading-relaxed">{tier.scope}</p>
                                            </div>

                                            <div>
                                                <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-3">Key Deliverables</p>
                                                <ul className="space-y-3">
                                                    {tier.deliverables.map((d, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                                            <CheckCircle2 size={14} className="text-matrix-green flex-shrink-0" />
                                                            <span>{d}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-6 border-t border-gray-100">
                                                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-2 font-bold italic">Best For</p>
                                                <p className="font-sans text-xs text-gray-500 italic">{tier.bestFor}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Closing */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-off-black text-white p-12 md:p-20 text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-matrix-green"></div>
                            <h3 className="font-mono text-2xl md:text-3xl font-bold mb-8 relative z-10">
                                {service.content.closing.headline}
                            </h3>
                            <p className="font-sans text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light relative z-10 whitespace-pre-wrap">
                                {service.content.closing.text}
                            </p>
                            <div className="relative z-10">
                                <Button
                                    variant="primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (window.Calendly) {
                                            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
                                        } else {
                                            window.open(CALENDLY_URL, '_blank');
                                        }
                                    }}
                                    className="px-10 py-5"
                                >
                                    {service.content.closing.ctaLabel}
                                </Button>
                            </div>
                        </motion.div>

                    </div>
                </Section>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;
