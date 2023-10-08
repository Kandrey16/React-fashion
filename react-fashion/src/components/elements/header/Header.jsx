import style from './Header.module.css';
import logoImg from '../../../images/icons/logo.svg'


function Header() {
	return (
		<>
		<header className={style.header	}>
			<div className="container">
				<div className="row">
					<div className={`${style.logo} col`}>
						<img src={logoImg} alt="" />
						<span>Fashion</span>
					</div>
					<nav className={`${style.nav} col`}>
						<ul>
							<li><a href="/">Catalogue</a></li>
							<li><a href="/">Fashion</a></li>
							<li><a href="/">Favourite</a></li>
							<li><a href="/">Lifestyle</a></li>
							<li><a href="/" className={style.nav_btn}>Sign Up</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		
		</>
	)
}

export default Header;