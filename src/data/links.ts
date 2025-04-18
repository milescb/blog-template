import InstagramIcon from '@/components/icons/InstagramIcon' // <-- Import new icon
import FacebookIcon from '@/components/icons/FacebookIcon' // <-- Import new icon

// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS = [
	{
		name: 'Instagram',
		url: 'https://instagram.com/kyles_23', // <-- Update URL
		icon: InstagramIcon
	},

	{
		name: 'Facebook',
		url: 'https://facebook.com/your_page_or_profile', // <-- Update URL
		icon: FacebookIcon
	}
] as const
