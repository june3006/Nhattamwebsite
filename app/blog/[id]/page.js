'use client'
import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"
import Link from 'next/link'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogDetails() {
    let Router = useParams()
    const [blogPost, setBlogPost] = useState(null)
    const id = Router.id

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>

            {blogPost && (
                <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >

                    <section className="section-box box-content-blog-2 box-content-blog-post">
                        <div className="container">
                            <div className="text-center blog-head"><span className="btn btn-brand-4-sm">{blogPost.category}</span>
                                <h2 className="heading-2 mb-20 mt-15">{blogPost.title}</h2>
                                <p className="text-lg">{blogPost.heading}</p>
                                <p className="text-lg">{blogPost.heading1}</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="box-content-detail-blog">
                                        <div className="box-image-header">
                                            <img alt="Nivia" src={`/assets/imgs/page/blog/${blogPost.img}`} /></div>
                                        <div className="box-detail-info">
                                            <p>{blogPost.paragraph1}</p>
                                            <p>{blogPost.paragraph2}</p>
                                            <p>{blogPost.paragraph3}</p>
                                            <p>{blogPost.paragraph4}</p>
                                            <p>{blogPost.paragraph5}</p>
                                            <blockquote>{blogPost.blockquote}</blockquote>
                                            <p>{blogPost.info1}</p>
                                            <p>{blogPost.info2}</p>
                                            <p>{blogPost.info3}</p>
                                            <p>{blogPost.info4}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box box-content-recommended">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="mb-55">Recommended Articles</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"> <Link href="/blog-post"><img src="/assets/imgs/page/blog/detail.png" alt="Nivia" /></Link></div>
                                        <div className="card-info">
                                            <div className="card-meta"> <Link className="btn btn-tag-sm" href="/blog-post">Technology</Link><span className="date-post">16 October 2023</span></div>
                                            <div className="card-title"> <Link className="link-new" href="/blog-post">Savvy brand marketing: from branding basics to key strategies</Link></div>
                                            <div className="card-more">   <Link className="btn btn-learmore-2" href="/blog-post">Read More
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_599_4830)">
                                                        <path d="M10.6537 3.8149L1.71801 12.7506L0.25 11.2826L9.18469 2.3469H1.31V0.270508H12.7301V11.6906H10.6537V3.8149Z" fill="true" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_599_4830">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"> <Link href="/blog-post"><img src="/assets/imgs/page/blog/detail2.png" alt="Nivia" /></Link></div>
                                        <div className="card-info">
                                            <div className="card-meta"> <Link className="btn btn-tag-sm" href="/blog-post">Technology</Link><span className="date-post">16 October 2023</span></div>
                                            <div className="card-title"> <Link className="link-new" href="/blog-post">110 drawing ideas to improve your skills you must know in this year</Link></div>
                                            <div className="card-more">   <Link className="btn btn-learmore-2" href="/blog-post">Read More
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_599_4830)">
                                                        <path d="M10.6537 3.8149L1.71801 12.7506L0.25 11.2826L9.18469 2.3469H1.31V0.270508H12.7301V11.6906H10.6537V3.8149Z" fill="true" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_599_4830">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-news-style-2">
                                        <div className="card-image"> <Link href="/blog-post"><img src="/assets/imgs/page/blog/detail3.png" alt="Nivia" /></Link></div>
                                        <div className="card-info">
                                            <div className="card-meta"> <Link className="btn btn-tag-sm" href="/blog-post">Technology</Link><span className="date-post">16 October 2023</span></div>
                                            <div className="card-title"> <Link className="link-new" href="/blog-post">Perfect product images with Generative AI in Nivia platform</Link></div>
                                            <div className="card-more">   <Link className="btn btn-learmore-2" href="/blog-post">Read More
                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_599_4830)">
                                                        <path d="M10.6537 3.8149L1.71801 12.7506L0.25 11.2826L9.18469 2.3469H1.31V0.270508H12.7301V11.6906H10.6537V3.8149Z" fill="true" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_599_4830">
                                                            <rect width={13} height={13} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    )
}