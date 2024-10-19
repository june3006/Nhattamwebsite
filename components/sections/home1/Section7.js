
import Link from 'next/link'

export default function Section7() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
                <div className="container"><Link className="btn btn-brand-4-sm" href="#">How It Works</Link>
                    <h2 className="mt-15 mb-20">Chỉ cần 3 bước đơn giản và nhanh chóng<br className="d-none d-lg-block" />để có một
                    hệ thống website application hoàn hảo</h2>
                    <p className="text-lg neutral-500 mb-55">Với đội ngũ chuyên gia nhiều năm kinh nghiệm<br className="d-none d-lg-block" />Nhất Tâm Solution sẽ đưa ra tư vấn giải pháp tối ưu và phù hợp nhất cho giải pháp kinh doanh của bạn.</p>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box-border-rounded">
                                <div className="card-casestudy">
                                    <div className="card-title">
                                        <h6><span className="number">1</span>Signup for Service</h6>
                                    </div>
                                    <div className="card-desc">
                                        <p>Hãy nói cho chúng tôi về những ý tưởng và mục đích của bạn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-border-rounded">
                                <div className="card-casestudy">
                                    <div className="card-title">
                                        <h6><span className="number">2</span>Research  Development</h6>
                                    </div>
                                    <div className="card-desc">
                                        <p>Chúng tôi đào sâu tìm hiểu nhu cầu và mục tiêu của bạn. Chúng tôi xây dựng chiến lược và giải pháp tùy chỉnh để đảm bảo chúng phản ánh mục tiêu của bạn và đáp ứng mong đợi của bạn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box-border-rounded">
                                <div className="card-casestudy">
                                    <div className="card-title">
                                        <h6><span className="number">3</span>Sales  Earning</h6>
                                    </div>
                                    <div className="card-desc">
                                        <p>Chúng tôi theo dõi hiệu suất, tối ưu hóa chiến dịch và đảm bảo bạn đạt được kết quả như mong đợi. Đây là bước cuối cùng để đảm bảo bạn đang trên con đường đạt được thành công và doanh thu từ dự án của mình.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-25">
                    <div className="box-newsletter">
                        <div className="newsletter-left">
                            <h2>Join our community</h2>
                            <p className="text-md neutral-600">Làm việc thông minh hơn với cách quản lý thời gian này và không khó khăn<br/>
                            Hãy tham gia bản tin của chúng tôi để có trải nghiệm tốt hơn</p>
                        </div>
                        <div className="newsletter-right">
                            <form action="#">
                                <input className="form-control" type="text" placeholder="Địa chỉ Email..." />
                                <button className="btn btn-subscribe" type="submit">Đăng ký
                                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 10.9993L18.4791 7.47852V10.3064H0V11.6924H18.4791V14.5203L22 10.9993Z" fill="true" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
