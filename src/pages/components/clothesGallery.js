import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'
import './style.css'

const captions = [
    {
        'name': "anorak.jpg",
        'caption': "Anorak (Front). I wrote a poem in my Chinese class about how I felt lost and stuck in between being Chinese and American. I hid my Chinese name in that poem, and my professor found that clever, but I was not brave enough to tell him the meaning behind my poem. So I painted it on the back of this anorak, but immediately after finishing, I got scared displaying my poetry so publicly and crossed out most of the last two lines, leaving just my name. "
    },
    {
        'name': "anorakB.jpg",
        'caption': "Anorak (Back). I wrote a poem in my Chinese class about how I felt lost and stuck in between being Chinese and American. I hid my Chinese name in that poem, and my professor found that clever, but I was not brave enough to tell him the meaning behind my poem. So I painted it on the back of this anorak, but immediately after finishing, I got scared displaying my poetry so publicly and crossed out most of the last two lines, leaving just my name. "
    },
    {
        'name': "cnyflannel.jpg",
        'caption': "CNY Shirt (Front). Inspired by Needles flannels, I found an old Ralph Lauren shirt that already had a split pattern. I created this shirt with Chinese New Years in mind, cutting up a traditional hat I used to wear for CNY as a kid. I added pockets from old jeans and intentionally made one sleeve extra long."
    },
    {
        'name': "cnyflannelB.jpg",
        'caption': "CNY Shirt (Back). Inspired by Needles flannels, I found an old Ralph Lauren shirt that already had a split pattern. I created this shirt with Chinese New Years in mind, cutting up a traditional hat I used to wear for CNY as a kid. I added pockets from old jeans and intentionally made one sleeve extra long."
    },
    {
        'name': "firemanflannel.jpg",
        'caption': "Fireman Flannel (Front). Inspired by a pattern I had seen in a book about traditional Japanese Fireman coats that also featured a diamond over a grid pattern. I painted the Chinese character 永 as it's one of the first characters you do when learning calligraphy since it is almost every kind of stroke."
    },
    {
        'name': "firemanflannelB.jpg",
        'caption': "Fireman Flannel (Back). Inspired by a pattern I had seen in a book about traditional Japanese Fireman coats that also featured a diamond over a grid pattern. I painted the Chinese character 永 as it's one of the first characters you do when learning calligraphy since it is almost every kind of stroke."
    },
    {
        'name': "jeanjacket.jpg",
        'caption': "Denim Jacket (Front). I thrifted an extremely oversized denim jacket and would have to pinroll my sleeves in order to use my hands. I decided to fix this problem and used a pair of coffee dyed jeans that I had messed up to add on while also tapering and cutting down the length of the sleeve."
    },
    {
        'name': "jeanjacketB.jpg",
        'caption': "Denim Jacket (Back). I thrifted an extremely oversized denim jacket and would have to pinroll my sleeves in order to use my hands. I decided to fix this problem and used a pair of coffee dyed jeans that I had messed up to add on while also tapering and cutting down the length of the sleeve."
    },
    {
        'name': "myflannel.jpg",
        'caption': "Lin Flannel (Front). I was inspired by the popular patchwork/split flannels at the time but wanted to try a more subtle approach. I painted my last name large and in black and my first name small and in white. At the time, I was thinking a lot about how I inherited my dad's last name and grown attached to it (likely because of Jeremy Lin's populairty gave me a sense of pride in also being a J Lin). But I feel rather little attachment to my dad and his side of the family."
    },
    {
        'name': "myflannelB.jpg",
        'caption': "Lin Flannel (Back). I was inspired by the popular patchwork/split flannels at the time but wanted to try a more subtle approach. I painted my last name large and in black and my first name small and in white. At the time, I was thinking a lot about how I inherited my dad's last name and grown attached to it (likely because of Jeremy Lin's populairty gave me a sense of pride in also being a J Lin). But I feel rather little attachment to my dad and his side of the family."
    },
    {
        'name': "odehoodie.jpg",
        'caption': "Ode Hoodie (Front). I found a fake Vetements Hoodie at the thrift store. I bought it in case it was real, but checked later online and realized it was fake. Not wanting to wear fake designer, I decided to turn it into my own by cutting it up and sewing an old shirt to the back. It was a replica of a Vetements Hoodie Hoodie."
    },
    {
        'name': "odehoodieB.jpg",
        'caption': "Ode Hoodie (Back). I found a fake Vetements Hoodie at the thrift store. I bought it in case it was real, but checked later online and realized it was fake. Not wanting to wear fake designer, I decided to turn it into my own by cutting it up and sewing an old shirt to the back. It was a replica of a Vetements Hoodie Hoodie."
    },
    {
        'name': "sweater.jpg",
        'caption': "Sweater (Front). Inspired by Raf Simon's I <3 NY sweater, this was my first attempt to recreate a more avant-garde look. I thrifted a really oversized sweater and cropped it in the body. I hemmed one of the sleeves to a more normal length. I then cut up some of the neckline, a little unevenly, so it would droop even more on the right sleeve essentially making it longer. I added black velcro straps to the right sleeve and made sure it was just long enough to cover my entire hand, inspired by Vetements. "
    },
    {
        'name': "sweaterB.jpg",
        'caption': "Sweater (Back). Inspired by Raf Simon's I <3 NY sweater, this was my first attempt to recreate a more avant-garde look. I thrifted a really oversized sweater and cropped it in the body. I hemmed one of the sleeves to a more normal length. I then cut up some of the neckline, a little unevenly, so it would droop even more on the right sleeve essentially making it longer. I added black velcro straps to the right sleeve and made sure it was just long enough to cover my entire hand, inspired by Vetements. "
    },
]

const ClothesGallery = () => {
    const data = useStaticQuery(graphql`
    query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`
  )
    const images = data.images.edges.map(({ node }) => ({
        ...node.childImageSharp,
        // Use original name as caption.
        // The `originalName` is queried inside the `thumb` field,
        // but the `Gallery` component expects `caption` at the top level.
        caption: captions.filter(x=>x.name===node.childImageSharp.thumb.originalName).map(caption=>{return caption.caption}),
    }))


    return (

            <Gallery images={images}/>

    )
}


export default ClothesGallery