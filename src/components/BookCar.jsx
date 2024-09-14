import React, { useState } from 'react'
import Bg from '../assets/Book-images/book-bg.png'
import { FaCar, FaSearchLocation } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import DropDown from './DropDown'


const location = [
  'Addis Ababa',
  'Hawassa',
  'Mojo',
  'Adama',
  'Bishofetu',
]

const carType = [

  'Audi Q8 e-tron',
  'BMW 5 Series',
  'Mercedes-Benz CLA',
  'Toyota GR Supra',
  'Ford Mustang',
  'Lexus 2018',

]

function BookCar() {
  const [opt1, setOpt1] = useState(false)
  const [opt2, setOpt2] = useState(false)
  const [opt3, setOpt3] = useState(false)

  return (
    <div className='mx-[67px] max-sm:mx-[30px] p-12 max-sm:p-6 bg-white z-[5] mt-[150px] relative flex flex-col gap-4'>
      <h1 className=' relative z-[4] font-[700] text-[22px]'>Book a car</h1>
      <div className='flex flex-col sm:flex-row gap-x-6 gap-y-8 relative z-[4]'>
        {/* DropDown({placeholder, options, optState, setOptState}) */}
        <div className='w-full'>
          <span className='flex gap-3 mb-2 items-center font-[500]'>
            <FaCar className='text-[20px] text-accent' />
            Select Your Car Type
          </span>
          <DropDown id={0} options={carType} optState={opt1} setOptState={setOpt1} othStates={[setOpt2, setOpt3]} placeholder="Select Your Car Type" />
        </div>

        <div>
          <span className='flex gap-3 mb-2 items-center font-[500]'>
            <FaSearchLocation className='text-[20px] text-accent' />
            select you nearest location
          </span>
          <DropDown id={1} options={location} optState={opt2} setOptState={setOpt2} othStates={[setOpt1, setOpt3]} placeholder="Select pick-up location" />
        </div>
      </div>

      <button className='bg-accent py-[13px] font-[500] text-[18px] h-[70%] mt-7 text-white'>Search</button>
      <img className='absolute z-[3] top-0' src={Bg} alt="" />
    </div>
  )
}

export default BookCar
