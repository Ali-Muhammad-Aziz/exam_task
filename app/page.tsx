import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MdDelete } from "react-icons/md";

import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const userInfo = [{
  id:0,
  name: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'


},
{
  id: 1,
  name: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'
},
{
  id: 2,
  name: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum'
},
] 

const home = () => {
  return (
    <main className='flex flex-col items-center  h-screen justify-between bg-yellow-200'>
    
       <div className='grid grid-cols-3 grid-row-1 gap-[50px] mt-20 '>
          <div className='flex flex-col p-16 justify-center items-center border border-black bg-green-200 w-[400px]  '>
          <div className='text-4xl'>lorem ipsum</div>  
          <div className='mt-4 text-6xl' >03</div>
       </div>
       <div className='flex flex-col justify-center items-center border border-black bg-blue-200  '>
       <div className='text-4xl'>lorem ipsum</div>
       <div className=' mt-4 text-6xl'>11</div>
       </div>
       <div className='flex flex-col justify-center items-center border border-black bg-pink-200  '>
       <div className='text-4xl'>lorem ipsum</div>
       <div className='mt-4 text-6xl'>52</div>
       </div>
       
       </div>
       <div className='flex gap-8 items-center justify-center'>
       <Input  placeholder='Enter something here' 
       className="w-[1100px] items-center justify-between border-black"
       />
       
        < Button type='submit' className='w-[170px]'>
          create
        </Button>
        
       </div>
       <div className='flex flex-col gap-4 justify-center  items-center'>
        {
          userInfo.map((userInfo)=>{

          return(  <Card className='flex w-[1300px] border-black h-[160px] items-center justify-between '>
  <CardHeader>
    <CardTitle className='flex justify-between items-center'>{userInfo.name}
    <button className='flex justify-between items-center pl-6'>
    <MdDelete className="flex justify-between" size={35}/>
    </button>
    </CardTitle>
    <CardDescription className='flex mt-4'>
    <Button className='flex mt-6' variant={'destructive'}
    >click me</Button>
    </CardDescription>
  </CardHeader>
  {/* <CardContent>
    
  </CardContent>
  <CardFooter>
    <Button variant={'destructive'}
    >click me</Button>
  </CardFooter> */}
</Card>)



          })
        }
       </div>
    
<div>


</div>

    </main>
  )
}

export default home