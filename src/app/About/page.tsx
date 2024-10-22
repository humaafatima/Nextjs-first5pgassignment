"use client"
import Link from "next/link"
export default function Home() {
  return <div className="bg-blue-400 h-screen">
<h1 className="font-extrabold text-5xl font-serif text-center py-6"> Hello, its my about page </h1>
<p className="font-extrabold text-2xl font-serif text-center"> We provide fine quality lawn, swiss lawn, silk and cambric fabric. </p>
  
  <p className="font-extrabold text-2xl font-serif text-center">We deal in stitched and unstitiched suits.</p> 
  <p className="font-extrabold text-2xl font-serif text-center">You will find our fabric soft and comfortable. </p>

    <ul>
    <nav className="h-full flex justify-center space-x-6 p-4 items-center bg-gray-800 mt-6">
      <li><Link href='/' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link></li>
      <li><Link href='/About' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">About</Link></li>
      <li><Link href='/Products' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Products</Link></li>
      <li><Link href='/Contact' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Contact</Link></li>
      <li><Link href='/Feedback' className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Feedback</Link></li>
    </nav>
    </ul>
    
    
  </div>
  
}