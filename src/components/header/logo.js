import logoImage from "../../../public/assets/images/logo.png";

export const Logo = () => {
    return <div className="logo-container">
        <img
            className="logo"
            src={logoImage}
            loading="lazy"
        />
    </div>
}