import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react';
import ScrollingDepartment from '/components/ScrollingDepartment'
import CTASection from "/components/CTASection"
import GreetingSection from "/components/GreetingSection"
import DirectionsSection from '/components/DirectionsSection'
import Testimonials from '/components/Testimonials'


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>찬스플란트치과의원</title>
        <meta name="description" content="Welcome to the Dentist Office of Dr. Thomas Dooley, where trust and comfort are priorities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="antialiased bg-white font-sans text-gray-900">
        <main className="w-full">
          {/* Header */}
          <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
            {/* Top bar - hidden on mobile */}
            <div className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3" style={{borderColor: 'rgba(255,255,255,.25)'}}>
              <div>
                <ul className="flex text-white">
                  <li>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                      </svg>
                      <span className="ml-2">경기도 성남시 분당구 돌마로 68, 분당프라자 2층, 205호</span>
                    </div>
                  </li>
                  <li className="ml-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                      </svg>
                      <span className="ml-2">0507-1339-2866</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex justify-end text-white space-x-6">
                  <li><a href="https://blog.naver.com/chansplant" title="Blog">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19 2H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3.5L12 22l3.5-4H19a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"/>
                    </svg>
                  </a></li>
                  {/* <li><a href="#" target="_blank" title="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                    </svg>
                  </a></li> */}
                  <li><a href="https://www.instagram.com/chansplant_" target="_blank" title="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                      <circle cx="11.994" cy="11.979" r="3.003" />
                    </svg>
                  </a></li>
                  {/* <li><a href="#" target="_blank" title="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                    </svg>
                  </a></li> */}
                </ul>
              </div>
            </div>

          

            {/* Main navigation */}
            <div className="flex flex-wrap items-center justify-between py-6">
              <div className="w-1/2 md:w-auto">
                <Link href="/" className="text-white font-bold text-2xl">
                  찬스플란트치과의원
                </Link>
              </div>

              <button 
                className="md:hidden block text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

              <div className={`${menuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
                <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                  <ul className="md:flex items-center">
                    <li><Link className="py-2 inline-block md:text-white md:hidden lg:block font-semibold" href="#services">진료과목</Link></li>
                    <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#aboutus">의료진 소개</Link></li>
                    <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#appointments">진료 예약</Link></li>
                    <li className="md:ml-4 md:hidden lg:block"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#address">찾아오시는 길</Link></li>
                    <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#contact">연락처</Link></li>
                    <li className="md:ml-6 mt-3 md:mt-0">
                      <Link className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded" href="https://booking.naver.com/booking/13/bizes/326974">
                        진료 예약하기
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className="bg-gray-100">
            <section className="cover relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen" 
                     style={{background: 'linear-gradient(90deg, rgba(49, 130, 206, 1) 0%, rgba(56, 178, 172, 1) 100%)'}}>
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/cover-bg.jpg" 
                  alt="Dental office background" 
                  fill
                  className="object-cover opacity-20"
                  priority
                />
              </div>

              <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                <div>
                  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                    찬스플란트치과의원
                  </h1>
                  <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
                    어떤 수술이든 모두 자신 있습니다.
                  </p>
                  <Link href="https://booking.naver.com/booking/13/bizes/326974" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">
                    진료 예약하기
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <ScrollingDepartment/>

      <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:-mx-8">
            
            {/* Doctor Image */}
            <div className="w-full lg:w-1/2 lg:px-8 mb-8 lg:mb-0">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/images/doctor.png?v=2" 
                    alt="노재찬 원장" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* Doctor Information */}
            <div className="w-full lg:w-1/2 lg:px-8 text-center lg:text-left">
              <div className="max-w-lg mx-auto lg:mx-0">
                
                {/* Name and Title */}
                <div className="mb-6">
                  <h2 id="aboutus" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 scroll-mt-24">노재찬</h2>
                  <p className="text-xl font-semibold text-blue-600 mb-1">대표원장</p>
                  <p className="text-lg text-gray-600">구강악안면외과전문의</p>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    20여 년간의 풍부한 임상경험을 바탕으로 환자 중심의 진료철학을 실천하고 있습니다. 
                    정확한 진단과 안전한 치료를 통해 환자분들의 구강건강 회복에 최선을 다하고 있습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    끊임없는 연구와 학습을 통해 최신 치료기법을 도입하여 
                    보다 효과적이고 편안한 치료를 제공해드리겠습니다.
                  </p>
                </div>

                {/* Credentials */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">주요 경력</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>한림대학교 성심병원 치과 인턴 수료</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>보건복지부 인증 구강악안면외과 전문의 (제843호)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>대한 악안면성형재건외과학회 인정의</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>대한 치과이식임플란트학회 정회원</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>한림대학교 성심병원 치과 외래 교수</span>
                    </li>

                  </ul>
                </div>

                {/* CTA Button */}
                {/* <div>
                  <a 
                    href="/book-appointment" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    진료 예약하기
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div> */}

              </div>
            </div>
          </div>

        </section>
    <GreetingSection/>
    <CTASection/>
    <Testimonials/>

 

        <DirectionsSection/>


          {/* Footer */}
          <footer id="contact" className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
            <div className="flex flex-col md:flex-row">
              <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                <h3 className="font-bold text-2xl">찬스플란트치과의원</h3>

              </div>

              <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                <h5 className="uppercase tracking-wider font-semibold text-gray-500">진료과목</h5>
                <ul className="mt-4">
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">구강악안면외과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">구강내과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">구강병리과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">소아치과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">영상치의학과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">예방치과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">치과보존과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">치과보철과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">치주과</div></li>
                  <li className="mt-2"><div  className="opacity-75 hover:opacity-100">통합치의학과</div></li>

                </ul>
              </div>
              <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
                <ul className="mt-4 space-y-4">
                  <li>
                    <div  className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                      </svg>
                      <span className="ml-3">경기도 성남시 분당구 돌마로 68, 분당프라자 2층, 205호</span>
                    </div>
                  </li>
                  <li>
                    <div  className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                      </svg>
                      <span className="ml-3">평일 : 오전 9:00 - 오후 6:00</span>
                    </div>
                  </li>
                  <li>
                    <div  className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                      </svg>
                      <span className="ml-3">토요일 : 오전 9:00 - 오후 12:30</span>
                    </div>
                  </li>
                  <li>
                    <div className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                      </svg>
                      <span className="ml-3">점심시간 : 오후 1:00 - 오후 2:00</span>
                    </div>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414L8.586 3.172a.999.999 0 0 0-1.414 0L5.636 4.708c-.395.395-.408.972-.03 1.378.27.29.635.706.906 1.26C7.18 9.146 9.354 11.32 11.154 13.12s3.974 3.974 5.774 4.642c.554.271.97.636 1.26.906.406.378.983.365 1.378-.03l1.536-1.536a.999.999 0 0 0 0-1.414l-3.121-3.121-.274-.274z"/>
                      </svg>
                      <span className="ml-3">0507-1339-2866</span>
                    </a>
                  </li>
                </ul>
                </div>
                </div>
                </footer>
                </main>
                </div>
                </>
  )
}
