import Image from 'next/image'
import './page.module.css';
import Header from '@/components/Header';
import Landing from '@/components/Elements/Landing';


export default function Home() {
  return (
    <section>
      <Header />
      <Landing />
    </section>
  )
}