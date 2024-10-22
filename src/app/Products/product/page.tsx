"use client"
import Link from "next/link"
export default function Product() {
    return <div className="bg-blue-400 h-screen">
        <h1 className="font-extrabold text-5xl font-serif text-center py-6">Products List</h1>
       
        <ol className="font-extrabold text-2xl font-serif text-center">
          <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
            <li>product 4</li>
            <li>product 5</li>
            <li>product 6</li>
            <li>product 7</li>
            <li>product 8</li>
            </ol>
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