document.addEventListener("DOMContentLoaded", function() {
    const letterText = document.getElementById("letter-text");
    const fullText = `To a girl who is more than a friend,

I was thinking so hard on what to write here..my mind was kind of empty.. and just randomly now I am thinking abt what love is..
I wonder what love is..yes it is cute and wonderful but it also kind of  gives the fear of separation..
From the moment we r born we r loved by so many ppl..parents grandparents relatives..as we grow up we will encounter many more ppl who truly love us. Then what makes this love between us so different and special..Why does it feel so good..why does it give butterflies in stomach.I don't know. 
But the bond this love creates is far different than the others. I feel  the difference between friendship and love is a thin line..far thinner than we think.. cause this bond is created out of nothingness..
2 random ppl meeting out of billions in this world and creating a bond called friendship.. and it is this friendship that grows a little bit to form the love we have found..
Love is weird..it is certainly not just physical..nor is it just emotional..but it is real..Kingdoms have fallen and risen due to love. Caesar fell for Cleopatra, Shah Jahan fell for Mumthaz..Both had completly different outcomes..but it was love nonetheless..It is that powerful.. just imagine what this love can do to 2 random ppl on some corner of earth. 
I don't know what made me think abt what love is..but for me love is something that a girl named Sowjhanya had on a boy named Vishal..

From a boy in love.`;

    let index = 0;

    function typeLetter() {
        if (index < fullText.length) {
            letterText.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(typeLetter, 50);
        }
    }

    typeLetter();

    // Music Player
   
    document.addEventListener('DOMContentLoaded', function () {
        let audio = document.getElementById("bg-music");
        audio.play().catch(error => console.log("Autoplay blocked, waiting for user interaction."));
    
        // Play music on first user interaction
        document.body.addEventListener("click", function () {
            audio.play();
        }, { once: true });
    });
    
});
