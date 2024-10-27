document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav.header-nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let percentage = 0;
    const progressBar = document.querySelector('.progress');
    const percentageText = document.querySelector('.percentage');

    const loadingInterval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            percentageText.textContent = percentage + '%';
            progressBar.style.width = percentage + '%';
        } else {
            clearInterval(loadingInterval);
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
            }, 500);
        }
    }, 30); // Adjust speed of loading

    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Back to Top';
    backToTopButton.id = 'backToTop';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#b291ff';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});