import './App.css';

import rightArrow from './icons/rightArrow.svg';
import leftArrow from './icons/leftArrow.svg';
import smartphone from './icons/smartphone.svg';
import facebook from './icons/facebook.svg';
import twitter from './icons/twitter.svg';
import linkedin from './icons/linkedin.svg';
import logo from './icons/logo.svg';
import search from './icons/search.svg';
import notifications from './icons/notifications.svg';
import play from './icons/play.svg';


import card1 from './images/card1-min.png';
import card2 from './images/card2-min.png';
import card3 from './images/card3-min.png';
import card4 from './images/card4-min.png';
import card5 from './images/card5-min.png';
import mainBackground from './images/main-background-min.png';
import sectionBackground from './images/section-background-min.png';
import mainLogo from './images/main-logo.png';

function App() {
return (
    <div className="App bg-[#141414] text-white w-full">
        <div className='Container px-20 bg-main bg-contain bg-no-repeat'>
            <div className='Header grid grid-cols-4 pt-4'>
                <div className='Logo inline-block text-xl cursor-pointer'>
                    <img className='inline w-10' src={logo} alt="" />
                    StreamVibe
                </div>
                <div className='col-span-2'>
                    <div className='border-4 rounded-xl border-[#1F1F1F] bg-[#0F0F0F] block w-fit m-auto py-2 px-4 text-[#BFBFBF]'>
                        <div className='text-[#FFFFFF] rounded-lg bg-[#1F1F1F] p-2 inline-block cursor-pointer'>Home</div>
                        <div className='rounded-lg py-2 px-4 inline-block cursor-pointer'>Movies & Shows</div>
                        <div className='rounded-lg py-2 px-4 inline-block cursor-pointer'>Support</div>
                        <div className='rounded-lg py-2 px-4 inline-block cursor-pointer'>Subscriptions</div>
                    </div>
                </div>
                <div className=''>
                    <div className='ml-auto w-fit pt-4'>
                        <img className='inline-block w-6 cursor-pointer' src={search} alt="" />
                        <img className='inline-block w-6 ml-5 cursor-pointer' src={notifications} alt="" />
                    </div>
                </div>
            </div>

            <div className='Logo py-16'>
                <img className='w-[380px] m-auto' src={mainLogo} alt="" />
            </div>

            <div className='Main mb-40'>
                <div className='w-5/6 m-auto mb-10 text-center'>
                    <h1 className='text-5xl mb-6'>The Best Streaming Experience</h1>
                    <p className='text-[#999999]'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                </div>
                <button className='rounded-lg bg-[#E50000] block py-4 px-5 m-auto'>
                    <img className='inline' src={play} alt="" />
                    Start Watching Now
                </button>
            </div>
        </div>

        <div className='Container px-20'>
            <div className='mb-36'>
                <div className='relative mb-14'>
                    <div className='inline-block'>
                        <h3 className='text-2xl mb-4'>Explore our wide variety of categories</h3>
                        <p className='text-[#999999]'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>
                    <div className='absolute right-0 p-4 rounded-xl border border-[#0F0F0F] text-5xl leading-4 text-[#333333] inline-block bg-black'>
                        <button className='rounded-lg p-1 mr-2 bg-[#1F1F1F]'>
                            <img src={leftArrow} alt="" />
                        </button>
                        <span className='text-[#E50000]'>-</span>
                        <span className=''>-</span>
                        <span className=''>-</span>
                        <span className=''>-</span>
                        <button className='rounded-lg p-1 ml-2 bg-[#1F1F1F]'>
                            <img src={rightArrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-5'>
                    <div className='bg-[#1A1A1A] p-5 rounded-xl cursor-pointer'>
                        <div className='mb-2'>
                            <img src={card1} alt="" />
                        </div>
                        <span>Action</span>
                        <span>
                            <img className='inline-block w-6 float-right' src={rightArrow} alt="" />
                        </span>
                    </div>
                    <div className='bg-[#1A1A1A] p-5 rounded-xl cursor-pointer'>
                        <div className='mb-2'>
                            <img src={card2} alt="" />
                        </div>
                        <span>Aventure</span>
                        <span>
                            <img className='inline-block w-6 float-right' src={rightArrow} alt="" />
                        </span>
                    </div>
                    <div className='bg-[#1A1A1A] p-5 rounded-xl cursor-pointer'>
                        <div className='mb-2'>
                            <img src={card3} alt="" />
                        </div>
                        <span>Comedy</span>
                        <span>
                            <img className='inline-block w-6 float-right' src={rightArrow} alt="" />
                        </span>
                    </div>
                    <div className='bg-[#1A1A1A] p-5 rounded-xl cursor-pointer'>
                        <div className='mb-2'>
                            <img src={card4} alt="" />
                        </div>
                        <span>Drama</span>
                        <span>
                            <img className='inline-block w-6 float-right' src={rightArrow} alt="" />
                        </span>
                    </div>
                    <div className='bg-[#1A1A1A] p-5 rounded-xl cursor-pointer'>
                        <div className='mb-2'>
                            <img src={card5} alt="" />
                        </div>
                        <span>Horror</span>
                        <span>
                            <img className='inline-block w-6 float-right' src={rightArrow} alt="" />
                        </span>
                    </div>
                </div>
            </div>

            <div className='mb-32'>
                <div className='mb-16'>
                    <h3 className='text-2xl mb-4'>We Provide you streaming experience across various devices.</h3>
                    <p className='text-[#999999]'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                </div>
                <div className='grid grid-cols-3 grid-rows-2 gap-5'>
                    <div className='bg-gradient border border-[#262626] rounded-xl p-8'>
                        <h4 className='text-lg mb-8'>
                            <img className='border border-[#1F1F1F] inline p-2 mr-4 rounded-lg bg-[#141414]' src={smartphone} alt="" />
                            Smartphones
                        </h4>
                        <p className='text-[#999999] text-[16px] leading-[18px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className='bg-gradient border border-[#262626] rounded-xl p-8'>
                        <h4 className='text-lg mb-8'>
                            <img className='border border-[#1F1F1F] inline p-2 mr-4 rounded-lg bg-[#141414]' src={smartphone} alt="" />
                            Tablet
                        </h4>
                        <p className='text-[#999999] text-[16px] leading-[18px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className='bg-gradient border border-[#262626] rounded-xl p-8'>
                        <h4 className='text-lg mb-8'>
                            <img className='border border-[#1F1F1F] inline p-2 mr-4 rounded-lg bg-[#141414]' src={smartphone} alt="" />
                            Smart TV
                        </h4>
                        <p className='text-[#999999] text-[16px] leading-[18px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className='bg-gradient border border-[#262626] rounded-xl p-8'>
                        <h4 className='text-lg mb-8'>
                            <img className='border border-[#1F1F1F] inline p-2 mr-4 rounded-lg bg-[#141414]' src={smartphone} alt="" />
                            Laptops
                        </h4>
                        <p className='text-[#999999] text-[16px] leading-[18px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className='bg-gradient border border-[#262626] rounded-xl p-8'>
                        <h4 className='text-lg mb-8'>
                            <img className='border border-[#1F1F1F] inline p-2 mr-4 rounded-lg bg-[#141414]' src={smartphone} alt="" />
                            Gaming Consoles
                        </h4>
                        <p className='text-[#999999] text-[16px] leading-[18px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className='bg-gradient border border-[#262626] rounded-xl p-8'>
                        <h4 className='text-lg mb-8'>
                            <img className='border border-[#1F1F1F] inline p-2 mr-4 rounded-lg bg-[#141414]' src={smartphone} alt="" />
                            VR Headsets
                        </h4>
                        <p className='text-[#999999] text-[16px] leading-[18px]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='relative'>
                    <div className='inline-block'>
                        <h3 className='text-2xl mb-4'>Frequently Asked Questions</h3>
                        <p className='text-[#999999]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                    </div>
                        <button className='absolute right-0 top-4 rounded-lg bg-[#E50000] py-2 px-5'>
                            Ask a Question
                        </button>
                </div>
                <div className='pt-16 px-10 grid grid-cols-2 gap-24'>
                    <div className=''>
                        <div className='grid grid-cols-12 pb-8 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    01
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='mb-4 cursor-pointer'>
                                    <h5 className='inline text-lg '>What is StreamVibe?</h5>
                                    <span className='text-3xl float-right mr-6'>-</span>
                                </div>
                                <p className='text-[#999999]'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    02
                                </span>
                            </div>
                            <div className='col-span-11 pl-4 '>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    03
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    04
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    05
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    06
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    07
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 py-6 border-b border-[#E50000]'>
                            <div>
                                <span className='text-lg border border-[#262626] inline px-3 py-3 mr-4 rounded-lg bg-[#1F1F1F]'>
                                    08
                                </span>
                            </div>
                            <div className='col-span-11 pl-4'>
                                <div className='cursor-pointer'>
                                    <h5 className='inline text-lg'>How much does StreamVibe cost?</h5>
                                    <span className='text-3xl float-right mr-6'>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='relative mb-16'>
                    <div className='w-4/6'>
                        <h3 className='text-2xl mb-4'>Choose the plan that's right for you</h3>
                        <p className='text-[#999999]'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                    </div>
                    <div className='absolute right-0 top-4 inline-block border-4 rounded-xl border-[#1F1F1F] bg-[#0F0F0F] py-2 px-4 text-[#BFBFBF]'>
                        <div className='text-[#FFFFFF] rounded-lg bg-[#1F1F1F] p-2 inline-block cursor-pointer'>Monthly</div>
                        <div className='rounded-lg py-2 px-4 inline-block cursor-pointer'>Yearly</div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-10 mb-28'>
                    <div className='bg-[#1A1A1A] border border-[#262626] rounded-xl p-10'>
                        <div className='mb-6'>
                            <h4 className='text-xl mb-4'>Basic Plan</h4>
                            <p className='text-[#999999] mb-6'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                            <span className='text-3xl'>$9.99</span>
                            <span className='text-[#999999]'>/month</span>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <button className='bg-[#141414] border border-[#262626] rounded-lg py-3 px-4'>Start Free Trial</button>
                            <button className='bg-[#E50000] rounded-lg py-3 px-4'>Choose Plan</button>
                        </div>
                    </div>
                    <div className='bg-[#1A1A1A] border border-[#262626] rounded-xl p-10'>
                        <div className='mb-6'>
                            <h4 className='text-xl mb-4'>Standard Plan</h4>
                            <p className='text-[#999999] mb-6'>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                            <span className='text-3xl'>$12.99</span>
                            <span className='text-[#999999]'>/month</span>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <button className='bg-[#141414] border border-[#262626] rounded-lg py-3 px-4'>Start Free Trial</button>
                            <button className='bg-[#E50000] rounded-lg py-3 px-4'>Choose Plan</button>
                        </div>
                    </div>
                    <div className='bg-[#1A1A1A] border border-[#262626] rounded-xl p-10'>
                        <div className='mb-6'>
                            <h4 className='text-xl mb-4'>Premium Plan</h4>
                            <p className='text-[#999999] mb-6'>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</p>
                            <span className='text-3xl'>$14.99</span>
                            <span className='text-[#999999]'>/month</span>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <button className='bg-[#141414] border border-[#262626] rounded-lg py-3 px-4'>Start Free Trial</button>
                            <button className='bg-[#E50000] rounded-lg py-3 px-4'>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-36'>
                <div className='p-20 bg-black bg-[url("./images/section-background-min.png")] bg-cover bg-no-repeat'>
                <div className='inline-block'>
                    <h1 className='text-3xl'>Start your free trial today!</h1>
                    <p className='text-[#999999]'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                    <button className='float-right mt-2 rounded-lg bg-[#E50000] py-2 px-5'>
                        Start a Free Trial
                    </button>
                </div>
            </div>
        </div>

        <div className='Container px-20 bg-[#0F0F0F]'>
            <div className='py-20 border-b border-[#262626]'>
                <div className='grid grid-cols-6'>
                    <div>
                        <h5 className='text-[18px] mb-4'>Home</h5>
                        <ul className='text-[#999999]'>
                            <li className='mb-2'>
                                <a href="">Categories</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Devices</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Pricing</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='mb-4 text-[18px]'>Movies</h5>
                        <ul className='list-none text-[#999999]'>
                            <li className='mb-2'>
                                <a href="">Genres</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Trending</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">New Releases</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Popular</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='mb-4 text-[18px]'>Shows</h5>
                        <ul className='list-none text-[#999999]'>
                            <li className='mb-2'>
                                <a href="">Genres</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Trending</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">New Releases</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Popular</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='mb-4 text-[18px]'>Support</h5>
                        <ul className='list-none text-[#999999]'>
                            <li className='mb-2'>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='mb-4 text-[18px]'>Subscription</h5>
                        <ul className='list-none text-[#999999]'>
                            <li className='mb-2'>
                                <a href="">Plans</a>
                            </li>
                            <li className='mb-2'>
                                <a href="">Features</a>
                            </li>
                        </ul>
                    </div>
                    

                    <div>
                        <h5 className='mb-4 text-[18px]'>Connect With Us</h5>
                        <img className='inline w-12 p-4 mr-4 rounded-lg bg-[#1A1A1A] border border-[#262626] cursor-pointer' src={facebook} alt="" />
                        <img className='inline w-12 p-4 mr-4 rounded-lg bg-[#1A1A1A] border border-[#262626] cursor-pointer' src={twitter} alt="" />
                        <img className='inline w-12 p-4 mr-4 rounded-lg bg-[#1A1A1A] border border-[#262626] cursor-pointer' src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            <div className='pt-4 pb-8 text-[#999999]'>
                <div className='Copyright inline-block'>
                    @2023 streamvib, All Rights Reserved
                </div>
                <div className='inline-block float-right'>
                    <a className='border-r border-[#262626] mr-2 pr-2' href="">Terms of Use</a>
                    <a className='border-r border-[#262626] mr-2 pr-2' href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                </div>
            </div>
        </div>

        
    </div>
);
}

export default App;
