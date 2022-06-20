import * as React from "react"
import { CloudinaryContext, Image, Transformation } from "cloudinary-react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>Blur faces with Cloudinary and Gatsby</h1>
      <br />
      <CloudinaryContext cloudName="Kizmelvin">
        <div className={styles.card}>
          <Image publicId="local-uploads/tf7qjqfyftzbqhujke1r.jpg">
            <Transformation crop="scale" height="500" width="800" />
            <Transformation effect="pixelate_faces" />
          </Image>
          <h4>
            1.<span>Default Face Blur Effect</span>
          </h4>
        </div>
        <div className={styles.card}>
          <Image publicId="local-uploads/lhbxga8jwldr4rwhgc9s.jpg">
            <Transformation crop="scale" height="500" width="800" />
            <Transformation effect="pixelate_faces:10" />
          </Image>
          <h4>
            2.<span>Lighter Face Blur Effect</span>
          </h4>
        </div>
        <div className={styles.card}>
          <Image publicId="local-uploads/hwmfafq3bsnutsflox9v.jpg">
            <Transformation crop="scale" height="500" width="800" />
            <Transformation effect="pixelate_faces:40" />
          </Image>
          <h4>
            3.<span>Heavy Face Blur Effect</span>
          </h4>
        </div>
      </CloudinaryContext>
    </div>
  </Layout>
)

export default IndexPage
