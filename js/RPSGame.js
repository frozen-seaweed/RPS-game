    const imgs = document.getElementsByClassName('imgs');
    const userBox = document.getElementById('userBox');
    const compBox = document.getElementById('compBox');
    const txtBox = document.getElementsByClassName('screen-txt');
    let userChoice, compChoice;
    let win = 0, lose = 0, draw = 0;
    
    $('.imgs').click( function() {
        for (let i=0; i<txtBox.length; i++) {
            txtBox[i].style.display = "none";
        }

        userBox.style.display = "block";
        compBox.style.display = "block";

        userBox.src = this.src;

        compChoice = Math.round((Math.random() * 2) + 1);
        switch (compChoice) {
            case 1 : compBox.src = imgs[0].src; break;
            case 2 : compBox.src = imgs[1].src; break;
            case 3 : compBox.src = imgs[2].src; break;
        }

        for (let i=0; i<imgs.length; i++){
            if (userBox.src === imgs[i].src) {
                userChoice = i;
                // break; 없어도 되는지
            }
        }

        switch (userChoice + 1) {
            case 1 : 
                if (compChoice === 1) {draw++; break;}
                if (compChoice === 2) {win++; break;}
                if (compChoice === 3) {lose++; break;}
            case 2 : 
                if (compChoice === 1) {lose++; break;}
                if (compChoice === 2) {draw++; break;}
                if (compChoice === 3) {win++; break;}
            case 3 : 
                if (compChoice === 1) {win++; break;}
                if (compChoice === 2) {lose++; break;}
                if (compChoice === 3) {draw++; break;}
        }

        document.getElementById('win').innerHTML = win;
        document.getElementById('lose').innerHTML = lose;
        document.getElementById('draw').innerHTML = draw;

        // return false; 없어도 되는지
    });      
