'use strict';
 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
        while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },
    detectPersonalLevel: function () {
        if ( personalMovieDB.count < 10 ){
            alert( 'You have watched not enought movies');
        }else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert( 'Classic count of watched movies ' );
        }else if (personalMovieDB.count > 30){
            alert ('You are crazy ');
        }else{
            alert('looks like error');
        }
    },
    rememberMyFilms: function (){
        for ( let i =1 ; i <= 2; i++){
            const a = prompt('What is your latest movie?', '');
            const b = prompt('Write your grade', '');
        
            if (a == null || a == '' || a.length >= 50 || b == null || b == '') {
                i--;
            
            }else{
                personalMovieDB.movies[a] = b;
                
            }
        
        }
    },
    showMyDb: function (){
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function (){
  

        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Your favorite genre number ${i}`);
            if (genre === '' || genre == null){
                console.log(`You entered not correct data or not entered at all`);
                i--;
            }else{
                personalMovieDB.genres.push(genre);
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre number ${i+1} is ${item}` );
        })
        
    },
    toggleVisibleMyDb: function (){
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();





