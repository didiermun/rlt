import React from 'react';
export default function PostCard(){
    return (
        <div className='w-full md:w-2/3 lg:w-1/2 bg-white rounded-xl flex flex-col gap-0 pt-4 border-darkgray border-2'>
                <div className='w-full flex justify-between px-2'>
                  <div className='flex items-center w-max cursor-pointer'>
                    <img className='h-20 w-20 rounded-full object-contain' src="https://www.htxt.co.za/wp-content/uploads/2018/11/github-logo-1068x601.jpg" alt="" />
                    <div className='flex flex-col'>
                      <h4 className='font-semibold text-ground text-sm'>Github</h4>
                      <h6 className='text-xs text-dimgray'>4567 followers</h6>
                      <div className='text-xs text-dimgray flex gap-1'>
                        <span>4d.</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0C5.61553 0 4.26216 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303298 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM2 7C2 5.91815 2.35089 4.86548 3 4L3.55 4.55C3.69233 4.68951 3.80544 4.85599 3.8827 5.03971C3.95996 5.22342 3.99984 5.4207 4 5.62V6.69C4.00018 6.88885 4.07931 7.07948 4.22 7.22L4.78 7.78C4.92052 7.92069 5.11116 7.99983 5.31 8H6V8.69C6.00018 8.88884 6.07931 9.07948 6.22 9.22L6.78 9.78C6.9207 9.92052 6.99983 10.1112 7 10.31V12C5.67392 12 4.40215 11.4732 3.46447 10.5355C2.52679 9.59785 2 8.32608 2 7ZM8.24 11.83L10.24 9.37C10.3295 9.259 10.3855 9.12479 10.4014 8.9831C10.4174 8.84141 10.3926 8.69811 10.33 8.57L9.75 7.41C9.68052 7.27433 9.57185 7.16269 9.4381 7.08957C9.30436 7.01646 9.15171 6.98525 9 7H6V6.81C6.00096 6.71654 6.02758 6.62513 6.07696 6.54577C6.12634 6.46641 6.19658 6.40215 6.28 6.36L6.66 6.17C6.76509 6.11564 6.88169 6.08727 7 6.08727C7.11832 6.08727 7.23491 6.11564 7.34 6.17L8 6.5L8.38 5.8C8.45958 5.65258 8.50084 5.48753 8.5 5.32V4.47C8.50062 4.27316 8.57564 4.08384 8.71 3.94L9.78 2.85C10.5827 3.38684 11.2127 4.14463 11.594 5.03181C11.9753 5.91899 12.0916 6.8976 11.9287 7.84942C11.7658 8.80124 11.3308 9.68553 10.6762 10.3955C10.0217 11.1054 9.1755 11.6106 8.24 11.85V11.83Z" fill="#666666" fill-opacity="0.6"/>
                        </svg>

                      </div>
                    </div>
                  </div>
                  <div className='flex cursor-pointer'>
                    <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C12 2.39556 11.8827 2.78224 11.6629 3.11114C11.4432 3.44004 11.1308 3.69638 10.7654 3.84776C10.3999 3.99913 9.99778 4.03874 9.60982 3.96157C9.22186 3.8844 8.86549 3.69392 8.58579 3.41421C8.30608 3.13451 8.1156 2.77814 8.03843 2.39018C7.96126 2.00222 8.00087 1.60009 8.15224 1.23463C8.30362 0.869181 8.55996 0.556824 8.88886 0.337061C9.21776 0.117298 9.60444 0 10 0C10.5304 0 11.0391 0.210714 11.4142 0.585787C11.7893 0.96086 12 1.46957 12 2ZM2 0C1.60444 0 1.21776 0.117298 0.88886 0.337061C0.559962 0.556824 0.303617 0.869181 0.152242 1.23463C0.000866562 1.60009 -0.0387401 2.00222 0.0384303 2.39018C0.115601 2.77814 0.306082 3.13451 0.585787 3.41421C0.865492 3.69392 1.22186 3.8844 1.60982 3.96157C1.99778 4.03874 2.39992 3.99913 2.76537 3.84776C3.13082 3.69638 3.44318 3.44004 3.66294 3.11114C3.8827 2.78224 4 2.39556 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM18 0C17.6044 0 17.2178 0.117298 16.8889 0.337061C16.56 0.556824 16.3036 0.869181 16.1522 1.23463C16.0009 1.60009 15.9613 2.00222 16.0384 2.39018C16.1156 2.77814 16.3061 3.13451 16.5858 3.41421C16.8655 3.69392 17.2219 3.8844 17.6098 3.96157C17.9978 4.03874 18.3999 3.99913 18.7654 3.84776C19.1308 3.69638 19.4432 3.44004 19.6629 3.11114C19.8827 2.78224 20 2.39556 20 2C20 1.46957 19.7893 0.96086 19.4142 0.585787C19.0391 0.210714 18.5304 0 18 0Z" fill="#666666" fill-opacity="0.6"/>
                    </svg>
                  </div>
                </div>

                <div className='flex flex-col gap-0 w-full px-4'>
                  <p className='w-full'>
                    The 2020 State of the Octoverse uncovered COVID's impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.
                  </p>
                  <span className='text-lblue cursor-pointer'>https://buff.ly/3e3QaL7</span>
                </div>
                <div className='w-full py-2'>
                  <img className="object-cover h-80 w-full" src="https://th.bing.com/th/id/R.2c93f1e5270256bee86280cf6d96cb08?rik=x7cBLPpgsGrnmA&riu=http%3a%2f%2fi1208.photobucket.com%2falbums%2fcc375%2fLivewireGuitars%2f100_9325.jpg&ehk=VMf7ayDvsKMzjQ%2bjhd5jTwNNNVtMMjUVVQn1R7Oxw2Y%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className='flex gap-4 justify-start px-4'>
                  <div className='flex gap-2 cursor-pointer py-2 justify-center'>
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.46 10L13.55 6.09C12.7815 5.32037 12.2028 4.38223 11.86 3.35L11.37 1.88C11.1861 1.33315 10.8353 0.857703 10.3672 0.520487C9.89904 0.183272 9.33697 0.00124748 8.76001 2.99063e-06C8.39888 -0.00131262 8.04102 0.0685162 7.70687 0.205503C7.37272 0.342489 7.06882 0.54395 6.81253 0.798383C6.55624 1.05282 6.35258 1.35524 6.21317 1.68838C6.07375 2.02153 6.00132 2.37887 6.00001 2.74V3.86C6.00224 4.8283 6.15749 5.79017 6.46001 6.71L6.89001 8H2.12001C1.55775 8 1.01852 8.22336 0.620946 8.62094C0.223369 9.01851 1.23382e-05 9.55774 1.23382e-05 10.12C0.00139258 10.4656 0.0856632 10.8058 0.245748 11.112C0.405833 11.4183 0.63706 11.6816 0.920012 11.88C0.6368 12.0734 0.405004 12.333 0.244697 12.6362C0.0843904 12.9393 0.000404559 13.277 1.23382e-05 13.62C-0.00793407 14.0425 0.109383 14.4579 0.337173 14.8138C0.564963 15.1697 0.893029 15.4503 1.28001 15.62C1.10026 15.9229 1.00367 16.2678 1.00001 16.62C0.999143 17.1621 1.20595 17.6839 1.57794 18.0782C1.94992 18.4725 2.45881 18.7093 3.00001 18.74V18.88C3.00001 19.4423 3.22337 19.9815 3.62095 20.3791C4.01852 20.7766 4.55775 21 5.12001 21H12.61C13.852 20.9989 15.0771 20.7114 16.19 20.16L16.5 20H19V10H17.46ZM17 18H16L15.27 18.37C14.4328 18.7816 13.5129 18.9971 12.58 19H5.72001C5.49687 19.0089 5.27717 18.9428 5.09594 18.8123C4.91471 18.6818 4.78237 18.4944 4.72001 18.28L4.47001 17.41L3.62001 17C3.42424 16.9202 3.25877 16.7805 3.14738 16.6008C3.03598 16.4212 2.98439 16.2108 3.00001 16L3.17001 15L2.41001 14.26C2.24466 14.0985 2.14036 13.8847 2.11483 13.655C2.08931 13.4253 2.14414 13.1938 2.27001 13L2.93001 11.91L2.20001 10.81C2.15824 10.7592 2.12712 10.7006 2.10849 10.6375C2.08986 10.5745 2.0841 10.5084 2.09157 10.443C2.09903 10.3777 2.11956 10.3146 2.15194 10.2574C2.18431 10.2001 2.22787 10.15 2.28001 10.11C2.37496 10.0309 2.49675 9.99154 2.62001 10H9.67001L8.36001 6.08C8.12114 5.36424 7.99958 4.61457 8.00001 3.86V2.75C8.00507 2.55269 8.08572 2.36485 8.22529 2.22528C8.36486 2.08571 8.5527 2.00506 8.75001 2C8.90682 2.00012 9.05964 2.04938 9.187 2.14086C9.31435 2.23235 9.40983 2.36144 9.46001 2.51L10 4C10.4315 5.31491 11.1604 6.51261 12.13 7.5L16.63 12H17V18Z" fill="#0A66C2"/>
                    </svg>


                    <span className='text-lblue'>Like</span>
                  </div>
                  <div className='flex gap-2 cursor-pointer py-2 justify-center'>
                    <svg className='mt-1' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 5H16V6H6V5ZM6 9H13V8H6V9ZM22 7C22.0148 8.09493 21.7643 9.17716 21.2697 10.1541C20.7751 11.1311 20.0512 11.9738 19.16 12.61L11 18V14H7C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 2.76642e-08 7 0H15C16.8565 0 18.637 0.737498 19.9497 2.05025C21.2625 3.36301 22 5.14348 22 7ZM20 7C20 5.67392 19.4732 4.40215 18.5355 3.46447C17.5979 2.52678 16.3261 2 15 2H7C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8.32608 2.52678 9.59785 3.46447 10.5355C4.40215 11.4732 5.67392 12 7 12H13V14.28L18 11C18.6336 10.5463 19.1469 9.94478 19.4955 9.24774C19.844 8.55069 20.0172 7.77913 20 7Z" fill="#666666" fill-opacity="0.6"/>
                    </svg>


                    <span className='text-ground'>Comment</span>
                  </div>

                  <div className='flex gap-2 cursor-pointer py-2 justify-center'>
                    <svg className='mt-1' width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 7L16.39 14H14L18 8H6C5.48519 7.98939 4.97333 8.0803 4.49367 8.26756C4.014 8.45481 3.57593 8.73473 3.20448 9.09133C2.83302 9.44793 2.53546 9.87421 2.32879 10.3458C2.12212 10.8175 2.0104 11.3252 2 11.84V12C1.99772 12.4208 2.06184 12.8392 2.19 13.24L3.12 16H1L0.27 13.78C0.0908939 13.1831 -6.61168e-05 12.5632 3.60573e-08 11.94C0.0158096 10.3591 0.654923 8.84837 1.77843 7.73609C2.90194 6.62382 4.41904 5.99992 6 6H18L14 0H16.39L21 7Z" fill="#666666" fill-opacity="0.6"/>
                    </svg>
                    <span className='text-ground'>Share</span>
                  </div>

                  <div className='flex gap-2 cursor-pointer py-2 justify-center'>
                    <svg className='mt-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 0L0 7L7.66 11.26L16 5L9.74 13.34L14 21L21 0Z" fill="#666666" fill-opacity="0.6"/>
                    </svg>

                    <span className='text-ground'>Send</span>
                  </div>
                </div>
              </div>
    )
}