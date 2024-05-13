import React from 'react'
import {motion} from "framer-motion";
import Cert1 from "../assets/EFCert.jpg";
import Cert2 from "../assets/GCCF.jpg";
import Cert3 from "../assets/iOSLabCert.jpg";
import Cert4 from "../assets/ImagePorcCertMT.jpg";
import { CERTIFICATES } from "../constants";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial= {{opacity: 0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Certificates</motion.h2>
        <div className="flex flex-wrap items-start justify-center gap-4">
          {CERTIFICATES.map((certificate, index) => (
            <motion.div
            whileInView={{opacity: 1, y:0}}
            initial= {{opacity: 0, y:-100}}
            transition={{duration: 1.5}}
            key={index}
            class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900">
              <img className=" w-full h-48 object-cover object-center" style={{ objectPosition: '45% 5%' }} src={certificate.image} alt={certificate.certification} />
              <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{certificate.certification}</div>
              <p class="text-gray-500 text-base">
                {certificate.description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              {certificate.tag.map((hash, index) => (
                    <span key={index} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hash}</span>
                  ))}
            </div>
            </motion.div>
          ))}

        </div>
    </div>
  )
}

export default Certificates