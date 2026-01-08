import logo from './logo.svg'
import arrow_icon from './arrow_icon.svg'
import group_profile from './group_profile.png'
import bgImage1 from './bgImage1.png'
import bgImage2 from './bgImage2.png'
import hero_img from './hero_img.png'
import microsoft_logo from './microsoft_logo.png'
import zoom_logo from './zoom_logo.png'
import rakuten_logo from './rakuten_logo.png'
import coinbase_logo from './coinbase_logo.png'
import ads_icon from './ads_icon.svg'
import content_icon from './content_icon.svg'
import marketing_icon from './marketing_icon.svg'
import social_icon from './social_icon.svg'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import work_mobile_app from './work_mobile_app.png'
import work_fitness_app from './work_fitness_app.png'
import work_dashboard_management from './work_dashboard_management.png'
import email_icon from './email_icon.svg'
import person_icon from './person_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import instagram_icon from './instagram_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import logo_dark from './logo_dark.svg'
import airbnb_logo from './airbnb_logo.svg'
import google_logo from './google_logo.svg'
import menu_icon_dark from './menu_icon_dark.svg'
import sun_icon from './sun_icon.svg'
import moon_icon from './moon_icon.svg'


export const company_logos = [
  microsoft_logo,
  zoom_logo,
  rakuten_logo,
  coinbase_logo,
  airbnb_logo,
  google_logo,
]

const assets = {
  logo,
  arrow_icon,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  work_mobile_app,
  work_fitness_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  logo_dark,
  menu_icon_dark,
  sun_icon,
  moon_icon
}

export default assets

export const teamData = [
  { name: 'Haley Carter', title: 'CEO & founder', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' },
  { name: 'James Walker', title: 'Ads manager', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' },
  { name: 'Jessica Morgan', title: 'Vice president', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop' },

  { name: 'Ashley Bennett', title: 'Marketing & sales', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=200&h=200&fit=crop' },
  { name: 'Emily Parker', title: 'Content marketer', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&h=200&fit=crop' },

  // Men portraits
  { name: 'Ryan Mitchell', title: 'Content writer', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&fit=crop' },
  { name: 'Megan Brooks', title: 'Performance manager', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&fit=crop' },
  { name: 'Amber Foster', title: 'Senior writer', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&h=200&fit=crop' },
]

export const servicesData = [
  {
    title: 'Advertising',
    description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
    icon: assets.ads_icon
  },
  {
    title: 'Content Marketing',
    description: 'We help you execute your plan and deliver results. Plan. Execute. Succeed.',
    icon: assets.marketing_icon
  },
  {
    title: 'Content Writing',
    description: 'We help you create a marketing strategy that drives results.',
    icon: assets.content_icon
  },
  {
    title: 'Social Media',
    description: 'We help you build a strong social media presence and engage with your audience.',
    icon: assets.social_icon
  }
]

export const workData = [
  {
    image: assets.work_mobile_app,
    title: 'Mobile App Marketing',
    description: 'We turn bold ideas into powerful digital solutions that connect, engage...'
  },
  {
    image: assets.work_dashboard_management,
    title: 'Dashboard Management',
    description: 'We help you execute your plan and deliver results.'
  },
  {
    image: assets.work_fitness_app,
    title: 'Fitness App Promotion',
    description: 'We help you create a marketing strategy that drives results.'
  }
]