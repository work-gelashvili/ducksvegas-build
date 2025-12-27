import Style from './Footer.module.css'
import Menu from './Footer/Menu/Menu';

function Footer() {
    const data = [
        // {
        //     id: 7547455,
        //     title: 'Metaverse',
        //     link: [
        //         {
        //             id: 6464,
        //             name: 'casino',
        //             url: '/casino'
        //         },
        //         {
        //             id: 4564645635534,
        //             name: 'Sports',
        //             url: '/sports'
        //         },
        //         {
        //             id: 3534,
        //             name: 'NFTs',
        //             url: '/nfts'
        //         },
        //         {
        //             id: 654745745,
        //             name: 'Crypto Future',
        //             url: '/future'
        //         },
        //         {
        //             id: 64778,
        //             name: 'Crypto Portfolio',
        //             url: '/portfolio'
        //         },
        //     ]
        // },
        {
            id: 546545,
            title: 'About us',
            link: [
                // {
                //     id: 7675376,
                //     name: 'AML Policy',
                //     url: '/aml-policy'
                // },
                // {
                //     id: 657575,
                //     name: 'Sports Policy',
                //     url: '/sports-policy'
                // },
                {
                    id: 57589,
                    name: 'Responsible Gaming',
                    url: '/gaming'
                },
                {
                    id: 5664,
                    name: 'Privacy Policy',
                    url: '/privacy-policy'
                },
                {
                    id: 64654,
                    name: 'Terms and Conditions',
                    url: '/team'
                },
            ]
        },
        {
            id: 4464677879,
            title: 'Support',
            link: [
                {
                    id: 8932653982,
                    name: 'Support',
                    url: '/support'
                },
                {
                    id: 76474758,
                    name: 'FAQ',
                    url: '/faq'
                },
                {
                    id: 57574533634,
                    name: 'Partnership Program',
                    url: '/partnership'
                },
                // {
                //     id: 6575853,
                //     name: 'Blog',
                //     url: '/blog'
                // },
                // {
                //     id: 6476453678,
                //     name: 'Help Center',
                //     url: '/help'
                // },
            ]
        },
        {
            id: 7668564,
            title: 'Community',
            link: [
                // {
                //     id: 754,
                //     name: 'Facebook',
                //     url: '/'
                // },
                {
                    id: 868575,
                    name: 'Twitter',
                    url: '/'
                },
                {
                    id: 8685,
                    name: 'Instagram',
                    url: '/'
                },
                {
                    id: 8584,
                    name: 'Discord',
                    url: '/'
                }
            ]
        },
    ]

    return (
        <footer className={Style.footer}>

            <div className="container">
                <div className={Style.footer__comp}>
                    <div className={Style.footer__text}>
                        <h1 className={Style.footer__title}>
                            Ducks Vegas
                        </h1>
                        {/* <p className={Style.footer__desc}>
                            Ducks Vegas is owned and operated by mBet Solutions NV (Schout Bij Nacht Doormanweg 40, P.O. Box 4745, Curaçao). It is licensed and regulated by the Government of Curaçao under the gaming license 1668/JAZ. Some payment methods are handled. Ducks Vegas is owned and operated by mBet Solutions.
                        </p> */}
                        <p className={Style.footer__copy}>
                            Copyright © 2022 Ducks Vegas. All rights reserved. 
                        </p>
                    </div>

                    <div className={Style.footer__menu}>
                        {data.map( (item) => {
                            return (
                                <Menu key={item.id} data={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer