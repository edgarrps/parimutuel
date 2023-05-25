import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-10 bg-black h-screen">
        <p className="text-center text-8xl font-bold font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Parimutuel Project - New way to engage to crypto parimutuel</p>
      </div>
      <Footer />
    </>
  )
}
