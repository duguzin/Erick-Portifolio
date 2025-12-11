 // Menu mobile toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Alternar ícone do menu
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Criar faíscas dinâmicas
        function createSpark() {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            
            // Posição aleatória
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            spark.style.left = `${x}%`;
            spark.style.top = `${y}%`;
            
            // Tamanho aleatório
            const size = Math.random() * 6 + 2;
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            
            // Cor levemente variada
            const hue = Math.random() * 20 + 50; // Amarelo variado
            spark.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
            spark.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 60%)`;
            
            // Velocidade aleatória
            const duration = Math.random() * 2 + 1;
            spark.style.animationDuration = `${duration}s`;
            
            // Adicionar a seção hero
            document.querySelector('.hero').appendChild(spark);
            
            // Remover após a animação
            setTimeout(() => {
                if (spark.parentNode) {
                    spark.remove();
                }
            }, duration * 1000);
        }
        
        // Criar faíscas periodicamente
        setInterval(createSpark, 300);
        
        // Criar algumas faíscas iniciais
        for (let i = 0; i < 15; i++) {
            setTimeout(createSpark, i * 100);
        }
        
        // Efeito de digitação no título
        const heroTitle = document.querySelector('.hero h1');
        
        // Adicionar efeito de brilho intermitente
        setInterval(() => {
            heroTitle.style.textShadow = '0 0 15px var(--primary)';
            
            setTimeout(() => {
                heroTitle.style.textShadow = 'none';
            }, 500);
        }, 5000);
        
        // Animação suave para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Efeito de hover nas estatísticas
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const number = this.querySelector('.stat-number');
                const currentValue = parseInt(number.textContent);
                
                // Efeito de contagem se for um número
                if (!isNaN(currentValue)) {
                    number.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        number.style.transform = 'scale(1)';
                    }, 300);
                }
            });
        });
        
        // Detectar tamanho da tela para otimizações
        function checkScreenSize() {
            const isMobile = window.innerWidth <= 768;
            
            // Ajustar comportamento baseado no tamanho da tela
            if (isMobile) {
                // Otimizações para mobile
                document.querySelectorAll('.electric-line').forEach(line => {
                    line.style.opacity = '0.4';
                });
            } else {
                // Configurações para desktop
                document.querySelectorAll('.electric-line').forEach(line => {
                    line.style.opacity = '0.7';
                });
            }
        }
        
        // Verificar tamanho da tela ao carregar e redimensionar
        window.addEventListener('load', checkScreenSize);
        window.addEventListener('resize', checkScreenSize);