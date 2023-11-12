import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomeComponent from './HomeComponent'
import test, { fetchAPI } from '@/services/test'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const testapi = test();


  const [testData] = await Promise.all([testapi]);
  console.log(testData.data.characters.results);

  return (
    <div>{ }</div>
  )
}
