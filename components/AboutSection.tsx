// 'use client';

// import { useEffect, useRef } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import Image from 'next/image';
// import { cn } from '@/lib/utils';

// export default function AboutSection() {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, amount: 0.2 });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.1, 0.25, 0.3, 1],
//       },
//     },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <section id="about" className="py-24 bg-secondary/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="relative rounded-lg overflow-hidden">
//               {/* Image utilisée pour la section "À propos" - Source : Freepik (https://fr.freepik.com/photos-gratuite/concept-croquis-projet-construction-architecte-plan_18128783.htm) */}

//               <Image
//                 src="/about/ImageAbout.jpg"
//                 alt="Architectes travaillant sur un projet d'architecture intérieure"
//                 width={600}
//                 height={800}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-lg hidden lg:block" />
//           </div>

//           <motion.div
//             ref={ref}
//             initial="hidden"
//             animate={controls}
//             variants={staggerChildren}
//             className="lg:pl-8"
//           >
//             <motion.div variants={fadeInUp}>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Mon approche</h2>
//             </motion.div>

//               <motion.p
//               variants={fadeInUp}
//               className="text-muted-foreground mb-6"
//             >
//               Fondée par <span className="font-semibold text-black">Déborah KASSEYET</span>,
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className="text-muted-foreground mb-6"
//             >
//               <span className="font-semibold text-blue-500"> DD Interiors Home</span> est une agence d'architecture et décoration d'intérieur,
//               dédiée à la conception d’espaces de vie et de travail pensés pour allier fonctionnalité, esthétique et durabilité.
//             </motion.p>

//             <motion.p
//               variants={fadeInUp}
//               className="text-muted-foreground mb-8"
//             >
//                 Avec plus de 12 ans d'expérience, <span className="font-semibold text-black">Déborah KASSEYET</span> a mené à bien des projets variés, 
//                 allant de l'architecture résidentielle à la conception d'espaces commerciaux, 
//                 en passant par des projets d'urbanisme. Chaque réalisation reflète une harmonie entre innovation, 
//                 fonctionnalité et souci du détail.

//             </motion.p>

//             <motion.div
//               variants={staggerChildren}
//               className="grid grid-cols-2 gap-6"
//             >
//               {[
//                 { number: '12+', label: "Années d'expérience" },
//                 { number: '50+', label: "Projets réalisés" }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   className="text-center p-4 bg-background rounded-lg shadow-sm"
//                 >
//                   <div className="text-3xl font-bold mb-1">{stat.number}</div>
//                   <div className="text-sm text-muted-foreground">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }