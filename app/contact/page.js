
import LogoTicker from '@/components/elements/LogoTicker'
import Layout from "@/components/layout/Layout"
import Team2Slider from '@/components/slider/Team2Slider'
import Link from 'next/link'
export default function Contact() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >
                <div>
                    <section className="section-box box-content-contact">
                        <div className="container">
                            <div className="text-center contact-head"><span className="icon-1 shape-1" /><span className="icon-2 shape-2" /><span className="btn btn-brand-4-sm">Contact Us</span>
                                <h2 className="heading-2 mb-20 mt-15">Liên hệ với chúng tôi</h2>
                                <div className="text-center">
                                    <nav className="container-breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="box-border-rounded">
                                <div className="row align-items-center">
                                    <div className="col-lg-6"><Link className="btn btn-brand-4-sm" href="#">Contact Us</Link>
                                        <h3 className="mb-20 mt-20">Nếu bạn có bất kì thắc mắc gì, xin liên hệ với chúng tôi qua thông tin bên dưới.</h3>
                                        <p className="text-md neutral-700">Chúng tôi sẽ trả lời trong thời gian sớm nhất.</p>
                                        <div className="row mt-50">
                                            <div className="col-lg-12">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" /></div>
                                                    <div className="card-info">
                                                        <h3 className="text-22-bold">Địa chỉ</h3>
                                                        <p className="text-md neutral-700">299/5 Nguyen Van Troi, Ward 1, Tan Binh District, Ho Chi Minh City</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                                    <div className="card-info">
                                                        <h3 className="text-22-bold">Số điện thoại</h3>
                                                        <div className="text-md neutral-700">
                                                            <div className="row">
                                                                <div className="col-sm-6"><Link href="/tel:+1(800)9684021">(+84)832590207</Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                                    <div className="card-info">
                                                        <h3 className="text-22-bold">Email</h3>
                                                        <div className="text-md neutral-700">
                                                            <div className="row">
                                                                <div className="col-sm-6"><Link className="neutral-700" href="/mailto:sale@nivia.com">nhattam.solution@gmail.com</Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center"><img src="/assets/imgs/page/contact/img-contact.png" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-get-touch-section box-contact-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <div className="block-map">
                                        <div className="box-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.1446011850758!2d106.6668425740538!3d10.798811589351347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15f61018076f27%3A0x54e6a65192f30e5e!2zTmjhuqV0IFTDom0gU29sdXRpb24!5e1!3m2!1sen!2s!4v1729073306617!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <p className="text-md neutral-600 text-center">Giờ mở cửa: 9:00 - 18:00, Thứ 2 - Thứ 7 </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-30"><Link className="btn btn-brand-4-sm" href="#">Contact Us</Link>
                                    <h2 className="mb-20 mt-20">Nhắn tin cho chúng tôi</h2>
                                    <p className="text-md neutral-700">Chúng tôi sẽ trả lời trong thời gian sớm nhất.</p>
                                    <div className="block-form-contact mt-45">
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="fullname">
                                                    Tên của bạn *</label>
                                                <input className="form-control" type="text" placeholder="Họ và tên" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fullname">
                                                    Email *</label>
                                                <input className="form-control" type="text" placeholder="email@gmail.com" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fullname">
                                                    Tin nhắn *</label>
                                                <textarea className="form-control" rows={7} placeholder="Nội dung tin nhắn" />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-black btn-rounded" type="submit">Gửi tin nhắn
                                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box wow animate__animated animate__fadeIn box-logos-4">
                        <div className="container">
                            <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                                <LogoTicker />
                            </div>
                        </div>
                    </section>
                </div >

            </Layout >
        </>
    )
}