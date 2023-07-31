import BancoDeTalentos from '@/components/BancoDeTalentos'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import HomeLoomi from '@/components/HomeLoomi'
import Objetivos from '@/components/Objetivos'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <HomeLoomi/>
    <Objetivos/>
    <BancoDeTalentos/>
    {/* <Contato/>
    <Footer/> */}
    {/* <Link href='/contatos'>Contatos</Link> */}

    </>
  )
}
