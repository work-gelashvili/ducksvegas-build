import Style from './Banner.module.css'
import { useSelector } from 'react-redux';

const Banner = () => {
  const baseUrl = useSelector((state) => state.GlobalVariables.baseUrl);

  return (
    <div className={Style.banner}>
        <div className={Style['bonus-info-section']}>
          <p className={Style['bonus-text']}>Own a</p>
          <p className={Style['bonus-percents']}>DUCK</p>
          <p className={Style['bonus-text']}>and start earning</p>
        </div>
        <div className={Style['register-info-section']}>
          <p className={Style['register-text-regular']}>
          Own a DucksVegas NFT and become the house. Generate passive income, share in revenue, access metaverse, and much much more.
            {/* Register now to instantly unlock <span className={Style['text-yellow']}>Ducks Vegas’s</span> rewards with <span className={Style['text-cyan']}>5% Rakeback + 10% Rakeboost.</span> */}
            
            </p>
          <a href="https://magiceden.io/marketplace/ducksvegas" rel="noreferrer" target="_blank">
            <button className={Style['register-btn']}>More Info</button>
          </a>
        </div>
        <img default-src='none' src={`${baseUrl}/static/images/baner-duck.webp`} style={{height: "calc(100% + 20px)"}} alt="duck" className={Style['duck-image']}/>
    </div>
  );
};

export default Banner;
