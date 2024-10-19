
import BlogPost from '@/components/blog/BlogPost'
import Layout from "@/components/layout/Layout"
export default function Blog() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >
                <section className="section-box box-content-blog">
                    <div className="container">
                        <div className="text-center blog-head"><span className="icon-1 shape-1" /><span className="icon-2 shape-2" /><span className="icon-3 shape-3" /><span className="btn btn-brand-4-sm">Đọc ngay</span>
                            <h2 className="heading-2 mb-20 mt-15">Các bài viết</h2>
                            <p className="text-lg">Hãy khám phá các bài viết dưới đây để có thêm nhiều góc nhìn<br className="d-none d-lg-block" />và những thông tin khác.</p>

                        </div>
                        <div className="box-list-news mt-100">
                            <div className="row">
                                <BlogPost showItem={6} style={1} showPagination />

                            </div>
                        </div>

                    </div>
                </section>

            </Layout>
        </>
    )
}