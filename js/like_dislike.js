document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like');
    const dislikeButtons = document.querySelectorAll('.dislike');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el dislike correspondiente a esta tarjeta
            const card = this.closest('.card');
            const dislikeButton = card.querySelector('.dislike');
            
            if (this.src.includes('like1.png')) {
                this.src = 'img/like2.png';
                // Solo cambiar el dislike de esta tarjeta
                if (dislikeButton.src.includes('dislike2.png')) {
                    dislikeButton.src = 'img/dislike1.png';
                }
            } else if (this.src.includes('like2.png')) {
                this.src = 'img/like1.png';
            }
        });
    });

    dislikeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el like correspondiente a esta tarjeta
            const card = this.closest('.card');
            const likeButton = card.querySelector('.like');
            
            if (this.src.includes('dislike1.png')) {
                this.src = 'img/dislike2.png';
                // Solo cambiar el like de esta tarjeta
                if (likeButton.src.includes('like2.png')) {
                    likeButton.src = 'img/like1.png';
                }
            } else if (this.src.includes('dislike2.png')) {
                this.src = 'img/dislike1.png';
            }
        });
    });
});
