if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>i(e,n),d={module:{uri:n},exports:t,require:r};a[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(s(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"434af078512000203212119bf342c673"},{url:"/_next/static/UgyYWLawXKQJSr3aax0Xg/_buildManifest.js",revision:"1dea2d3067b7c7231a4dd9f94e522de2"},{url:"/_next/static/UgyYWLawXKQJSr3aax0Xg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b308cfb-3c452a20854cc1c8.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/1657-2194c5a58765df47.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/1664-6c288dbc61339fb3.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/1733-2e6374648e816360.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/1735-d069cb79a035a50d.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/1878-e240e18205e486bf.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/1bfc9850-b75562fafaef24f6.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/2407-efae2bfe062097b4.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/2491-07d17dfb935a6374.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/252f366e-3a50464ef1051686.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/3439-7636c2bc4773c8e2.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/3855-e502d803bacfff07.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/3881-0232027c25f43d25.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/3908-2296b56f5f4f26e9.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/4-08e827d32a07e036.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/4052-26d2171c8249550a.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/449-8c01bab7a7f069b7.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/4897-3910f0220e9143d0.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/5247-9f0926a586b82493.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/5675-c6f7b30bb6e16449.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/5964-8bb11f84b386a70a.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/6893-0b7c2776d6092f00.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/7044-102b3ec3ba2e9195.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/7409-2db8f89bdd3243aa.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/7536-5e147114835032cc.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/7848-843f2d22fe6d9a87.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/7d0bf13e-2f4bc90cad4431fd.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/8427-e49345c05cea928d.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/95b64a6e-1a3ff4ff5506b713.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/ae51ba48-1bcd992b7e51a08e.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/b98bc7c3-6806942fc9f261ec.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/c7773329-3a02c848a4c7bc12.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/d7eeaac4-f1c90ed6791a9357.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/fd9d1056-5582a94ec38a7087.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/framework-b42e321ddf65b60c.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/main-app-2f914e13d3f26b53.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/main-bf90424bdb56d1d8.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/404-b8b1a1894d401492.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/_app-9ca73bee8c3f0dd5.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/_error-8008506205ce3edf.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/about-us-1c52b023645ebd69.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/check-email-359a29c2fdf6a8b1.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/email-verified-3d9b50dbc181a5b1.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/forgot-password-461136fdee890f42.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/login-9da8392788ae0cb5.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/reset-password-febad38745320068.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/signup-e3484e48b7e5ffa5.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/auth/verify-email-17b5c0d0bbb3b54c.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/blog-e974da9ab33092ae.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/blog/%5Burl%5D-6c05b27526ab035c.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/candidates-57dcd1d68b73c8af.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/co-workingSpace-5e815f6625338c66.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/co-workingSpace/details-709ed443c9dc3954.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/coming-soon-a5cffbe82ca74b63.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/company-af8429981b900ce0.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/copyright-policy-15359d782eeb1f79.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard-1c4085902b72a72a.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/applied-df881f2a27ff402f.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/company-795a0b0a6d44ed5f.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/create-job-1a317685067549b5.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/forum-96bf4aa359c6b78c.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/forum/mentors-2f964ef8f47295e9.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/forum/splash-efa4f366b8481e1a.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/jobs-dfccb7d9963013ad.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/messages-7cfc937915d6618b.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/profile-dc9dae1d92e41de2.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/settings-3f32f917c15abc10.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/settings/language-c5b1ab5ff09e9c14.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/settings/notifications-569bd6ce408b2ebd.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/dashboard/settings/security-7a4907dd36521017.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/employer-145b7e824d3c442b.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/hire-talent-41fff3d202e168ed.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/index-2fd859e049755b5f.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/onboarding-24bd213cd9283169.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/post-jobs/jobs-d190e05775a6f0d2.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/pricing-6277ade8261bd1d9.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/pricing/payment-3c6e044c9de4f5ff.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/privacy-4b05f7a4c1585310.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/remote-jobs-5500afa02cb23c4c.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/terms-2090431457213e75.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/pages/verify-8f544206dce9c77b.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-25a94f0411a45a9c.js",revision:"UgyYWLawXKQJSr3aax0Xg"},{url:"/_next/static/css/01f7711247fb5ece.css",revision:"01f7711247fb5ece"},{url:"/_next/static/css/02c5ef11877be1ef.css",revision:"02c5ef11877be1ef"},{url:"/_next/static/css/0651a99bfb266a9b.css",revision:"0651a99bfb266a9b"},{url:"/_next/static/css/0d96e59d600841a6.css",revision:"0d96e59d600841a6"},{url:"/_next/static/css/1fffb5bc48776944.css",revision:"1fffb5bc48776944"},{url:"/_next/static/css/2746a718cfc8fa5a.css",revision:"2746a718cfc8fa5a"},{url:"/_next/static/css/2f1504cf9c03d5e7.css",revision:"2f1504cf9c03d5e7"},{url:"/_next/static/css/3e018b998cd7ce2f.css",revision:"3e018b998cd7ce2f"},{url:"/_next/static/css/3e16138c50b440c7.css",revision:"3e16138c50b440c7"},{url:"/_next/static/css/424e41c68c2cf1ea.css",revision:"424e41c68c2cf1ea"},{url:"/_next/static/css/469c441b109fed41.css",revision:"469c441b109fed41"},{url:"/_next/static/css/7f2f77037b0f5ccd.css",revision:"7f2f77037b0f5ccd"},{url:"/_next/static/css/836e2bf094a0f072.css",revision:"836e2bf094a0f072"},{url:"/_next/static/css/8c42423e3d0df08e.css",revision:"8c42423e3d0df08e"},{url:"/_next/static/css/92cc1026ac51866b.css",revision:"92cc1026ac51866b"},{url:"/_next/static/css/984b41bb375698a3.css",revision:"984b41bb375698a3"},{url:"/_next/static/css/aa566cdc1c081e7b.css",revision:"aa566cdc1c081e7b"},{url:"/_next/static/css/af4241fc825b1a80.css",revision:"af4241fc825b1a80"},{url:"/_next/static/css/c8a278fa0a161b57.css",revision:"c8a278fa0a161b57"},{url:"/_next/static/css/c9ac87d756358e42.css",revision:"c9ac87d756358e42"},{url:"/_next/static/css/cf190038e2c69cc2.css",revision:"cf190038e2c69cc2"},{url:"/_next/static/css/eb87a6b25fbdba12.css",revision:"eb87a6b25fbdba12"},{url:"/_next/static/css/eedb5f8b9801d06f.css",revision:"eedb5f8b9801d06f"},{url:"/_next/static/css/f55c8c0f5dd85451.css",revision:"f55c8c0f5dd85451"},{url:"/_next/static/media/Ellipse_bg_large.2d2899ba.png",revision:"d2dd79f23867e050e00ebf9c6ae7e28e"},{url:"/_next/static/media/Image.c95fb534.svg",revision:"e88eb629beec22913f6311f69d5c8e19"},{url:"/_next/static/media/Letter.d2381a2f.png",revision:"1de08dda1e63471d08ce99f73e21e36f"},{url:"/_next/static/media/Link.8ba50dd1.svg",revision:"9db3fc3ebfc79d9baf91959f00958a3c"},{url:"/_next/static/media/Mailbox.5a6cda48.png",revision:"e24186d1b8c51453f2983d187b4ac0bd"},{url:"/_next/static/media/Meta-Logo.9a48253a.svg",revision:"cace4377b50c7bd19154af6a0999c34e"},{url:"/_next/static/media/Microsoft-logo.ad4e1279.svg",revision:"1229c9d8acbd11445bfae65a8542d7bb"},{url:"/_next/static/media/Office1.531bbc48.png",revision:"531bbc48"},{url:"/_next/static/media/Office2.4ef06f55.png",revision:"9a26ce7bcdc03b5f87acf2c2f2792d78"},{url:"/_next/static/media/Office3.4876d7b4.png",revision:"aa4e0931af51c7b45a91b02f3c5cf27a"},{url:"/_next/static/media/Office4.8b05e119.png",revision:"78e69384bd343dd0647e2d19b4fbdb7c"},{url:"/_next/static/media/Propel.01668936.svg",revision:"950ce2ad568384d2f2f26e5382f912ec"},{url:"/_next/static/media/Send.9ddb7708.svg",revision:"b0f28a94d6bd45a1a68010d734b90548"},{url:"/_next/static/media/account-placeholder.a620a45e.png",revision:"8a0409632bb231ef3d664e68f1a95d88"},{url:"/_next/static/media/admin_avatar.e662f65e.svg",revision:"ccb521f22791b20f03f018087ac90196"},{url:"/_next/static/media/africanwoman.58dee0aa.png",revision:"0ab3ff407023b66a2164b9ae6acf36a7"},{url:"/_next/static/media/africanwomansmiling.d91d9339.png",revision:"f877cb8d142b8253c51574f845c21670"},{url:"/_next/static/media/afrisplash-logo-main.af201bb5.png",revision:"14bb96f8c1b613a8bc040102067a44c5"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/apple-logo.4d8f57b8.svg",revision:"1e4377acac69068cd7a4e7e427c9ad3b"},{url:"/_next/static/media/arrow-down.cea77441.png",revision:"80f8d2c1bc2fa448352dfcaa4e87ef56"},{url:"/_next/static/media/arrow-left.0ef9c495.svg",revision:"c66b47fa3ff774589788b64fa85cd5dc"},{url:"/_next/static/media/arrow-left.280b3017.svg",revision:"648dd36227f7155fb137a095dc6da52e"},{url:"/_next/static/media/attach-circle.d037f12e.svg",revision:"d037f12e"},{url:"/_next/static/media/author.b9a4396d.png",revision:"9fca476e09d1c23865806addb450499b"},{url:"/_next/static/media/bagIcon.626484f0.svg",revision:"d6295d36a3b37eaff79cf3606327e062"},{url:"/_next/static/media/bg-image-2812.ebfcaa43.png",revision:"d221e4d139568eec7f747bf8c8277384"},{url:"/_next/static/media/bg_ellipsis.d2ec3bb2.svg",revision:"d2ec3bb2"},{url:"/_next/static/media/blockquote-xl.a38a3154.svg",revision:"e4e4dee36b00f900c26efcc5e0cd0ca0"},{url:"/_next/static/media/book-call-short-dashes-circles.35036b26.svg",revision:"f02ad712d680952ae5036b70f12ebca8"},{url:"/_next/static/media/briefcase.4e92a2cd.svg",revision:"5e39f47b79c7479d84a2ed0922f9b0b9"},{url:"/_next/static/media/calendar.6fd3e5cf.svg",revision:"bf867a8a2e782a9fd14de475cf6b923e"},{url:"/_next/static/media/calender2.f33e6c0e.svg",revision:"f53bdf0cd018735600d14b68d850488f"},{url:"/_next/static/media/call-calling.ddb4cdbc.svg",revision:"6ed61406fb824d64db7806cbbebc471a"},{url:"/_next/static/media/call_calling.e1edbc66.svg",revision:"8dcde475b9675fd625bbdda46deaddc5"},{url:"/_next/static/media/cameron.5eaa8160.png",revision:"1b8d926cd1b728c10fcf365e75529f4b"},{url:"/_next/static/media/card_1.ac124f64.png",revision:"8482315b91c2a1ec6a8af6a9b18d2c37"},{url:"/_next/static/media/card_2.1bd7a179.png",revision:"2c947a79760ca0214ea83690e5fc4d04"},{url:"/_next/static/media/card_3.669b0a93.png",revision:"4b848ae89d7f8c735fed769af8f379b5"},{url:"/_next/static/media/charm_tick.0674c9f9.svg",revision:"0674c9f9"},{url:"/_next/static/media/chat.e9455a8c.svg",revision:"e938d91a91626a77491de1ef0cafc4c0"},{url:"/_next/static/media/chatIcon.0a4b6e79.svg",revision:"b5d4c0ca5fdb70052cde1bef5677b772"},{url:"/_next/static/media/check-mail.2ca0e9d7.png",revision:"07493acd4bae3ba7c3f3385cc4012020"},{url:"/_next/static/media/check-mail.817ddbef.svg",revision:"207f3a5f1a1c88fae54ad97416620b7e"},{url:"/_next/static/media/checked.448e7f6a.svg",revision:"ff48a32ccff297c1a628fcfe3589b36e"},{url:"/_next/static/media/chipper.22358f88.svg",revision:"19393078407c62d2cd1d72d702091a2a"},{url:"/_next/static/media/clipboard.36046cfd.svg",revision:"36046cfd"},{url:"/_next/static/media/coming-soon.1a85fe40.png",revision:"590e2b29462cb8830efcf269b4ba341c"},{url:"/_next/static/media/confirmation.19f9d39c.svg",revision:"ffcb65ba874d352727a3a09c19ba1a1b"},{url:"/_next/static/media/dashboard.84daa005.svg",revision:"46c11f371a745ddf3f5f566e93bc754b"},{url:"/_next/static/media/direct-send.e00f49ae.svg",revision:"016049abeb79bf345a164b09a3cf2d8d"},{url:"/_next/static/media/dollar.1696eb46.svg",revision:"04b163f90d13524553fcca938b699395"},{url:"/_next/static/media/dots.ceb0add7.svg",revision:"435c7a36788aea086dcc4425e6870891"},{url:"/_next/static/media/edit-icon.fd16a4fd.svg",revision:"a7fe3c24fcb734938e4fece74478a247"},{url:"/_next/static/media/envelope.247b7712.svg",revision:"3ce39080bc57fb1e0305340501e70d27"},{url:"/_next/static/media/error-page.38c23d42.svg",revision:"5265d7625b5ee56f93d5cdbf7b0c065c"},{url:"/_next/static/media/filter-search.3dd67363.svg",revision:"b182e2c6f11842fbc859aca2e7efc9f6"},{url:"/_next/static/media/filter-search.e82997dc.svg",revision:"3b0a5ce9b95ce7af668918ddc0cab664"},{url:"/_next/static/media/filters.cc8d87a1.png",revision:"f7b57d3ea911e53612a26ded76042c3d"},{url:"/_next/static/media/forgot-image.b96a974f.png",revision:"f5f7f826493b0305d634d76b83733d68"},{url:"/_next/static/media/ghana-flag.954ecd02.svg",revision:"e6d7fa4da3e2fd3d24e85c5fc511c866"},{url:"/_next/static/media/google-logo.afdcd21a.svg",revision:"f310eaffff4e9b4d7d07048e8c9fd8b5"},{url:"/_next/static/media/google.0753adc2.svg",revision:"9e0927ef17115e831db76cbbf4224495"},{url:"/_next/static/media/handshake.1d594db6.svg",revision:"7924f94ad9b53ad084727cfb4ab0e1b1"},{url:"/_next/static/media/heartIcon.5424be9f.svg",revision:"9127825bacc41ec676b7a38bd7edc396"},{url:"/_next/static/media/home_map.e81dead3.svg",revision:"820e2f6485fc88a303ee30a83cc5c90f"},{url:"/_next/static/media/image1.a5059c85.png",revision:"5e824451e17ab48f7177aef43cae3ad8"},{url:"/_next/static/media/image2.195d428b.png",revision:"c9ee36457064d91ede6ee252a03494d6"},{url:"/_next/static/media/image3.ae50e4d3.png",revision:"6036e88ad8ec38386b74372f30741424"},{url:"/_next/static/media/image4.993718b6.png",revision:"a04313d3fc3d6fdb7f2918eabc2bf75f"},{url:"/_next/static/media/image5.073c44e5.png",revision:"ee8492c4fc99dd357632d016ac6ffea9"},{url:"/_next/static/media/img_1.34d25b3e.png",revision:"2f2c4b3943a1415bf53f79a77d114234"},{url:"/_next/static/media/img_2.28b252c8.png",revision:"0be994d6ce626e0451185564a06b2069"},{url:"/_next/static/media/img_3.34caadc8.png",revision:"eae5dfe193a62f5fca758a9b56297916"},{url:"/_next/static/media/img_4.e272302b.png",revision:"7844a767d8068697a0b898f416782096"},{url:"/_next/static/media/img_5.345c14f5.png",revision:"b128b0c1513f86fe0882108801bf7ceb"},{url:"/_next/static/media/img_6.47f10c75.png",revision:"06484692145f6f481295a30a1bf19a4b"},{url:"/_next/static/media/img_7.83371955.png",revision:"b0d5f47950298d518b168b3beaa97339"},{url:"/_next/static/media/img_8.dfb01da0.png",revision:"ff15b581bb769822134e519165fe64fe"},{url:"/_next/static/media/institution.5e0cf874.svg",revision:"4fedc1c93f8e22f0c5a8ad53f407b2f8"},{url:"/_next/static/media/jacob.825a8045.png",revision:"a48a697a2dbef0621118ce05f1bf2e85"},{url:"/_next/static/media/lady_smiling_looking_and_at_laptop.71a24725.png",revision:"676d16604f6133dfa672613bd07fdf9a"},{url:"/_next/static/media/laptop_office.5fa6ddb5.jpg",revision:"e9b0a49f8d80f6e01262e1699e63a2d6"},{url:"/_next/static/media/like.75431439.svg",revision:"97906eab54cf776fa4a5278b3a5134d7"},{url:"/_next/static/media/locate.19b48d3b.svg",revision:"43962861f2906cf0cc67c336910d32f4"},{url:"/_next/static/media/locate.6f0b8809.svg",revision:"6856cf1786717724b4bcd79176159d9a"},{url:"/_next/static/media/location.9991e66a.svg",revision:"ec3175b7bbc5ad57814598b1aaf88676"},{url:"/_next/static/media/location.ebd599e6.svg",revision:"8c169c4ed7f702f843d7653f68fc5cd7"},{url:"/_next/static/media/logo-bg-white.b968394a.svg",revision:"f359681d3f27dffd894ba31f17f6ab01"},{url:"/_next/static/media/logo.50a292f5.png",revision:"c79bc227d51e87d4112d916d1d0d8991"},{url:"/_next/static/media/logo.ecae0fa5.svg",revision:"5e85a9da4f617ce6ee2c5bb1bb161e82"},{url:"/_next/static/media/logout.239e2fe4.svg",revision:"d4eefb50721f191691176d937f8abe0b"},{url:"/_next/static/media/majesticons_attachment.0d8cb9a3.svg",revision:"4e6db7ce20f23f977c676c010c58051c"},{url:"/_next/static/media/man.b6dae695.png",revision:"8da312d62f55acf3749e07b82b7a544d"},{url:"/_next/static/media/message-edit.18443826.svg",revision:"7cf534b61a0e5a58239fb7c1e7303162"},{url:"/_next/static/media/message-question.5000c686.svg",revision:"6c96543a036f6fa1c8eb46a1ef112461"},{url:"/_next/static/media/messages-2.fcef96c4.svg",revision:"bdfbe9f819c09928d6d7153a8dc037e5"},{url:"/_next/static/media/messages.b23e615d.svg",revision:"cf16886a2cab057e7817362129082ef6"},{url:"/_next/static/media/navigation-arrow-left.5553f906.svg",revision:"6f0feb2795b5d3755a7091c1436c352b"},{url:"/_next/static/media/navigation-arrow-right.9b72fbf0.svg",revision:"e0e632d5a5c3aa9c3b94fca334e8ae95"},{url:"/_next/static/media/newsletter.44f82bb1.png",revision:"1f56d029bcce21bf3b164795358196a1"},{url:"/_next/static/media/nextford.b8966083.svg",revision:"cf62d3922201c89354389762d580ccbf"},{url:"/_next/static/media/panther.c1e97702.svg",revision:"fe04248a584a5411c3d79c19eb06af18"},{url:"/_next/static/media/pattern.5f1bb9b2.svg",revision:"5f1bb9b2"},{url:"/_next/static/media/paypal.52a3d0c0.png",revision:"17e981cecde424713b61d5d683df5dcd"},{url:"/_next/static/media/people.1b38b714.svg",revision:"a86faffaa2da5b69ae572cc9f125a042"},{url:"/_next/static/media/person1.8e54b5e5.png",revision:"9f9116bfcbfd6a813b2fbf1343dca948"},{url:"/_next/static/media/person2.ac5749da.png",revision:"4f0551b529362f74473abc3f35ecb8a7"},{url:"/_next/static/media/pic1.4831acba.png",revision:"7f2442f740273401807d29ff30bc0134"},{url:"/_next/static/media/pic2.fdd78d97.png",revision:"7a3fae00ecdd7eea0e3a41a5ef8a40da"},{url:"/_next/static/media/pic3.57fc8d28.png",revision:"efe35146273cd4e4116b7fb29f758a12"},{url:"/_next/static/media/pic4.7885010f.png",revision:"f2794a1f1b5d668d1d5db76f9228f6e4"},{url:"/_next/static/media/pic5.d369247b.png",revision:"c33a4ca7b17ae8c816690896942deaeb"},{url:"/_next/static/media/pic6.6bd0f0f5.png",revision:"a61b06b9b2ee32108a9fb6d77fb7ee73"},{url:"/_next/static/media/pic7.bc8c339d.png",revision:"34904a0cabcc1bc08d67946759fcfd71"},{url:"/_next/static/media/pic8.dd0cdde8.png",revision:"e0136f309f3a471e3e51c9a67edf4930"},{url:"/_next/static/media/pic9.554e0369.png",revision:"e5c3abb8867b11138e1dfaeda012e295"},{url:"/_next/static/media/rect.bfb93ecf.jpg",revision:"bfb93ecf"},{url:"/_next/static/media/review-profile.d9b8a8dc.png",revision:"e9e4e07ccf59cd07c9d911853d9cea55"},{url:"/_next/static/media/review_profile2.63fe8cf5.png",revision:"1811c38a01b4897a279b765557ea6ed8"},{url:"/_next/static/media/review_profile3.715752b9.png",revision:"c357448c5507fa1f073c7ecf49e2170e"},{url:"/_next/static/media/robert.ec45bde9.png",revision:"fa3281dfb4e0298438bd42c72e6ae613"},{url:"/_next/static/media/rootlo.e75e0d95.svg",revision:"920b6628664dd58114a40b52271adb71"},{url:"/_next/static/media/round-bold-check.3d2249be.svg",revision:"a4a29b70cda80232648f3769cbc826ff"},{url:"/_next/static/media/safetyWing.2b36a963.svg",revision:"4a09b6860ee8ed8eff275222b746f862"},{url:"/_next/static/media/save-add.cb3a710d.svg",revision:"4a4caa15f6e6fcac3f1713055f66002b"},{url:"/_next/static/media/setting-3.60aafcbf.svg",revision:"9e4c94a7968fd8e5e2ce384dbdf84b47"},{url:"/_next/static/media/simi-georgy.7da02554.png",revision:"873c61fe1c234f72b5dde0647c046e1e"},{url:"/_next/static/media/simi.ce7109e3.png",revision:"547ed08ba262c58a38933b75c7c93f72"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/media/sms.79140fdc.png",revision:"917abff3c91ee23da3e46c57932091da"},{url:"/_next/static/media/supportIcon.2c6ff07b.svg",revision:"1f8592176637e817444ed1626a9c4017"},{url:"/_next/static/media/tag.bc05d3b3.svg",revision:"cd64a9727bdc5af8c372ff8f0824c35b"},{url:"/_next/static/media/talent_stars_bg.dcc02005.svg",revision:"9f98626c7a967a69837c1aa7a74b9f7e"},{url:"/_next/static/media/talent_user.041e6024.svg",revision:"e5956674c17d92cd6083fb7893f012ad"},{url:"/_next/static/media/targetBg.b863f80c.svg",revision:"b863f80c"},{url:"/_next/static/media/tick-square.964f5d42.png",revision:"e8daec1dd934bb548192b139f2a4fbf5"},{url:"/_next/static/media/timi-george.e6f0081f.png",revision:"031f9459bad2bb98b25ddf7858795da5"},{url:"/_next/static/media/transparent_logo_bg.b34669a0.png",revision:"b34669a0"},{url:"/_next/static/media/trend-up.812133f4.svg",revision:"17b65131bb4776452a31825ae2bde36c"},{url:"/_next/static/media/trophy.a9bbf04a.svg",revision:"f358e7de2d11b43d8987738c661997a0"},{url:"/_next/static/media/twitter-logo.3a20502c.svg",revision:"ce4cd8824ca9dbe96ec9921adee34f63"},{url:"/_next/static/media/type.50bceb83.svg",revision:"d826be71d5c3c70d5f44457d558aa743"},{url:"/_next/static/media/unchecked.74539c97.svg",revision:"68e7b50b58ef21794c7256f89858b2d0"},{url:"/_next/static/media/underline.64e6d8b4.svg",revision:"7d76bf2f64ff7d469b75ff2557e85543"},{url:"/_next/static/media/user-search.dda9e678.svg",revision:"146de9ef759c03a45bbc69bce3bca766"},{url:"/_next/static/media/verified.e99e6472.svg",revision:"f2a949cc62bc4303ab71cdd996985218"},{url:"/_next/static/media/video-call.797ab0c3.svg",revision:"a42d6c7c079e9e21ddef751b77de94b5"},{url:"/_next/static/media/video.411f3453.svg",revision:"e9377c435afaab3a74ce7ae2cf435ae3"},{url:"/_next/static/media/visa.51e8293e.png",revision:"181bd27c4adb6355f41653cc7acb53e0"},{url:"/_next/static/media/wade.27802188.png",revision:"ec3b7cd3d68c4fd2d831d149388723bd"},{url:"/_next/static/media/workSpace1.8fbadf3b.png",revision:"7da78c3ff2ff0dbfb8873d04459ad560"},{url:"/_next/static/media/workSpace2.53668890.png",revision:"c1db062a4ae42074f9ef7815b117056a"},{url:"/_next/static/media/workSpace3.820246d6.png",revision:"00fe88ca888fe1af6410d00e9b436ed2"},{url:"/_next/static/media/workSpace4.4c824371.png",revision:"d429c31dd076e7529e9e398057309c42"},{url:"/_next/static/media/workSpace5.b47ce85f.png",revision:"308ff4c0e25b9e43ac61365fbfbadf7a"},{url:"/admin_logo.svg",revision:"b5c40428949bc2053a13b0847381a4a4"},{url:"/company/alatlogo.png",revision:"ce5630458e69c9b5723df0cdf598cf87"},{url:"/company/firstbank.png",revision:"d1d39aba9ccd184fe902049584e6ac20"},{url:"/company/google.png",revision:"6454923b4e3eb9a8b23b1273e7a0a306"},{url:"/company/hotels.png",revision:"d5afc981b0356405ed8d1388254d48d4"},{url:"/company/scrow.png",revision:"c03fd345066d1bd059488077033a1386"},{url:"/company/standard.png",revision:"ac444c591efe6eae758d45d4872ee138"},{url:"/favicon.ico",revision:"7a121900c724d84dfee796185d162891"},{url:"/favicon/android-chrome-192x192.png",revision:"c1df3b96a275723fe2f0200dcdfa5c16"},{url:"/favicon/android-chrome-512x512.png",revision:"19dbe1e521954be8a1c58f27263cdbd1"},{url:"/favicon/apple-touch-icon-114x114.png",revision:"c50e3640bed85ca2e2bc53ee1da98989"},{url:"/favicon/apple-touch-icon-120x120.png",revision:"a81f25aad9adc5a915a68140ac1f6b15"},{url:"/favicon/apple-touch-icon-144x144.png",revision:"e0aafab8b0e2db1970cd3244bdb8cbdc"},{url:"/favicon/apple-touch-icon-152x152.png",revision:"4641708c0788508f2c6bf8cfb950bf54"},{url:"/favicon/apple-touch-icon-57x57.png",revision:"9b2684e8623d64dd8be1748844506cea"},{url:"/favicon/apple-touch-icon-60x60.png",revision:"268aae9c8985caab02b0472c7975b138"},{url:"/favicon/apple-touch-icon-72x72.png",revision:"9f0184bccfc316b7997a79054b999f08"},{url:"/favicon/apple-touch-icon-76x76.png",revision:"605587c00aaba3a8d2f7bc2751c9b389"},{url:"/favicon/apple-touch-icon.png",revision:"d11618252ce3d7bb56a039883e2402cf"},{url:"/favicon/favicon-128.png",revision:"9635a8bb3a92fb5711d51b410789c1c2"},{url:"/favicon/favicon-16x16.png",revision:"c8c80d14358248661e1bf32bbda59a6e"},{url:"/favicon/favicon-196x196.png",revision:"3fc1e35c1ab59ed682e5955368a85905"},{url:"/favicon/favicon-32x32.png",revision:"8c19197cddd747d12869d904281bc85b"},{url:"/favicon/favicon-96x96.png",revision:"2934f033d002fcf3f758bef671176b77"},{url:"/favicon/favicon.ico",revision:"8e9f9e09dd4eaec337457d5017ff6011"},{url:"/favicon/mstile-144x144.png",revision:"e0aafab8b0e2db1970cd3244bdb8cbdc"},{url:"/favicon/mstile-150x150.png",revision:"0008e9c10ccad985057a6ccb0ea806a9"},{url:"/favicon/mstile-310x150.png",revision:"9f9437a91e99100d24a5ef7f5c6b423b"},{url:"/favicon/mstile-310x310.png",revision:"6bbbb15643b7da9f94936378d0772844"},{url:"/favicon/mstile-70x70.png",revision:"9635a8bb3a92fb5711d51b410789c1c2"},{url:"/icon.png",revision:"63447df02976445418702e7df3a4c43e"},{url:"/images/afrisplash_logo.svg",revision:"5a1572ad720e7c1c5febb9efaa9ec909"},{url:"/images/author.png",revision:"9fca476e09d1c23865806addb450499b"},{url:"/images/laptop_office.jpg",revision:"e9b0a49f8d80f6e01262e1699e63a2d6"},{url:"/locales/ara/common.json",revision:"1e775e4b23e9d7d592de1ced417dd724"},{url:"/locales/ara/footer.json",revision:"d3476071bb40d3d1e2de0628e77e8d2e"},{url:"/locales/ara/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/ara/home.json",revision:"d99d32744375559f7d46671b00529d5a"},{url:"/locales/ara/login.json",revision:"95eab6d836c8d5aef83269d4433d3309"},{url:"/locales/ara/signUp.json",revision:"db708715058918dc57ab079ced3c90c5"},{url:"/locales/en/common.json",revision:"cdd2361efa845430d7df65a24b78cec6"},{url:"/locales/en/footer.json",revision:"31b39d957200c517a27dc3dc4277e948"},{url:"/locales/en/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/en/home.json",revision:"f858d2072a81ac85b399b581d3312249"},{url:"/locales/en/login.json",revision:"13a5039a7e5ad8d0e1f308d422433027"},{url:"/locales/en/signUp.json",revision:"198cdcd950c926fb32e00a6d2dea657e"},{url:"/locales/fr/common.json",revision:"73519ca245621d8b921abc155c72a561"},{url:"/locales/fr/footer.json",revision:"776c28a8391556eab076c22bfff8d308"},{url:"/locales/fr/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/fr/home.json",revision:"fda5b170d7d8da847722e3df573eebb6"},{url:"/locales/fr/login.json",revision:"acab041010eaccc7ce4466bc2315633d"},{url:"/locales/fr/signUp.json",revision:"164a2d9bc767fb83e52ad7597ad5a1fb"},{url:"/locales/ha/common.json",revision:"cdd2361efa845430d7df65a24b78cec6"},{url:"/locales/ha/footer.json",revision:"fdbfe0bd8f8828f65c36d11002d2b406"},{url:"/locales/ha/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/ha/home.json",revision:"c0eface854c8d5b898f13d2b6c2f1a0d"},{url:"/locales/ha/login.json",revision:"b2115371fb3709158127ad9d1ebc27b9"},{url:"/locales/ha/signUp.json",revision:"f318cace6d917481c7f7152b7723dc7b"},{url:"/locales/ig/common.json",revision:"c3b077a75c2fd1fa648e5121c3187201"},{url:"/locales/ig/footer.json",revision:"4258d98c97d19984fb1e99ccb10dd439"},{url:"/locales/ig/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/ig/home.json",revision:"4cbca930d72e4563a7f311f4f75449f9"},{url:"/locales/ig/login.json",revision:"091f9c8f295b4d017b575e471126cecd"},{url:"/locales/ig/signUp.json",revision:"8573980e41e040125cf3e9046e627fa5"},{url:"/locales/sw/common.json",revision:"46af7b28f76fb1cf5d539ce74105d6d4"},{url:"/locales/sw/footer.json",revision:"8c4a18020720543b172c18e89ed7e074"},{url:"/locales/sw/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/sw/home.json",revision:"54e6c085c49837b8d51f3c8bcd8f4d20"},{url:"/locales/sw/login.json",revision:"1c5fc526bab5bc62e76fc4c469b982a7"},{url:"/locales/sw/signUp.json",revision:"b88f7b068a7f0c9131c447979cfc110f"},{url:"/locales/ti/common.json",revision:"dc50deb0c26ed4e08996978e3c22b13a"},{url:"/locales/ti/footer.json",revision:"0529edf6ad769ae5783bf1abb154666a"},{url:"/locales/ti/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/ti/home.json",revision:"b081be880a80c5203204d0b173f508bc"},{url:"/locales/ti/login.json",revision:"4fccd1f43ae65834877624096935af84"},{url:"/locales/ti/signUp.json",revision:"6b43e6edaab7ff51ed856866bbf9d40c"},{url:"/locales/yo/common.json",revision:"cdd2361efa845430d7df65a24b78cec6"},{url:"/locales/yo/footer.json",revision:"01b1c1d8d73e52ec929a9fa1cfa32689"},{url:"/locales/yo/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/yo/home.json",revision:"929cbf1c0ddc9607b7646d5b60911c0c"},{url:"/locales/yo/login.json",revision:"54f1b53a446f99e8ef83fd25b6171f76"},{url:"/locales/yo/signUp.json",revision:"aee235c626afb1a83dbb45759e8e59a2"},{url:"/locales/zu/common.json",revision:"6e41d9a1dabcfa5c63a9e9febbce6b0e"},{url:"/locales/zu/footer.json",revision:"7f997da58671efd1dc1cc77f83cd7fdc"},{url:"/locales/zu/header.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"/locales/zu/home.json",revision:"d313c9ab0cf18380a4d5d13f90498393"},{url:"/locales/zu/login.json",revision:"40924505bae51527e13f4d1b7bbd8ca6"},{url:"/locales/zu/signUp.json",revision:"703d05a4ecc214749b7b8b1f68542464"},{url:"/main_logo.svg",revision:"f473b57208c7d3297ca9a4ccd9113840"},{url:"/manifest.json",revision:"dc48d745e6d15aba0c3b5d14319a4ed7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
