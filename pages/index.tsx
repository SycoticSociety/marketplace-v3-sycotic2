iimport type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              {/* Removed the Image component for the hero gradient */}
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            {/* Update: Removed <a> and directly use <Link> with passHref for Image component */}
            <Link href="/buy" passHref>
              <Image
                src="/hero-asset.png"
                width={860}
                height={540}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
              />
            </Link>
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Purchase Tokens Here.
                </span>
              </h1>
              {/* Place for the three images and links */}
              <div className="flex space-x-4">
                <Link href="https://swap.crodex.app/#/swap?outputCurrency=0x4E2E7700C8f8A414b4AF8828f54330a304B6625d" passHref>
                
                <Image
                  src="/freeCoinTokenSwap.png"
                   alt="Free Coin Image"
                   width={60} // Reduced from 75
                   height={60} // Reduced from 75
                   layout="responsive"
                   className={styles.tokenImage} // Apply the new class
                  />
                     
                </Link>
                <Link href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59" passHref>
                 
                <Image
                   src="/sycoticTokenSwap.png"
                     alt="Sycotic Society Image"
                     width={60} // Reduced from 75
                     height={60} // Reduced from 75
                    layout="responsive"
                    className={styles.tokenImage} // Apply the new class
                  />
                   
                </Link>
                <Link href="https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713" passHref>
                <Image
                    src="/brokeAsfTokenSwap.png"
                     alt="Broke ASF Image"
                     width={60} // Reduced from 75
                     height={60} // Reduced from 75
                     layout="responsive"
                     className={styles.tokenImage} // Apply the new class
                    />
                    
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

