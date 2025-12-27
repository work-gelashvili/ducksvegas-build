import { useState } from 'react'
import styles from './NftExchanger.module.css'
import reloadIcon from '../../../../icons/reload.svg'
import duck1 from '../../../../icons/images/duck1.png'
import duck2 from '../../../../icons/images/duck2.png'
import duck3 from '../../../../icons/images/duck3.png'
import duck4 from '../../../../icons/images/duck4.png'
import duck5 from '../../../../icons/images/duck5.png'
import DucksNft from '../DucksNft/DucksNft'
import BtnCyanNoBg from '../../../Ui/BtnCyanNoBg'
import ButtonCyan from '../../../Ui/ButtonCyan'

const NftExchanger = () => {
  const [walletNftsLoaded, setWalletNftsLoaded] = useState(false)
  const [allNftSelectedInWallet, setAllNftSelectedInWallet] = useState(false)
  const [allNestedNftSelected, setAllNestedNftSelected] = useState(false)
  const [nftNested, setNftNested] = useState([])
  const [nftInWallet, setNftInWallet] = useState([
    {
      id: 11451,
      name: 'DucksVegas #1951',
      img: duck1,
      nftId: 11,
      selected: false,
    },
    {
      id: 11456,
      name: 'DucksVegas #1951',
      img: duck1,
      nftId: 11,
      selected: false,
    },
    {
      id: 11457,
      name: 'DucksVegas #1951',
      img: duck2,
      nftId: 12,
      selected: false,
    },
    {
      id: 11458,
      name: 'DucksVegas #1951',
      img: duck3,
      nftId: 13,
      selected: false,
    },
    {
      id: 11452,
      name: 'DucksVegas #1951',
      img: duck2,
      nftId: 12,
      selected: false,
    },
    {
      id: 11453,
      name: 'DucksVegas #1951',
      img: duck3,
      nftId: 13,
      selected: false,
    },
    {
      id: 11454,
      name: 'DucksVegas #1951',
      img: duck4,
      nftId: 14,
      selected: false,
    },
    {
      id: 11455,
      name: 'DucksVegas #1951',
      img: duck5,
      nftId: 15,
      selected: false,
    },
    {
      id: 11461,
      name: 'DucksVegas #1951',
      img: duck3,
      nftId: 13,
      selected: false,
    },
    {
      id: 11462,
      name: 'DucksVegas #1951',
      img: duck4,
      nftId: 14,
      selected: false,
    },
    {
      id: 11463,
      name: 'DucksVegas #1951',
      img: duck5,
      nftId: 15,
      selected: false,
    },
  ])

  const nestings = {
    selectAll: {
      nested() {
        const selectAll = nftNested.map((nft) => {
          nft.selected = allNestedNftSelected ? false : true
          return nft
        })
        setNftNested(() => {
          return [...selectAll]
        })

        setAllNestedNftSelected(!allNestedNftSelected)
      },
      inWallet() {
        const selectAll = nftInWallet.map((nft) => {
          nft.selected = allNftSelectedInWallet ? false : true
          return nft
        })
        setNftInWallet(() => {
          return [...selectAll]
        })
        setAllNftSelectedInWallet(!allNftSelectedInWallet)
      },
    },
    select: {
      nested(e) {
        let id = e.target.closest('li').getAttribute('data-id')
        id = parseInt(id)
        setNftNested((prevState) => {
          prevState[id].selected = !prevState[id].selected
          return [...prevState]
        })
      },
      inWallet(e) {
        let id = e.target.closest('li').getAttribute('data-id')
        id = parseInt(id)
        setNftInWallet((prevState) => {
          prevState[id].selected = !prevState[id].selected
          return [...prevState]
        })
      },
    },
    nests: {
      nest() {
        const getSelectedNfts = nftInWallet.filter((nft) => {
          return nft.selected === true
        })

        const getUnselectedNfts = nftInWallet.filter((nft) => {
          return nft.selected === false
        })

        setNftNested((prevState) => {
          return [...prevState, ...getSelectedNfts]
        })
        setNftInWallet(() => {
          return [...getUnselectedNfts]
        })
      },
      denest() {
        const getSelectedNfts = nftNested.filter((nft) => {
          return nft.selected === true
        })

        const getUnselectedNfts = nftNested.filter((nft) => {
          return nft.selected === false
        })

        setNftInWallet((prevState) => {
          return [...prevState, ...getSelectedNfts]
        })
        setNftNested(() => {
          return [...getUnselectedNfts]
        })
      },
    },
  }

  return (
    <div className={styles['nft-exchanger-container']}>
      <div className={styles['nft-wallet-container']}>
        <p className={styles['nft-wallet-head']}>
          Wallet: <span>gSkDnhfWLap3XvCB9qs</span>
        </p>
        <div className={styles['nft-wallet-box']}>
          {walletNftsLoaded ? (
            <p>There are no NFTs in your wallet.</p>
          ) : (
            <ul className={styles['nfts-in-wallet-list']}>
              {nftInWallet.map((nft, i) => {
                return (
                  <li
                    key={nft.id}
                    className={
                      nftInWallet.length < 7 && i > 2
                        ? styles['nft-container-list']
                        : ''
                    }
                    data-selected={nft.selected}
                    data-id={i}
                    onClick={nestings.select.inWallet}
                    style={{
                      border: nft.selected
                        ? '2px solid #FFDA00'
                        : '2px solid #222A32',
                    }}
                  >
                    <DucksNft
                      name={nft.name}
                      image={nft.img}
                      nftId={nft.nftId}
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        <div className={styles['nfts-to-nest-box-ations']}>
          <BtnCyanNoBg
            btnMargin="24"
            text={!allNftSelectedInWallet ? 'Sellect All' : 'Unselect All'}
            btnOnClick={nestings.selectAll.inWallet}
            btnWidth="132"
            btnHeight="36"
            fontSize="14"
          />
          <ButtonCyan
            btnMargin="24"
            text="Nest"
            btnOnClick={nestings.nests.nest}
            btnWidth="93"
            btnHeight="36"
            fontsize="14"
          />
        </div>
      </div>
      <div className={styles['changed-nft-container']}>
        <div className={styles['changed-nft-head']}>
          <p>
            Rate: <span>5.00 / day</span>
          </p>
          <div className={styles['earned-quacks']}>
            <p>
              Earned: <span>0 $QUACK</span>
            </p>
            <img
              default-src='none'
              src={reloadIcon}
              alt="reload icon"
              className={styles['reload-icon']}
            />
          </div>
        </div>
        <div className={styles['changed-nft-wallet-box']}>
          <ul className={styles['nested-nfts-list']}>
            {nftNested.map((nft, i) => {
              return (
                <li
                  key={nft.id}
                  className={
                    nftNested.length < 7 && i > 2
                      ? styles['nft-container-list']
                      : ''
                  }
                  data-selected={nft.selected}
                  data-id={i}
                  onClick={nestings.select.nested}
                  style={{
                    border: nft.selected
                      ? '2px solid #FFDA00'
                      : '2px solid #222A32',
                  }}
                >
                  <DucksNft name={nft.name} image={nft.img} nftId={nft.nftId} />
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles['nfts-to-nest-box-ations']}>
          <BtnCyanNoBg
            btnMargin="24"
            text={allNestedNftSelected ? 'Unsellect All' : 'Sellect All'}
            btnWidth="132"
            btnOnClick={nestings.selectAll.nested}
            btnHeight="36"
            fontSize="14"
          />
          <ButtonCyan
            btnMargin="24"
            text="Claim"
            btnWidth="93"
            btnHeight="36"
            fontsize="14"
          />
          <ButtonCyan
            btnMargin="24"
            text="Denest"
            btnWidth="93"
            btnOnClick={nestings.nests.denest}
            btnHeight="36"
            fontsize="14"
          />
        </div>
      </div>
    </div>
  )
}

export default NftExchanger
