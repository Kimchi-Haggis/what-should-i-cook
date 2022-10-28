import Head from 'next/head'
import React from 'react'

type SEOProps = {
    title: string
}

const SEO = (props: SEOProps) => {
    const { title } = props;
    const seoTitle = `${title} | What Should I Cook`;

  return (
        <Head>
            <title>{seoTitle}</title>
        </Head>
    )
}

export default SEO;