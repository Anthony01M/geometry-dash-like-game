document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    let character = document.getElementById('character');
    if (!character.classList.contains('animate')) {
        character.classList.add('animate');
        setTimeout(function() {
            character.classList.remove('animate');
        }, 500);
    }
}

let checkCollision = setInterval(function() {
    let character = document.getElementById('character');
    let obstacle = document.getElementById('obstacle');

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft < 100 && obstacleLeft > 0 && characterTop >= 150) {
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert('Game Over');
        restartGame();
    }
}, 10);

function restartGame() {
    let obstacle = document.getElementById('obstacle');
    obstacle.style.animation = 'moveObstacle 2s infinite linear';
    obstacle.style.display = 'block';
}