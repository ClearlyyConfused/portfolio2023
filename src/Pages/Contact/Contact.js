import { useEffect } from 'react';
import './Contact.css';

function Contact() {
	// reset input
	useEffect(() => {
		document.getElementById('name').value = '';
		document.getElementById('email').value = '';
		document.getElementById('message').value = '';
	});

	return (
		<main className="contact" id="contact">
			<section>
				<h1>Contact.</h1>
				<p>Email me at doanl7@mcmaster.ca</p>
				<form action="https://api.web3forms.com/submit" method="POST">
					<input type="hidden" name="access_key" value={process.env.REACT_APP_EMAIL_KEY} />
					<div>
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" required />
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="email" name="email" id="email" required />
					</div>
					<div>
						<label htmlFor="message">Message:</label>
						<textarea name="message" id="message" required></textarea>
					</div>
					<div class="h-captcha" data-captcha="true"></div>
					<button type="submit">Send Message</button>
				</form>
				<script src="https://web3forms.com/client/script.js" async defer></script>
			</section>
		</main>
	);
}

export default Contact;
