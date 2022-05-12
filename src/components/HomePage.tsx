import React,{useState} from 'react'
import PostCard from './PostCard'
import NewPost from './NewPost'

export default function LocationForm() {
    const [data, setData] = useState<any>({
        origin: '',
        destination: '',
        depart: new Date(),
        return: new Date(),
    })

    return(
          <div className="container px-6 py-12 h-full">
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <NewPost/>
              <div className='w-full md:w-2/3 lg:w-1/2 flex items-center gap-3'>
                <div className='bg-darkgray h-0.5 w-10/12'></div>
                <div className='flex items-center gap-1 cursor-pointer'>
                  <span className='text-xs text-dimgray'>Sort By</span>
                  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.40003 6.65999L12.8889 1.11999C12.9032 1.10963 12.9131 1.09468 12.9166 1.07794C12.9201 1.0612 12.917 1.04382 12.9079 1.02908C12.8988 1.01434 12.8844 1.00325 12.8673 0.997893C12.8502 0.992536 12.8316 0.993282 12.815 0.999991H0.296144C0.279581 0.993282 0.261002 0.992536 0.243899 0.997893C0.226796 1.00325 0.212349 1.01434 0.203272 1.02908C0.194196 1.04382 0.191116 1.0612 0.194612 1.07794C0.198108 1.09468 0.207938 1.10963 0.222255 1.11999L5.71114 6.65999C5.81968 6.76895 5.95057 6.85575 6.09577 6.91508C6.24098 6.97441 6.39745 7.00501 6.55559 7.00501C6.71373 7.00501 6.8702 6.97441 7.0154 6.91508C7.16061 6.85575 7.2915 6.76895 7.40003 6.65999Z" fill="black" fill-opacity="0.9"/>
                  </svg>

                </div>
              </div>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
    )
}