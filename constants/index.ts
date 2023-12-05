import facebook from '../public/assets/icons/facebook.svg';
import instagram from '../public/assets/icons/instagram.svg';
import support from '../public/assets/icons/support.svg';
import shieldTick from '../public/assets/icons/shield-tick.svg';
import truckFast from '../public/assets/icons/truck-fast.svg';
import twitter from '../public/assets/icons/twitter.svg';

export {
    facebook,
    instagram,
    support,
    shieldTick,
    truckFast,
    twitter
};

export const services = [
    {
        imgURL: truckFast,
        label: "Free Delivery",
        subtext: "Enjoy seamless shopping with our complimentary shopping service."
    },
    {
        imgURL: shieldTick,
        label: "Hygiene Standards",
        subtext: "Elevate Your Well-Being with Impeccable Hygiene Standards."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Burgers", link: "/" },
            { name: "Samosas", link: "/" },
            { name: "Scones", link: "/" },
            { name: "Fries", link: "/" },
            { name: "Donuts", link: "/" },
            { name: "Cakes", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "charlottechikwanda@gmail.com", link: "charlottechikwanda@gmail.com" },
            { name: "+263778478610", link: "tel:+263778478610" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
