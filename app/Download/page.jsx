import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Footer/page'
import Saiyaara from '../../public/Romance/Saiyaara.jpeg'
function page() {
  const QualityDownload = [
    {Ql:"1080p" , lnk:"https://video-downloads.googleusercontent.com/ADGPM2nFYHZIzN5tcHOXMhXkHIeGrtTbjUrIi6xucDK-PHIbgP6NevifHLDARkOuZ5MQQvAVmRLT14jujpWUy6ogw9-NvCsvlVXr-JGmdGFkqxUsBsaxUtIeIP6L17vJ1Zz2Gs0vrnarkDMwn3p6i_O2ImeF8jQS9iH1coXeAlo_d-ds1fHAjWDBCoxdFYyFqyn_enaRakdWCZFAWFVZP_YxHuX4Mhc1q4L0XoLKxcSbzQxv3HwD_CE"},
    {Ql:"720p" , lnk:"https://video-downloads.googleusercontent.com/ADGPM2lBMnuTUe_dGZvkxZjA60QY5d6gdysE0bGosX8gM3Oe4yApHwmG61TA-w-tUEw1yN1OEVipOMBBJ7bhJgq4ZasTHivSnu35fpW2NQohL92leTPh3GGoMN4h8P6h4_HShVgtHN7M5sEN4b0GPqONAZrFC7UUz6tOku7_fZ88tUwSc8bdlNR4O5IsLOQ8H_2b9_XsnJTvh6e1ZjhXikVWLiD90EQm0UzfqovJacA0REKIczMTKV4"},
    {Ql:"460p" , lnk:"https://video-downloads.googleusercontent.com/ADGPM2m5MwNdlh4-JXjcj-K2K5iZJ7K-m81ZIhO48rz4irMzvr17t7cjs3FV5S9t2TLlwZAq10hbm1_2k3o1MJyfm-RXI1agNUusIzPuZyVKjZ8z4XraTkkyYmlqB8llNhn0N9CbunRi4ih-yi_vTd7DkEdEn-4FqUWDTj_WvX7vhbn0oweZ5WrgZQr0ldmLwvZIeg091bR_MYvAJjlekoYmygRE8gY8yDtLrkQ0MqphjJKEaEueIA8"}
  ]
  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
  {/* Movie Poster */}
  <div className="flex justify-center w-full mb-10">
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-sm">
      <Image
        src={Saiyaara}
        width={800}
        height={1200}
        className="rounded-xl shadow-2xl w-full h-auto object-cover"
        alt="Saiyaara"
      />
    </div>
  </div>

  {/* Divider */}
  <hr className="border-gray-700 w-full mb-10" />

  {/* About Movie Section */}
  <div className="max-w-5xl mx-auto flex flex-col items-start space-y-4 px-4">
    <h2 className="bg-yellow-200 text-black font-semibold px-4 py-2 rounded-br-3xl text-xl shadow-md">
      About the Movie
    </h2>
    <p className="text-white text-lg leading-relaxed text-justify">
      Saiyaara (lit. 'Planet' or 'Wanderer') is a 2025 Indian Hindi-language musical romantic drama film directed by Mohit Suri.[6] Produced by Yash Raj Films, it is loosely based on the 2004 Korean film A Moment to Remember.[7][8] The film stars debutant Ahaan Panday and Aneet Padda in lead roles.

      Saiyaara was released theatrically on 18 July 2025 to positive reviews from critics, with particular praise for Panday and Padda's performances, Suri's direction, and its soundtrack.[9][10] A major commercial success, the film grossed over ₹577 crore worldwide, emerging as the second highest-grossing Hindi film of 2025, the second highest-grossing Indian film of 2025, and the highest-grossing Indian romantic film.[11][12]
    </p>
  </div>

  {/* Choose Quality Section */}
  <div className="flex flex-col items-center mt-10 space-y-4">
    <h2 className="bg-yellow-200 text-black font-semibold px-4 py-2 rounded-md shadow-md">
      Choose Download Quality
    </h2>

    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {QualityDownload.map((quality) => (
        <Link href={quality.lnk} key={quality.Ql}>
          <button className="bg-yellow-200 hover:bg-yellow-400 transition-colors px-6 py-2 rounded-md text-black font-bold shadow-md">
            {quality.Ql}
          </button>
        </Link>
      ))}
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default page