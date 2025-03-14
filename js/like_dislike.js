document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like');
    const dislikeButtons = document.querySelectorAll('.dislike');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.src.includes('like1.png')) {
                this.src = 'img/like2.png';
                // Cambiar todas las imágenes de dislike a dislike1 si están en dislike2
                dislikeButtons.forEach(dislikeButton => {
                    if (dislikeButton.src.includes('dislike2.png')) {
                        dislikeButton.src = 'img/dislike1.png';
                    }
                });
            } else if (this.src.includes('like2.png')) {
                this.src = 'img/like1.png';
            }
        });
    });

    dislikeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.src.includes('dislike1.png')) {
                this.src = 'img/dislike2.png';
                // Cambiar todas las imágenes de like a like1 si están en like2
                likeButtons.forEach(likeButton => {
                    if (likeButton.src.includes('like2.png')) {
                        likeButton.src = 'img/like1.png';
                    }
                });
            } else if (this.src.includes('dislike2.png')) {
                this.src = 'img/dislike1.png';
            }
        });
    });
});
