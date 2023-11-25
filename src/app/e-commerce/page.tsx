"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomeComponent from '@/components/Home/HomeComponent'
import StaticComponent from '@/components/Static-Component/StaticComponent'
import Head from 'next/head'
import EcommerceComponent from '@/components/E-commerce/EcommerceComponent'

export default function StaticWebsite() {
  return (
  <>

  <EcommerceComponent/>
  </>
  )
}
