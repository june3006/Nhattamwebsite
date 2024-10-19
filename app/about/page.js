
import CounterUp from '@/components/elements/CounterUp'
import ResizeContainer from '@/components/elements/ResizeContainer'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import NewsSlider from '@/components/slider/NewsSlider'
import OfficeSlider from '@/components/slider/OfficeSlider'
import Team2Slider from '@/components/slider/Team2Slider'
import Link from 'next/link'
export default function About() {

    return (
        <>
            <ResizeContainer />
            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >
                <div>
                    <section className="section-box box-about-section-1">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="padding-left-auto"><Link className="btn btn-tag-black" href="#">About Us</Link>
                                        <h2 className="display-2 mt-15 mb-25">Chúng tôi là đơn vị thiết kế</h2>
                                        <p className="text-xl mb-45">Với kinh nghiệm hơn một thập kỷ. 
                                        Luôn sáng tạo không ngừng nghỉ để luôn hoàn thiện và tạo ra những sản phẩm phù hợp với thị hiếu và ý tưởng khách hàng nhất.
                                        </p>
                                        <div className="box-buttons-feature-4"><Link className="btn btn-brand-4-medium mr-20" href="#">Subscribe
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                            </svg></Link><Link className="btn btn-learmore-2" href="#"><span>
                                                <svg width={39} height={38} viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" width={38} height={38} rx={19} fill="#191919" />
                                                    <g clipPath="url(#clip0_1_376)">
                                                        <path d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z" fill="#C5FF55" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_376">
                                                            <rect width={13} height={13} fill="white" transform="translate(13.5 13)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>Xem thêm</Link></div>
                                        <div className="box-border-left-author">
                                            <p className="text-22-bold">Đồng hành cùng doanh nghiệp, cá nhân để thực hiện hóa những ý tưởng thành hiện thực trong lĩnh vực Công nghệ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="box-image-rect"><img src="/assets/imgs/page/about/img-about.png" alt="Nivia" />
                                        <VideoPopup />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="box-image-rect box-image-rect-both"><img src="/assets/imgs/page/about/img-about2.png" alt="Nivia" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="padding-right-auto">
                                        <div className="box-padding-left-50 box-padding-right-50">
                                            <div className="strate-icon"><span /> Nhất Tâm Solution</div>
                                            <h2 className="heading-2 mb-20">Our Mission</h2>
                                            <p className="text-lg neutral-700">Vượt qua sự mong đợi của khách hàng để sáng tạo và tư duy tạo ra những sản phẩm, dịch vụ đột phá mang lại sự hài lòng cho khách hàng trên toàn cầu.</p>
                                            <div className="row mt-50">
                                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="card-feature-2">
                                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" />
                                                        </div>
                                                        <div className="card-info"><Link href="#">
                                                            <h3 className="text-22-bold">Phong cách thiết kế đa dạng</h3>
                                                        </Link></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                                    <div className="card-feature-2">
                                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/keep.svg" />
                                                        </div>
                                                        <div className="card-info"><Link href="#">
                                                            <h3 className="text-22-bold">Đội ngũ thiết kế năng động, sáng tạo</h3>
                                                        </Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-prepared-section">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-6 mb-30">
                                    <h2 className="heading-2">Chúng tôi cùng nhau mở rộng tầm nhìn, sáng tạo và biến nó thành hiện thực</h2>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="neutral-500">Chúng tôi không ngừng học hỏi, sẻ chia, và đồng hành cùng nhau để cùng nhau, tạo nên sự khác biệt.</h6>
                                </div>
                            </div>
                            <div className="row mt-45">
                                <div className="col-lg-4">
                                    <div className="card-feature-2 card-feature-list">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" /></div>
                                        <div className="card-info"><Link href="#">
                                            <h3 className="text-22-bold">Our Responsibility</h3>
                                            <p className="text-lg neutral-500">Dùng Công nghệ để tạo ra những sản phẩm, dịch vụ giá trị cho cuộc sống.</p>
                                        </Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-feature-2 card-feature-list">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                        <div className="card-info"><Link href="#">
                                            <h3 className="text-22-bold">Our Mission</h3>
                                            <p className="text-lg neutral-500">Vượt qua sự mong đợi của khách hàng để sáng tạo và tư duy tạo ra những sản phẩm, dịch vụ đột phá mang lại sự hài lòng cho khách hàng trên toàn cầu.</p>
                                        </Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-feature-2 card-feature-list">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" /></div>
                                        <div className="card-info"><Link href="#">
                                            <h3 className="text-22-bold">Our Approach</h3>
                                            <p className="text-lg neutral-500">Đồng hành cùng doanh nghiệp, cá nhân để thực hiện hóa những ý tưởng thành hiện thực trong lĩnh vực Công nghệ.</p>
                                        </Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box wow animate__animated animate__fadeIn box-our-team-2">
                        <div className="box-our-team-2-inner">
                            <div className="container">
                                <div className="text-center"><Link className="btn btn-brand-4-sm" href="#">Our people</Link>
                                    <h2 className="mb-20 mt-20">Meet Our Team</h2>
                                    <p className="text-md neutral-500">This is our team, a lot of smiling happy people who work hard
                                        to<br className="d-none d-lg-block" />empower your teams.</p>
                                </div>
                                <div className="box-swiper mt-60">
                                    <Team2Slider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-awards-section">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-4 mb-30">
                                    <h2 className="mb-15">Our Awards</h2>
                                    <p className="text-md neutral-700">Holisticly actualize magnetic testing procedures for high-quality
                                        initiatives. Compellingly enhance client-based users whereas strategic bandwidth.
                                        Appropriately exploit cost effective.</p>
                                </div>
                                <div className="col-lg-8 mb-30">
                                    <div className="row align-items-end">
                                        <div className="col-sm-3 col-6 mb-30"><img src="/assets/imgs/page/about/award.png" alt="Nivia" />
                                        </div>
                                        <div className="col-sm-3 col-6 mb-30"><img src="/assets/imgs/page/about/award2.png" alt="Nivia" />
                                        </div>
                                        <div className="col-sm-3 col-6 mb-30"><img src="/assets/imgs/page/about/award3.png" alt="Nivia" />
                                        </div>
                                        <div className="col-sm-3 col-6 mb-30"><img src="/assets/imgs/page/about/award4.png" alt="Nivia" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-pricing-2 box-pricing-4">
                        <div className="box-pricing-2-inner">
                            <div className="container">
                                <div className="text-center"> <Link className="btn btn-brand-4-sm" href="#">Pricing Plan</Link>
                                    <h2 className="mb-20 mt-15">Ready to Get Started? Don't Worry,<br className="d-none d-lg-block" /> We'll
                                        Keep You Under Budget</h2>
                                    <p className="text-lg neutral-500 mb-65">Get started with a 5-day trial, 25% off for Yearly Plan,
                                        Cancel anytime.</p>
                                </div>
                                <div className="block-pricing">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-pricing card-pricing-style-2">
                                                <div className="card-title">
                                                    <h6>Basic</h6>
                                                </div>
                                                <div className="card-price">
                                                    <div className="for-month">
                                                        <h1 className="heading-1">$99</h1><span className="text-20-medium color-grey">monthly</span>
                                                    </div>
                                                    <div className="for-year">
                                                        <h1 className="heading-1">$1,188</h1><span className="text-20-medium color-grey">yearly</span>
                                                    </div>
                                                </div>
                                                <div className="card-lists"><strong className="text-18-bold">What's included</strong>
                                                    <ul className="list-feature">
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 5,000 Monthly Word Limit
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 50+ Languages
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> Advance Editor Tool
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 50 Accounts
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-button"><Link className="btn btn-get-started" href="#">Get started
                                                    <svg width={23} height={8} viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z" fill="true" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-pricing card-pricing-style-2">
                                                <div className="card-title">
                                                    <h6>Professional</h6>
                                                </div>
                                                <div className="card-price">
                                                    <div className="for-month">
                                                        <h1 className="heading-1">$199</h1><span className="text-20-medium color-grey">monthly</span>
                                                    </div>
                                                    <div className="for-year">
                                                        <h1 className="heading-1">$2,388</h1><span className="text-20-medium color-grey">yearly</span>
                                                    </div>
                                                </div>
                                                <div className="card-lists"><strong className="text-18-bold">What’s included</strong>
                                                    <ul className="list-feature">
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 5,000 Monthly Word Limit
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 50+ Languages
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> Advance Editor Tool
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 50 Accounts
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-button"><Link className="btn btn-get-started" href="#">Get started
                                                    <svg width={23} height={8} viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z" fill="true" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card-pricing card-pricing-style-2">
                                                <div className="card-title">
                                                    <h6>Enterprise</h6>
                                                </div>
                                                <div className="card-price">
                                                    <div className="for-month">
                                                        <h1 className="heading-1">$399</h1><span className="text-20-medium color-grey">monthly</span>
                                                    </div>
                                                    <div className="for-year">
                                                        <h1 className="heading-1">$4,788</h1><span className="text-20-medium color-grey">yearly</span>
                                                    </div>
                                                </div>
                                                <div className="card-lists"><strong className="text-18-bold">What’s included</strong>
                                                    <ul className="list-feature">
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 5,000 Monthly Word Limit
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 50+ Languages
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> Advance Editor Tool
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
                                                                <g clipPath="url(#clip0_51_57)">
                                                                    <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#C5FF55" />
                                                                    <path d="M7.11719 13.8396L10.479 17.2014L18.8835 8.79688" stroke="#191919" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_51_57">
                                                                        <rect width={26} height={26} fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg> 50 Accounts
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-button"><Link className="btn btn-get-started" href="#">Get started
                                                    <svg width={23} height={8} viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5 3.99934L18.9791 0.478516V3.30642H0.5V4.69236H18.9791V7.52031L22.5 3.99934Z" fill="true" />
                                                    </svg></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >

            </Layout >
        </>
    )
}