var noButton = document.getElementById('noButton');

        noButton.addEventListener('mousemove', function(e) {
            checkProximity(e);
        });

        function checkProximity(event) {
            var cursorX = event.clientX;
            var cursorY = event.clientY;

            var buttonRect = noButton.getBoundingClientRect();

            if (
                cursorX >= buttonRect.left &&
                cursorX <= buttonRect.right &&
                cursorY >= buttonRect.top &&
                cursorY <= buttonRect.bottom
            ) {
                moveNoButton();
            }
        }

        function moveNoButton() {
            var randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
            var randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

            noButton.style.position = 'absolute';
            noButton.style.top = randomY + 'px';
            noButton.style.left = randomX + 'px';
        }