"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomeComponent from '@/components/Home/HomeComponent'
import StaticComponent from '@/components/Static-Component/StaticComponent'
import Head from 'next/head'
import CustomWebsiteComponent from '@/components/Custom-website/CustomWebsiteComponent'

export default function StaticWebsite() {
  return (
  <>

  <CustomWebsiteComponent/>
  </>
  )
}
