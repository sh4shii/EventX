import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
      <div className="flex items-center">
          <Link href="/" className="w-36">
          <h1 className="ml-1 text-2xl font-bold">EventX</h1>
          </Link>
        </div>

        <p>2024 EventX. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer