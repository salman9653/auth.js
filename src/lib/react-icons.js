import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson, MdVisibility, MdVisibilityOff } from "react-icons/md";

export const Icon = ({ name, className }) => {
    const icons = {
        user: <MdPerson className={className} />,
        email: <MdEmail className={className} />,
        password: <MdLock className={className} />,

        eye: <MdVisibility className={className} />,
        eyeSlash: <MdVisibilityOff className={className} />,

        github: <FaGithub className={className} />,
        google: <FaGoogle className={className} />,
    };

    return icons[name]
}
