
import Link from 'next/link'

export default function Section3() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-our-track">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center mb-40"><img src="/assets/imgs/page/homepage1/img-track.png" alt="Nivia" /></div>
                        <div className="col-lg-6 mb-40">
                            <div className="box-padding-left-50">
                                <div className="strate-icon"><span /> Chiến lược hiệu quả</div>
                                <h2 className="heading-2 mb-20">Thiết kế Website Application chuyên nghiệp với các tính năng tiên tiến, mạnh mẽ</h2>
                                <p className="text-lg neutral-700">Cung cấp cho bạn các giải pháp mới với các tính năng mạnh mẽ nhất giúp giải quyết dễ dàng các vấn đề kinh doanh.</p>
                                <div className="row mt-50">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" />
                                            </div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Bảng điều khiển Trực quan</h3>
                                            </Link>
                                                <p className="text-md neutral-700">Mở khóa thông tin chi tiết về đối tượng: Đi sâu vào
                                                Phân tích tương tác</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Phân tích mức độ Tương tác</h3>
                                            </Link>
                                                <p className="text-md neutral-700">Khám phá sức mạnh công cụ phân tích Tương tác hành vi</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Bảo mật Nâng cao</h3>
                                            </Link>
                                                <p className="text-md neutral-700">An toàn với hệ thống bảo mật đa lớp, đội ngũ an ninh 24/7</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" /></div>
                                            <div className="card-info"><Link href="#">
                                                <h3 className="text-22-bold">Hệ thống Dự phòng 24/7</h3>
                                            </Link>
                                                <p className="text-md neutral-700">Luôn có giải pháp dự phòng với các bản backup hàng ngày, hàng tháng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
