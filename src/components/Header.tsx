import React,{useState} from 'react'

export default function Header(){
    const [active, setActive] = useState(1)
    return(
        <div className="w-full bg-white overflow-hidden">
            <div className='flex flex-wrap lg:flex-nowrap justify-between gap-6 px-6'>
                <div className='flex gap-2 py-2 w-full items-center pl-20'>
                    <div>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34 2.5V31.5C34 32.163 33.7366 32.7989 33.2678 33.2678C32.7989 33.7366 32.163 34 31.5 34H2.5C1.83696 34 1.20107 33.7366 0.732233 33.2678C0.263392 32.7989 0 32.163 0 31.5L0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0L31.5 0C32.163 0 32.7989 0.263392 33.2678 0.732233C33.7366 1.20107 34 1.83696 34 2.5ZM10 13H5V29H10V13ZM10.45 7.5C10.4526 7.12179 10.3807 6.74677 10.2384 6.39634C10.0961 6.04591 9.88621 5.72695 9.62063 5.45765C9.35505 5.18836 9.03903 4.97402 8.69062 4.82686C8.3422 4.67971 7.96821 4.60262 7.59 4.6H7.5C6.73087 4.6 5.99325 4.90553 5.44939 5.44939C4.90553 5.99325 4.6 6.73087 4.6 7.5C4.6 8.26913 4.90553 9.00675 5.44939 9.55061C5.99325 10.0945 6.73087 10.4 7.5 10.4C7.87824 10.4093 8.2546 10.344 8.60758 10.2078C8.96057 10.0716 9.28326 9.86717 9.55721 9.60622C9.83117 9.34527 10.051 9.03289 10.2042 8.68694C10.3574 8.34099 10.4409 7.96824 10.45 7.59V7.5ZM29 19.28C29 14.47 25.94 12.6 22.9 12.6C21.9046 12.5502 20.9136 12.7622 20.0258 13.2149C19.1379 13.6676 18.3843 14.3451 17.84 15.18H17.7V13H13V29H18V20.49C17.9277 19.6184 18.2023 18.7535 18.764 18.0832C19.3257 17.4129 20.1292 16.9913 21 16.91H21.19C22.78 16.91 23.96 17.91 23.96 20.43V29H28.96L29 19.28Z" fill="#0A66C2"/>
                        </svg>
                    </div>
                    <div className=" flex justify-start items-center relative">
                        <input className="text-sm leading-none bg-[#EEF3F8] text-left text-gray-600 px-4 py-2 pl-10 w-full rounded  outline-none" type="text" placeholder="Search"/>
                        <svg className="absolute left-3 z-10 cursor-pointer pt-2" width="25" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M14.56 12.995L11.3 9.32749C11.9493 8.0213 12.1566 6.49496 11.8836 5.03026C11.6107 3.56557 10.8759 2.26141 9.81501 1.35855C8.75411 0.455692 7.43869 0.0150962 6.11159 0.118102C4.78449 0.221108 3.53532 0.860761 2.59468 1.91897C1.65405 2.97719 1.08547 4.3825 0.993909 5.87549C0.902348 7.36848 1.29399 8.84833 2.09653 10.0418C2.89907 11.2354 4.05832 12.0619 5.36028 12.369C6.66223 12.6761 8.01897 12.4429 9.18003 11.7125L12.44 15.38C12.5774 15.5458 12.743 15.6788 12.927 15.771C13.111 15.8632 13.3096 15.9128 13.511 15.9168C13.7124 15.9208 13.9125 15.8791 14.0992 15.7943C14.286 15.7094 14.4557 15.5831 14.5981 15.4228C14.7405 15.2626 14.8528 15.0717 14.9283 14.8616C15.0037 14.6515 15.0408 14.4264 15.0372 14.1998C15.0337 13.9732 14.9896 13.7498 14.9076 13.5428C14.8256 13.3358 14.7074 13.1495 14.56 12.995ZM3.00004 6.31249C3.00004 5.53373 3.20531 4.77245 3.58989 4.12494C3.97448 3.47742 4.5211 2.97274 5.16064 2.67472C5.80018 2.3767 6.50392 2.29872 7.18285 2.45065C7.86178 2.60258 8.48542 2.97759 8.97491 3.52826C9.46439 4.07893 9.79774 4.78052 9.93278 5.54432C10.0678 6.30812 9.99852 7.09982 9.73361 7.81931C9.46871 8.53879 9.0201 9.15375 8.44453 9.5864C7.86896 10.0191 7.19227 10.25 6.50003 10.25C5.57178 10.25 4.68154 9.83515 4.02516 9.09672C3.36878 8.3583 3.00004 7.35678 3.00004 6.31249Z" fill="black" fill-opacity="0.9"/>
                        </svg>
                    </div>

                </div>
                <div className='flex flex-wrap md:flex-nowrap gap-6 pr-14'>
                    <div className='flex gap-2 md:gap-4 ld:gap-6 lg:border-r border-darkgray py-1 px-2 md:px-4 lg:px-6'>
                        <div onClick={()=>{setActive(1)}} className={`flex flex-col w-max items-center px-2 border-black  pb-1 cursor-pointer ${active == 1 && 'border-b-4'}`}>
                            <svg width="25" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 9V11H21V18C21 19.7 19.7 21 18 21H14V15H10V21H6C4.3 21 3 19.7 3 18V11H1V9L12 2L23 9Z" fill={`${active == 1 ? 'black' : '#666666'}`} fill-opacity={`${active == 1 ? '1' : '0.6'}`}/>
                                <path d="M20 2H17V5.2L20 7.1V2Z" fill={`${active == 1 ? 'black' : '#666666'}`} fill-opacity={`${active == 1 ? '1' : '0.6'}`}/>
                            </svg>
                            <span className={`text-xs sm:text-sm ${active == 1 ? 'text-black' : 'text-dimgray'}`}>Home</span>
                        </div>
                        <div onClick={()=>{setActive(2)}} className={`flex flex-col w-max items-center px-2 border-black  pb-1 cursor-pointer ${active == 2 && 'border-b-4'}`}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 16V22H3.5V16C3.5 14.3 4.8 13 6.5 13H9.5C11.2 13 12.5 14.3 12.5 16ZM18 13C19.9 13 21.5 11.4 21.5 9.5C21.5 7.6 19.9 6 18 6C16.1 6 14.5 7.6 14.5 9.5C14.5 11.4 16.1 13 18 13ZM19 15H17C15.6 15 14.5 16.1 14.5 17.5V22H21.5V17.5C21.5 16.1 20.4 15 19 15ZM8 2C5.5 2 3.5 4 3.5 6.5C3.5 9 5.5 11 8 11C10.5 11 12.5 9 12.5 6.5C12.5 4 10.5 2 8 2Z" fill={`${active == 2 ? 'black' : '#666666'}`} fill-opacity={`${active == 2 ? '1' : '0.6'}`}/>
                            </svg>

                            <span className={`text-xs sm:text-sm ${active == 2 ? 'text-black' : 'text-dimgray'}`}>My Network</span>
                        </div>

                        <div onClick={()=>{setActive(3)}} className={`flex flex-col w-max items-center px-2 border-black  pb-1 cursor-pointer ${active == 3 && 'border-b-4'}`}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 6V5C17.5 3.3 16.2 2 14.5 2H10.5C8.8 2 7.5 3.3 7.5 5V6H2.5V10C2.5 11.7 3.8 13 5.5 13H19.5C21.2 13 22.5 11.7 22.5 10V6H17.5ZM9.5 5C9.5 4.4 9.9 4 10.5 4H14.5C15.1 4 15.5 4.4 15.5 5V6H9.5V5ZM19.5 14C20.7 14 21.8 13.5 22.5 12.6V17C22.5 18.7 21.2 20 19.5 20H5.5C3.8 20 2.5 18.7 2.5 17V12.6C3.2 13.5 4.3 14 5.5 14H19.5Z" fill={`${active == 3 ? 'black' : '#666666'}`} fill-opacity={`${active == 3 ? '1' : '0.6'}`}/>
                            </svg>


                            <span className={`text-xs sm:text-sm ${active == 3 ? 'text-black' : 'text-dimgray'}`}>Jobs</span>
                        </div>

                        <div onClick={()=>{setActive(4)}} className={`flex flex-col w-max items-center px-2 border-black  pb-1 cursor-pointer ${active == 4 && 'border-b-4'}`}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 3H8.5C6.64348 3 4.86301 3.77847 3.55025 5.16416C2.2375 6.54984 1.5 8.42923 1.5 10.3889C1.5 12.3485 2.2375 14.2279 3.55025 15.6136C4.86301 16.9993 6.64348 17.7778 8.5 17.7778H12.5V22L20.66 16.3106C21.5512 15.639 22.2751 14.7495 22.7697 13.7183C23.2643 12.687 23.5148 11.5446 23.5 10.3889C23.5 8.42923 22.7625 6.54984 21.4497 5.16416C20.137 3.77847 18.3565 3 16.5 3ZM8.5 11.7083C8.25277 11.7083 8.0111 11.631 7.80554 11.486C7.59998 11.341 7.43976 11.1349 7.34515 10.8938C7.25054 10.6527 7.22579 10.3874 7.27402 10.1315C7.32225 9.87553 7.4413 9.64043 7.61612 9.4559C7.79093 9.27137 8.01366 9.14571 8.25614 9.0948C8.49861 9.04389 8.74995 9.07002 8.97835 9.16988C9.20676 9.26975 9.40199 9.43886 9.53934 9.65585C9.67669 9.87283 9.75 10.1279 9.75 10.3889C9.75 10.7388 9.6183 11.0744 9.38388 11.3219C9.14946 11.5693 8.83152 11.7083 8.5 11.7083ZM12.5 11.7083C12.2528 11.7083 12.0111 11.631 11.8055 11.486C11.6 11.341 11.4398 11.1349 11.3452 10.8938C11.2505 10.6527 11.2258 10.3874 11.274 10.1315C11.3222 9.87553 11.4413 9.64043 11.6161 9.4559C11.7909 9.27137 12.0137 9.14571 12.2561 9.0948C12.4986 9.04389 12.7499 9.07002 12.9784 9.16988C13.2068 9.26975 13.402 9.43886 13.5393 9.65585C13.6767 9.87283 13.75 10.1279 13.75 10.3889C13.75 10.7388 13.6183 11.0744 13.3839 11.3219C13.1495 11.5693 12.8315 11.7083 12.5 11.7083ZM16.5 11.7083C16.2528 11.7083 16.0111 11.631 15.8055 11.486C15.6 11.341 15.4398 11.1349 15.3452 10.8938C15.2505 10.6527 15.2258 10.3874 15.274 10.1315C15.3222 9.87553 15.4413 9.64043 15.6161 9.4559C15.7909 9.27137 16.0137 9.14571 16.2561 9.0948C16.4986 9.04389 16.7499 9.07002 16.9784 9.16988C17.2068 9.26975 17.402 9.43886 17.5393 9.65585C17.6767 9.87283 17.75 10.1279 17.75 10.3889C17.75 10.7388 17.6183 11.0744 17.3839 11.3219C17.1495 11.5693 16.8315 11.7083 16.5 11.7083Z" fill={`${active == 4 ? 'black' : '#666666'}`} fill-opacity={`${active == 4 ? '1' : '0.6'}`}/>
                            </svg>


                            <span className={`text-xs sm:text-sm ${active == 4 ? 'text-black' : 'text-dimgray'}`}>Messages</span>
                        </div>

                        <div onClick={()=>{setActive(5)}} className={`flex flex-col w-max items-center px-2 border-black  pb-1 cursor-pointer ${active == 5 && 'border-b-4'}`}>
                            <svg width="25" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7 19C13.9 19.3 14 19.6 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 19.6 10.1 19.3 10.3 19H2V18C2 17 2.4 16.1 3.2 15.2L4.2 14H19.9L20.9 15.2C21.7 16.2 22.1 17.1 22.1 18V19H13.7ZM18.2 7.4C17.8 4.3 15.1 2 12 2C8.9 2 6.2 4.3 5.8 7.4L5 13H19L18.2 7.4Z" fill={`${active == 5 ? 'black' : '#666666'}`} fill-opacity={`${active == 5 ? '1' : '0.6'}`}/>
                            </svg>



                            <span className={`text-xs sm:text-sm ${active == 5 ? 'text-black' : 'text-dimgray'}`}>Notifications</span>
                        </div>

                        <div onClick={()=>{setActive(6)}} className={`flex flex-col w-max items-center px-2 border-black  pb-1 cursor-pointer ${active == 6 && 'border-b-4'}`}>
                            <img src="https://th.bing.com/th/id/R.215ba40fb9ecbec4b30827894ba78cd0?rik=E9WUGcSGxVdxXQ&riu=http%3a%2f%2fwww.6dglobal.com%2fimages%2fstaff%2fbrad.barton.jpg&ehk=2Cew2qqeMYL%2fkblfAk1dA7YhWHvLTubNbKN6MmF%2foas%3d&risl=&pid=ImgRaw&r=0" alt="Profile" className='h-6 w-6 rounded-full' />

                            <div className='flex w-max justify-center'>
                                <span className={`text-xs sm:text-sm ${active == 6 ? 'text-black' : 'text-dimgray'}`}>Me</span>
                                <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.29999 10.66L14.5 5.12002C14.5136 5.10966 14.5229 5.09471 14.5262 5.07797C14.5295 5.06123 14.5266 5.04385 14.518 5.02911C14.5094 5.01437 14.4957 5.00328 14.4795 4.99792C14.4633 4.99257 14.4457 4.99331 14.43 5.00002H2.56999C2.5543 4.99331 2.5367 4.99257 2.5205 4.99792C2.50429 5.00328 2.49061 5.01437 2.48201 5.02911C2.47341 5.04385 2.47049 5.06123 2.4738 5.07797C2.47712 5.09471 2.48643 5.10966 2.49999 5.12002L7.69999 10.66C7.80282 10.769 7.92681 10.8558 8.06438 10.9151C8.20194 10.9744 8.35018 11.005 8.49999 11.005C8.64981 11.005 8.79804 10.9744 8.93561 10.9151C9.07317 10.8558 9.19717 10.769 9.29999 10.66Z" fill={`${active == 6 ? 'black' : '#666666'}`} fill-opacity={`${active == 6 ? '1' : '0.6'}`}/>
                                </svg>
                            </div>  
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col w-max items-center justify-center px-2 border-black text-ground  pb-1 cursor-pointer'>
                            <svg width="26" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10H14V14H10V10ZM10 21H14V17H10V21ZM3 14H7V10H3V14ZM3 21H7V17H3V21ZM3 7H7V3H3V7ZM17 14H21V10H17V14ZM17 3V7H21V3H17ZM10 7H14V3H10V7ZM17 21H21V17H17V21Z" fill="#666666" fill-opacity="0.6"/>
                            </svg>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.79999 10.66L14 5.12002C14.0136 5.10966 14.0229 5.09471 14.0262 5.07797C14.0295 5.06123 14.0266 5.04385 14.018 5.02911C14.0094 5.01437 13.9957 5.00328 13.9795 4.99792C13.9633 4.99257 13.9457 4.99331 13.93 5.00002H2.06999C2.0543 4.99331 2.0367 4.99257 2.0205 4.99792C2.00429 5.00328 1.99061 5.01437 1.98201 5.02911C1.97341 5.04385 1.97049 5.06123 1.9738 5.07797C1.97712 5.09471 1.98643 5.10966 1.99999 5.12002L7.19999 10.66C7.30282 10.769 7.42681 10.8558 7.56438 10.9151C7.70194 10.9744 7.85018 11.005 7.99999 11.005C8.14981 11.005 8.29804 10.9744 8.43561 10.9151C8.57317 10.8558 8.69717 10.769 8.79999 10.66Z" fill="#666666" fill-opacity="0.6"/>
                            </svg>

                        </div>
                        <div className='flex w-max justify-center items-center text-brown cursor-pointer'>
                            <p>Try Premium for free</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}