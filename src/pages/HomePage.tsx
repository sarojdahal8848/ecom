import React from "react"
import {Button, buttonVariants} from "../components/ui"
import { Link } from "react-router-dom"

const HomePage: React.FC = () => {
  return (
    <>
    <div>HomePage</div>
    <Button variant={"default"} size={"lg"} onClick={() => {console.log('hello clicked')}} className="bg-red-500">Hello</Button>
    <Link to="/contact" className={buttonVariants({variant: "outline", size: "sm"})}>Contact Button</Link>
    </>
  )
}

export default HomePage