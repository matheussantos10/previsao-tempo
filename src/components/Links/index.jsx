/** Library */
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Links = () => {
    return (
        <div className='flex gap-5 absolute right-3 top-3 text-white'>

            <a href="https://www.linkedin.com/in/matheussantos10/" target="_blank">
                <span
                    className='flex gap-1 cursor-pointer ease-out duration-300
                    hover:scale-110'
                >
                    <LinkedInIcon />
                    LinkedIn
                </span>
            </a>

            <a href="https://github.com/matheussantos10" target="_blank">
                <span
                    className='flex gap-1 cursor-pointer ease-out duration-300 
                    hover:scale-110'
                >
                    <GitHubIcon />
                    GitHub
                </span>
            </a>
        </div>
    )
}