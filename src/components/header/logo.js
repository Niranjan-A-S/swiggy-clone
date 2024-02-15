import logoImage from "../../../public/assets/images/logo.png";

export const Logo = () => {
    return <img
        className="w-24"
        src={logoImage}
        loading="lazy"
    />
}