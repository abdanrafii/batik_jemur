"use client"

import { motion } from "framer-motion"
import { Instagram, MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const products = [
  {
    id: 1,
    name: "Batik Sirkit",
    price: "Rp 450.000",
    image: "/sirkit1.jpeg",
    description: "Dress batik dengan motif parang klasik",
  },
  {
    id: 2,
    name: "Batik Ukel Tombel",
    price: "Rp 320.000",
    image: "/ukeltombel.jpeg",
    description: "Kemeja batik motif mega mendung",
  },
  {
    id: 3,
    name: "Batik Bata-bataan",
    price: "Rp 380.000",
    image: "/batabataan.jpeg",
    description: "Blouse batik dengan motif kawung",
  },
  {
    id: 4,
    name: "Batik Lukulo",
    price: "Rp 290.000",
    image: "/lukulo.jpeg",
    description: "Rok batik motif truntum",
  },
  {
    id: 5,
    name: "Batik Jagatan",
    price: "Rp 520.000",
    image: "/jagatan.jpeg",
    description: "Kaftan batik dengan sentuhan modern",
  },
  {
    id: 6,
    name: "Batik Jagatan Rantai",
    price: "Rp 420.000",
    image: "/jagatanrantai.jpeg",
    description: "Outer batik kombinasi motif",
  },
  {
    id: 7,
    name: "Batik Ri Pandan",
    price: "Rp 360.000",
    image: "/ri pandan.jpeg",
    description: "Kemeja batik motif parang rusak",
  },
  {
    id: 8,
    name: "Batik Sido Mukti",
    price: "Rp 400.000",
    image: "/sidoluhur.jpg",
    description: "Dress batik dengan motif bunga",
  },
  {
    id: 9,
    name: "Batik Sido Luhur",
    price: "Rp 450.000",
    image: "/sidomukti.jpg",
    description: "Kemeja batik motif kawung modern",
  },
]

const testimonials = [
  {
    name: "Sari Dewi",
    text: "Kualitas batiknya luar biasa! Motifnya indah dan bahannya sangat nyaman dipakai.",
    rating: 5,
  },
  {
    name: "Andi Pratama",
    text: "Pelayanannya ramah dan pengiriman cepat. Batiknya original dan berkualitas tinggi.",
    rating: 5,
  },
  {
    name: "Maya Sari",
    text: "Sudah berlangganan di Batik Jemur. Selalu puas dengan koleksi dan kualitasnya.",
    rating: 5,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BatikJemurLanding() {
  const handleWhatsAppOrder = (productName: string) => {
    const message = `Halo, saya tertarik dengan ${productName}. Bisa tolong berikan informasi lebih lanjut?`
    const whatsappUrl = `https://wa.me/6287778666508?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950 dark:via-gray-900 dark:to-orange-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-amber-200 dark:border-amber-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-amber-800 dark:text-amber-200"
          >
            Batik Jemur
          </motion.div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection("catalog")}
                className="text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
              >
                Katalog
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
              >
                Kontak
              </button>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Batik texture background"
            fill
            className="object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-orange-100/50 dark:from-amber-900/50 dark:to-orange-900/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-amber-900 dark:text-amber-100 mb-6 font-serif"
          >
            Batik Jemur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-amber-700 dark:text-amber-300 mb-8 font-light"
          >
            Tradition meets modern fashion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection("catalog")}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Lihat Katalog
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-4 font-serif">
              Koleksi Batik Pilihan
            </h2>
            <p className="text-lg text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
              Setiap piece dibuat dengan penuh cinta dan keahlian tinggi oleh pengrajin batik berpengalaman
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-800">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2">{product.name}</h3>
                    <p className="text-amber-700 dark:text-amber-300 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-800 dark:text-amber-200">{product.price}</span>
                      <Button
                        onClick={() => handleWhatsAppOrder(product.name)}
                        className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircle size={16} />
                        Pesan via WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-amber-50 dark:bg-amber-950/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-8 font-serif">
              Tentang Batik Jemur
            </h2>
            <div className="prose prose-lg prose-amber dark:prose-invert mx-auto">
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed mb-6">
                Batik Jemur lahir dari kecintaan mendalam terhadap warisan budaya Indonesia. Kami berkomitmen untuk
                melestarikan seni batik tradisional sambil menghadirkan desain yang relevan dengan gaya hidup modern.
              </p>
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed mb-6">
                Setiap kain batik kami dibuat dengan teknik hand-drawn dan hand-stamped oleh pengrajin berpengalaman
                dari. Kami menggunakan bahan berkualitas tinggi dan pewarna alami untuk menghasilkan
                batik yang tidak hanya indah, tetapi juga tahan lama.
              </p>
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                Dengan mengenakan batik dari Batik Jemur, Anda tidak hanya tampil elegan, tetapi juga turut melestarikan
                budaya Indonesia yang kaya dan berharga.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-4 font-serif">
              Kata Pelanggan
            </h2>
            <p className="text-lg text-amber-700 dark:text-amber-300">Kepuasan pelanggan adalah prioritas utama kami</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-amber-800 dark:text-amber-200 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-amber-900 dark:text-amber-100">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-amber-50 dark:bg-amber-950/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-8 font-serif">
              Hubungi Kami
            </h2>
            <p className="text-lg text-amber-700 dark:text-amber-300 mb-12">
              Siap membantu Anda menemukan batik impian
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link
                  href="https://wa.me/6287778666508"
                  target="_blank"
                  className="flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle size={24} />
                  <span className="text-lg font-semibold">WhatsApp</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link
                  href="https://instagram.com/batikjemur"
                  target="_blank"
                  className="flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Instagram size={24} />
                  <span className="text-lg font-semibold">Instagram</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 dark:bg-amber-950 text-amber-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-serif">Batik Jemur</h3>
            <p className="text-amber-200 mb-6">Melestarikan budaya Indonesia melalui batik berkualitas tinggi</p>
            <div className="border-t border-amber-800 pt-6">
              <p className="text-amber-300">© 2024 Batik Jemur. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  )
}
