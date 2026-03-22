// ── Intersection Observer for fade-in animations
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				setTimeout(() => entry.target.classList.add('visible'), i * 80);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.08 }
);
document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// ── Counter animation for stats
function animateCounter(el, target) {
	let start = 0;
	const duration = 1800;
	const step = (timestamp) => {
		if (!start) start = timestamp;
		const progress = Math.min((timestamp - start) / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3);
		el.textContent = Math.floor(eased * target) + '+';
		if (progress < 1) requestAnimationFrame(step);
	};
	requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const el = entry.target;
				const target = parseInt(el.dataset.target);
				animateCounter(el, target);
				counterObserver.unobserve(el);
			}
		});
	},
	{ threshold: 0.5 }
);

document.querySelectorAll('[data-target]').forEach((el) => counterObserver.observe(el));

// ── Theme toggle
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const sunSVG = `<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z"/>`;
const moonSVG = `<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>`;

function applyTheme(theme) {
	if (theme === 'light') {
		html.setAttribute('data-theme', 'light');
		themeIcon.innerHTML = sunSVG;
	} else {
		html.removeAttribute('data-theme');
		themeIcon.innerHTML = moonSVG;
	}
}

const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

themeToggle.addEventListener('click', () => {
	const current = html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
	const next = current === 'light' ? 'dark' : 'light';
	localStorage.setItem('theme', next);
	applyTheme(next);
});

// ── Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener(
	'scroll',
	() => {
		let current = '';
		sections.forEach((sec) => {
			if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
		});
		navLinks.forEach((a) => {
			a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
		});
	},
	{ passive: true }
);
		