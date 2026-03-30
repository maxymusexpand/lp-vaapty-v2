// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de fade-in ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Adiciona animação a todos os cards e seções
document.querySelectorAll('.step-card, .benefit-item, .stat-item, .media-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Manipulação do formulário
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Coleta os dados do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            capital: document.querySelector('input[name="capital"]:checked')?.value || ''
        };

        // Validação básica
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!formData.capital) {
            alert('Por favor, selecione uma opção de capital para investimento.');
            return;
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Aqui você pode integrar com seu backend ou serviço de email
        console.log('Dados do formulário:', formData);

        // Feedback ao usuário
        alert('Obrigado pelo seu interesse! Em breve entraremos em contato.');

        // Limpa o formulário
        contactForm.reset();

        // Opcional: Redirecionar ou mostrar uma mensagem de sucesso
        // window.location.href = '/obrigado.html';
    });
}

// Máscara para telefone (formato brasileiro)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length <= 11) {
            if (value.length <= 10) {
                // Formato: (XX) XXXX-XXXX
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                // Formato: (XX) XXXXX-XXXX
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
        }

        e.target.value = value;
    });
}

// Animação do header ao scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Adiciona classe quando scroll passa de 100px
    if (currentScroll > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Contador animado para números (opcional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Ativa contadores quando visíveis
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.dataset.count);
            if (target) {
                animateCounter(entry.target, target);
            }
        }
    });
}, { threshold: 0.5 });

// Adiciona observer aos elementos com contadores (se houver)
document.querySelectorAll('[data-count]').forEach(el => {
    counterObserver.observe(el);
});

// Detecção de dispositivo móvel
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    document.body.classList.add('mobile');
}

// Lazy loading de imagens (se aplicável)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Previne envio duplo do formulário
let formSubmitting = false;
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (formSubmitting) {
            e.preventDefault();
            return false;
        }
        formSubmitting = true;

        // Reset após 3 segundos
        setTimeout(() => {
            formSubmitting = false;
        }, 3000);
    });
}

console.log('🚀 LP Vaapty carregada com sucesso!');
