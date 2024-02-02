import React, { useState } from 'react';
import doctorImg from '../../src/assets/images/doc.png'
import star from '../../src/assets/images/star.png'

const DoctorDetails = ({id}) => {
  
  const [tab, setTab] = useState('about');

  return (
    <>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'> 
            <div className="flex items-center gap-5">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} alt="" className='w-full' />
              </figure>


              <div >
                <span className='bg-[#CCF0F3] text-blue-900 py-1 px-6 lg:py-2 lg:px-x text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                Surgeon 
                </span>
               <h3 className="text-headingColor text-[22px] leading-9 mt-3">
                Dr. John Goshing
               </h3>
               <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={star} alt="" className='w-5 h-5'/>4.8
                    <p className='text-textColor pl-2'>(26)</p>
                  </span>
               </div>
               <p className='text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              </div>

              


            </div>

            <div className="mt-[50px] border-b border-solid border-[#00000034]">
                <button onClick={()=> setTab('about')}
                        className={`${tab=='about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                  About
                </button>
                <button onClick={()=> setTab('feedback')}
                        className={`${tab=='feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                  Feedback
                </button>
            </div>

          </div>
        </div>

      </div>
    </>
    
  );
};

export default DoctorDetails;
