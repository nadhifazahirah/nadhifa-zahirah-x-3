import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Video, Coffee, Rocket, ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const stats = [
    { icon: Code2, value: "50+", label: "Projects Selesai" },
    { icon: Video, value: "100+", label: "Video Konten" },
    // { icon: Coffee, value: "1000+", label: "Cangkir Kopi" },
    // { icon: Rocket, value: "5+", label: "Tahun Pengalaman" },
  ];

  const accordionData = [
    {
      title: "Passionate Developer",
      content:"Saya adalah seorang Fullstack Web Developer dengan passion yang kuat dalam menciptakan solusi digital dan inovatif. Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai klien dalam mewujudkan ide ide mereka menjadi aplikasi web yang powerfull. saya selalu haus akan teknologi baru. saya fokus pada performa, keamanan, dan pengalaman pengguna (UX) yang luar biasa di setiap baris kode yang saya tulis."
  
    },
    {
      title: "Creative Content Creator",
      content:
        "Selain coding, saya juga aktif membuat konten edukasi teknologi untuk membantu orang lain belajar programming."
    },
    // {
    //   title: "Pengalaman Saya",
    //   content:
    //     "Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai klien membangun website, dashboard, dan aplikasi digital."
    // }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO / AVATAR */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">

              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">
                  5+ Tahun
                </p>
                <p className="text-sm text-muted-foreground">
                  Pengalaman
                </p>
              </div>

            </div>
          </motion.div>

          {/* TEXT + ACCORDION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Passionate Developer & Creator
            </h3>

            {/* ACCORDION */}
            <div className="space-y-4">

              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl overflow-hidden"
                >

                  {/* HEADER */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-4 font-medium"
                  >
                    {item.title}

                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* CONTENT */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-muted-foreground"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-6">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-all"
                >

                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />

                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}