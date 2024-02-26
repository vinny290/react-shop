export default function Footer() {
	return (
		<footer className='footer page-footer green lighten-1'>
			<div className='container'></div>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getFullYear()} Copyright Text
					<a className='grey-text text-lighten-4 right' href='#!'>
						Repo
					</a>
				</div>
			</div>
		</footer>
	)
}
