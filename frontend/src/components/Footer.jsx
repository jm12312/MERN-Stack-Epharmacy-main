import React from 'react'
function Footer() {
    return (
        <div className='"mt-8 w-full bg-black text-white px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 '>
            <div className='flex justify-around text-center gap-6'>
                <div className='flex flex-col w-64 gap-4'>
                    <h1 className='font-bold text-lg'>Working Hours</h1>
                    <div className='flex flex-col gap-5'>
                        <p>Monday to Sunday
                            7 am to 9 pm

                        </p>
                        <address className='font-semibold'>45 Hudson Street
                            Villa Rica, GA 30180
                        </address>
                    </div>
                </div>
                <div className='flex flex-col w-48 gap-4'>
                    <h1 className=' font-bold text-lg'>Services</h1>
                    <div className='flex flex-col gap-4'>
                        <p>Pharmacy Help Line</p>
                        <p>Specialty Medications</p> 
                    </div>
                </div>
                <div className='flex flex-col w-48 gap-4'>
                    <h1 className='font-bold text-lg'>Contact</h1>
                    <div className='flex flex-col gap-4'>
                        <p>+91 2356980</p>
                        <p>+91 4451158</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
