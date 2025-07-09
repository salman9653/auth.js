import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { BsCheckCircle, BsExclamationTriangle } from "react-icons/bs";

export const Icon = ({ name, className }) => {
    const icons = {
        user: <MdPerson className={className} />,
        email: <MdEmail className={className} />,
        password: <MdLock className={className} />,

        exclamationTriangle: <BsExclamationTriangle className={className} />,
        checkCircle: <BsCheckCircle className={className} />,

        eye: <MdVisibility className={className} />,
        eyeSlash: <MdVisibilityOff className={className} />,

        github: <FaGithub className={className} />,
        google: <FaGoogle className={className} />,
    };

    return icons[name]
}
